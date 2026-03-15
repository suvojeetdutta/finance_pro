# FinancePro - Expense Tracker Advance

A modern, feature-rich personal expense tracking application with PWA support, cloud sync capabilities, and beautiful glassmorphism UI.

## Features

### Core Functionality
- ✅ **User Authentication** - Login/Signup with mobile number validation
- ✅ **Expense Management** - Add, edit, delete expenses with categories (Need/Want/Save)
- ✅ **Income Tracking** - Track multiple income sources
- ✅ **Budget Management** - Set and monitor budgets per category

### Views
- **Dashboard** - Overview with income, balance, needs/wants/savings breakdown, charts
- **History** - Date-grouped expense list with search/filter
- **Budgets** - Category-wise budget vs spending visualization
- **Income** - Monthly income records management
- **Insights** - Detailed analytics with pie charts, trends, comparisons
- **Analytics** - Year-over-year analysis and spending patterns

### Technical Features
- ✅ **PWA Support** - Install as native app, works offline
- ✅ **Cloud Sync** - Optional Supabase integration for data backup
- ✅ **Data Export/Import** - Backup and restore functionality
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Modern UI** - Glassmorphism design with smooth animations

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Charts**: Chart.js
- **Icons**: Font Awesome
- **Fonts**: Inter
- **Storage**: LocalStorage + Supabase (optional)
- **PWA**: Service Worker

## Getting Started

### Local Development
Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

### Cloud Sync Setup (Optional)
1. Create a project at [Supabase](https://supabase.com)
2. Create tables: `expenses`, `incomes`, `budgets`
3. On first app launch, enter your Supabase URL and anon key when prompted

## Project Structure

```
expense_tracker_advance/
├── index.html          # Main HTML file
├── app.js             # Application logic
├── styles.css         # Styling
├── sync.js            # Supabase cloud sync
├── sw.js              # Service Worker (PWA)
├── manifest.json      # PWA manifest
├── config.js         # Configuration (create from config.example.js)
├── README.md         # This file
└── libs/             # External libraries
    ├── chart.min.js
    └── fontawesome/
```

## Screenshots

The app features a modern glassmorphism design with:
- Gradient backgrounds
- Card-based layout
- Smooth animations
- Interactive charts

## License

MIT License

## Author

Developed with ❤️ for personal finance management
