// sync.js — Supabase Cloud Sync for FinancePro
// Credentials loaded from localStorage (first-time setup via modal)
// On first visit, users will be prompted to enter their Supabase URL and API key
var SUPABASE_URL = localStorage.getItem('supabase_url') || '';
var SUPABASE_KEY = localStorage.getItem('supabase_key') || '';

// Function to setup Supabase credentials - shows custom modal (works on mobile)
function showSupabaseSetupModal() {
    // Remove existing modal if any
    const existing = document.getElementById('supabaseSetupModal');
    if (existing) existing.remove();

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'supabaseSetupModal';
    modal.innerHTML = `
        <div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:system-ui,sans-serif;">
            <div style="background:white;border-radius:12px;padding:24px;max-width:400px;width:90%;box-shadow:0 10px 40px rgba(0,0,0,0.3);">
                <h2 style="margin:0 0 16px 0;color:#333;font-size:20px;">☁️ Supabase Setup</h2>
                <p style="color:#666;font-size:14px;margin:0 0 16px 0;">Enter your Supabase project details to enable cloud sync.</p>
                
                <label style="display:block;margin-bottom:8px;font-size:13px;color:#555;font-weight:500;">Project URL</label>
                <input type="text" id="supabaseUrlInput" placeholder="https://xxx.supabase.co" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;margin-bottom:16px;box-sizing:border-box;">
                
                <label style="display:block;margin-bottom:8px;font-size:13px;color:#555;font-weight:500;">Anon Key</label>
                <input type="text" id="supabaseKeyInput" placeholder="eyJhbGci..." style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;margin-bottom:20px;box-sizing:border-box;">
                
                <button id="saveSupabaseCreds" style="width:100%;padding:14px;background:#6366f1;color:white;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;">Save & Continue</button>
                
                <p style="text-align:center;margin:16px 0 0 0;font-size:12px;color:#999;">Get these from Supabase Dashboard → Settings → API</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handle save
    document.getElementById('saveSupabaseCreds').onclick = function() {
        const url = document.getElementById('supabaseUrlInput').value.trim();
        const key = document.getElementById('supabaseKeyInput').value.trim();
        
        if (!url || !key) {
            alert('Please enter both URL and key');
            return;
        }
        
        localStorage.setItem('supabase_url', url);
        localStorage.setItem('supabase_key', key);
        SUPABASE_URL = url;
        SUPABASE_KEY = key;
        
        modal.remove();
        alert('Supabase credentials saved!');
        location.reload();
    };
}

// Legacy function for UI button
function setupSupabaseCredentials() {
    showSupabaseSetupModal();
}

// Check if credentials exist, if not show modal on first visit
if (!SUPABASE_URL || !SUPABASE_KEY) {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(showSupabaseSetupModal, 500));
    } else {
        setTimeout(showSupabaseSetupModal, 800);
    }
}

class SyncManager {
    constructor() {
        this.online = navigator.onLine;
        this.pendingOps = JSON.parse(localStorage.getItem('sync_pending') || '[]');
        window.addEventListener('online', () => { this.online = true; this.flushPending(); });
        window.addEventListener('offline', () => { this.online = false; this.updateIndicator('offline'); });
    }

    // Get current user mobile from localStorage
    getUserId() {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const user = JSON.parse(currentUser);
            return user.mobile;
        }
        return null;
    }

    // Set current user (called after login)
    setUserId(mobile) {
        this.userId = mobile;
    }

    get headers() {
        return {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates,return=minimal'
        };
    }

    async req(table, method = 'GET', body = null, query = '') {
        if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error('Supabase credentials missing.');
        const url = `${SUPABASE_URL}/rest/v1/${table}${query}`;
        const opts = { method, headers: { ...this.headers } };
        if (method === 'GET') delete opts.headers['Prefer'];
        if (body) opts.body = JSON.stringify(body);
        console.log(`Sync ${method} ${table}:`, url);
        const res = await fetch(url, opts);
        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Sync error ${res.status}:`, errorText);
            throw new Error(`Sync ${method} ${table}: ${res.status} - ${errorText}`);
        }
        return method === 'GET' ? res.json() : null;
    }

    // ---- User Authentication ----

    async signupUser(mobile, passwordHash) {
        const row = {
            mobile: mobile,
            password_hash: passwordHash,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        try {
            await this.req('users', 'POST', [row]);
            return { success: true };
        } catch (e) {
            console.error('Signup error:', e);
            return { success: false, error: e.message };
        }
    }

    async loginUser(mobile) {
        try {
            const users = await this.req('users', 'GET', null, `?mobile=eq.${mobile}`);
            if (users && users.length > 0) {
                return { success: true, user: users[0] };
            }
            return { success: false, error: 'User not found' };
        } catch (e) {
            console.error('Login error:', e);
            return { success: false, error: e.message };
        }
    }

    async updateUserPassword(mobile, passwordHash) {
        const patch = {
            password_hash: passwordHash,
            updated_at: new Date().toISOString()
        };
        try {
            await this.req('users', 'PATCH', patch, `?mobile=eq.${mobile}`);
            return { success: true };
        } catch (e) {
            console.error('Password update error:', e);
            return { success: false, error: e.message };
        }
    }

    // ---- Push individual records ----

    async pushExpense(exp) {
        const userId = this.getUserId();
        if (!userId) { console.warn('No user logged in, skipping expense push'); return; }
        const row = {
            id: exp.id, user_id: userId, expense_date: exp.date, expense_type: exp.type || 'Daily',
            major: exp.major, sub: exp.sub, amount: exp.amount,
            description: exp.desc || '', deleted: false, updated_at: new Date().toISOString()
        };
        if (!this.online) { this.queueOp('upsert_expense', row); return; }
        try { await this.req('expenses', 'POST', [row]); this.updateIndicator('synced'); }
        catch (e) { this.queueOp('upsert_expense', row); this.updateIndicator('error', e.message); }
    }

    async softDeleteExpense(id) {
        const userId = this.getUserId();
        if (!userId) return;
        const patch = { deleted: true, updated_at: new Date().toISOString() };
        if (!this.online) { this.queueOp('delete_expense', { id, userId, ...patch }); return; }
        try { await this.req('expenses', 'PATCH', patch, `?id=eq.${id}&user_id=eq.${userId}`); this.updateIndicator('synced'); }
        catch (e) { this.queueOp('delete_expense', { id, userId, ...patch }); }
    }

    async pushIncome(inc, monthKey) {
        const userId = this.getUserId();
        if (!userId) { console.warn('No user logged in, skipping income push'); return; }
        const row = {
            id: String(inc.id), user_id: userId, income_date: inc.date, income_type: inc.type,
            amount: inc.amount, description: inc.desc || '', month_key: monthKey,
            deleted: false, updated_at: new Date().toISOString()
        };
        if (!this.online) { this.queueOp('upsert_income', row); return; }
        try { await this.req('incomes', 'POST', [row]); this.updateIndicator('synced'); }
        catch (e) { this.queueOp('upsert_income', row); }
    }

    async softDeleteIncome(id) {
        const userId = this.getUserId();
        if (!userId) return;
        const patch = { deleted: true, updated_at: new Date().toISOString() };
        if (!this.online) { this.queueOp('delete_income', { id: String(id), userId, ...patch }); return; }
        try { await this.req('incomes', 'PATCH', patch, `?id=eq.${String(id)}&user_id=eq.${userId}`); this.updateIndicator('synced'); }
        catch (e) { this.queueOp('delete_income', { id: String(id), userId, ...patch }); }
    }

    async pushBudgets(budgets) {
        const userId = this.getUserId();
        if (!userId) { console.warn('No user logged in, skipping budget push'); return; }
        const rows = Object.entries(budgets).map(([category, amount]) => ({
            id: `${userId}_${category}`, user_id: userId, category, amount, updated_at: new Date().toISOString()
        }));
        if (!this.online || !rows.length) return;
        try { await this.req('budgets', 'POST', rows); this.updateIndicator('synced'); }
        catch (e) { console.error('Budget sync failed:', e); }
    }

    // ---- Pull from cloud ----

    async pullAll() {
        const userId = this.getUserId();
        if (!userId) { console.warn('No user logged in, skipping pull'); return null; }
        if (!this.online) { this.updateIndicator('offline'); return null; }
        this.updateIndicator('syncing');
        try {
            const [expenses, incomes, budgets] = await Promise.all([
                this.req('expenses', 'GET', null, `?user_id=eq.${userId}&deleted=eq.false&order=expense_date.asc`),
                this.req('incomes', 'GET', null, `?user_id=eq.${userId}&deleted=eq.false&order=income_date.asc`),
                this.req('budgets', 'GET', null, `?user_id=eq.${userId}`)
            ]);
            this.updateIndicator('synced');
            return { expenses, incomes, budgets };
        } catch (e) {
            console.error('Pull failed:', e);
            this.updateIndicator('error', e.message);
            return null;
        }
    }

    // ---- Initial seed: push all local data to cloud ----

    async pushAll(expenses, incomes, budgets) {
        const userId = this.getUserId();
        if (!userId) { console.warn('No user logged in, skipping pushAll'); return; }
        if (!this.online) return;
        this.updateIndicator('syncing');
        try {
            // Expenses in batches of 100
            if (expenses.length) {
                const rows = expenses.map(e => ({
                    id: e.id, user_id: userId, expense_date: e.date, expense_type: e.type || 'Daily',
                    major: e.major, sub: e.sub, amount: e.amount,
                    description: e.desc || '', deleted: false, updated_at: new Date().toISOString()
                }));
                for (let i = 0; i < rows.length; i += 100)
                    await this.req('expenses', 'POST', rows.slice(i, i + 100));
            }
            // Incomes
            const incRows = [];
            Object.entries(incomes).forEach(([month, arr]) => {
                if (Array.isArray(arr)) arr.forEach(inc => incRows.push({
                    id: String(inc.id), user_id: userId, income_date: inc.date, income_type: inc.type,
                    amount: inc.amount, description: inc.desc || '', month_key: month,
                    deleted: false, updated_at: new Date().toISOString()
                }));
            });
            if (incRows.length) await this.req('incomes', 'POST', incRows);
            // Budgets
            if (budgets && Object.keys(budgets).length) await this.pushBudgets(budgets);

            // Subcategory config
            await this.pushSubcatConfig();

            localStorage.setItem('sync_initial_done', 'true');
            this.updateIndicator('synced');
        } catch (e) {
            console.error('Initial push failed:', e);
            this.updateIndicator('error', e.message);
        }
    }

    // ---- Subcategory Config Sync ----

    async pushSubcatConfig() {
        const userId = this.getUserId();
        if (!userId) return;
        const row = {
            user_id: userId,
            custom_subcategories: JSON.parse(localStorage.getItem('customSubcategories') || '{}'),
            rename_mappings: JSON.parse(localStorage.getItem('subcatRenameMappings') || '{}'),
            deleted_subcategories: JSON.parse(localStorage.getItem('deletedSubcategories') || '{}'),
            updated_at: new Date().toISOString()
        };
        if (!this.online) { this.queueOp('upsert_subcat_config', row); return; }
        try { await this.req('subcategory_config', 'POST', [row]); this.updateIndicator('synced'); }
        catch (e) { this.queueOp('upsert_subcat_config', row); console.error('Subcat config sync failed:', e); }
    }

    async pullSubcatConfig() {
        const userId = this.getUserId();
        if (!userId || !this.online) return null;
        try {
            const rows = await this.req('subcategory_config', 'GET', null, `?user_id=eq.${userId}`);
            if (rows && rows.length > 0) return rows[0];
        } catch (e) { console.error('Pull subcat config failed:', e); }
        return null;
    }

    // ---- Offline queue ----

    queueOp(type, data) {
        this.pendingOps.push({ type, data, time: Date.now() });
        localStorage.setItem('sync_pending', JSON.stringify(this.pendingOps));
        this.updateIndicator('pending');
    }

    async flushPending() {
        if (!this.pendingOps.length) return;
        const userId = this.getUserId();
        const ops = [...this.pendingOps];
        this.pendingOps = [];
        localStorage.setItem('sync_pending', '[]');
        for (const op of ops) {
            try {
                if (op.type === 'upsert_expense') await this.req('expenses', 'POST', [op.data]);
                else if (op.type === 'delete_expense') await this.req('expenses', 'PATCH', { deleted: true, updated_at: op.data.updated_at }, `?id=eq.${op.data.id}&user_id=eq.${userId}`);
                else if (op.type === 'upsert_income') await this.req('incomes', 'POST', [op.data]);
                else if (op.type === 'delete_income') await this.req('incomes', 'PATCH', { deleted: true, updated_at: op.data.updated_at }, `?id=eq.${String(op.data.id)}&user_id=eq.${userId}`);
                else if (op.type === 'upsert_subcat_config') await this.req('subcategory_config', 'POST', [op.data]);
            } catch (e) { this.pendingOps.push(op); }
        }
        localStorage.setItem('sync_pending', JSON.stringify(this.pendingOps));
        this.updateIndicator(this.pendingOps.length ? 'pending' : 'synced');
    }

    // ---- UI indicator ----

    updateIndicator(status, errorMsg = null) {
        const el = document.getElementById('syncIndicator');
        if (!el) return;
        const map = {
            synced:  { icon: 'fa-check',              text: 'Synced',    cls: 'sync-ok' },
            syncing: { icon: 'fa-rotate fa-spin',     text: 'Syncing…',  cls: 'sync-active' },
            offline: { icon: 'fa-cloud-slash',         text: 'Offline',   cls: 'sync-off' },
            pending: { icon: 'fa-cloud-arrow-up',      text: 'Pending',   cls: 'sync-pending' },
            error:   { icon: 'fa-triangle-exclamation', text: 'Error',    cls: 'sync-err' }
        };
        const s = map[status] || map.error;
        el.className = `sync-indicator ${s.cls}`;
        el.innerHTML = `<i class="fa-solid ${s.icon}"></i><span>${s.text}</span>`;
        
        // Show error message in a tooltip or alert
        if (status === 'error' && errorMsg) {
            console.error('Sync error details:', errorMsg);
            el.title = errorMsg; // Tooltip showing full error
        }
    }
}

const syncManager = new SyncManager();
