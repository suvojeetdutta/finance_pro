// Subcategory mappings for each major category
const SUBCATEGORIES = {
  "Need": [
    "Housing",
    "Parents Expenses",
    "Utilities",
    "Subscriptions & Fees",
    "Groceries",
    "Health & Medicine",
    "Grooming",
    "Transport",
    "Recharge",
    "Other"
  ],
  "Want": [
    "Dining",
    "Habits",
    "Subscriptions",
    "Snacks",
    "Misc",
    "Shopping",
    "Entertainment",
    "Gifts"
  ],
  "Save": [
    "Investment",
    "Emergency Fund",
    "Other"
  ]
};

// Preloaded income data (Jan & Feb 2026)
const PRELOADED_INCOMES = {
  "2026-01": [
    { id: 10001, type: "Salary", amount: 216706, desc: "January Salary", date: "2026-01-01" },
    { id: 10002, type: "Investment", amount: 4926, desc: "Interest from Savings Account", date: "2026-01-01" }
  ],
  "2026-02": [
    { id: 10003, type: "Salary", amount: 212997, desc: "February Salary", date: "2026-02-01" },
    { id: 10004, type: "Investment", amount: 5524, desc: "Interest from Savings Account", date: "2026-02-01" }
  ]
};

const PRELOADED_EXPENSES = [
  // ---------- JANUARY 2026 - FIXED EXPENSES ----------
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Housing", amount: 28300, desc: "EMI (14500+13800)" },
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Housing", amount: 33246, desc: "Prepayment (16273+16973)" },
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Parents Expenses", amount: 10000, desc: "Parents" },
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Utilities", amount: 800, desc: "Flat Maintenance" },
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Utilities", amount: 510, desc: "Electricity" },
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Utilities", amount: 3009, desc: "Broadband" },
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Subscriptions & Fees", amount: 200, desc: "Zerodha" },
  { type: 'Fixed', date: "2026-01-01", major: "Need", sub: "Subscriptions & Fees", amount: 500, desc: "IBM" },
  { type: 'Fixed', date: "2026-01-01", major: "Want", sub: "Subscriptions", amount: 217, desc: "Netflix" },
  { type: 'Fixed', date: "2026-01-01", major: "Want", sub: "Subscriptions", amount: 59, desc: "Google One" },

  // ---------- JANUARY 2026 - DAILY EXPENSES ----------
  // 1st January
  { type: 'Daily', date: "2026-01-01", major: "Need", sub: "Transport", amount: 74, desc: "Transportation" },
  { type: 'Daily', date: "2026-01-01", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-01-01", major: "Want", sub: "Dining", amount: 765, desc: "Restaurant" },
  { type: 'Daily', date: "2026-01-01", major: "Want", sub: "Snacks", amount: 30, desc: "Cold Drink" },

  // 2nd January
  { type: 'Daily', date: "2026-01-02", major: "Need", sub: "Groceries", amount: 782, desc: "Bigbasket" },
  { type: 'Daily', date: "2026-01-02", major: "Need", sub: "Health & Medicine", amount: 128, desc: "Medical - Pad" },
  { type: 'Daily', date: "2026-01-02", major: "Need", sub: "Groceries", amount: 40, desc: "Bread" },
  { type: 'Daily', date: "2026-01-02", major: "Need", sub: "Groceries", amount: 90, desc: "Cake" },
  { type: 'Daily', date: "2026-01-02", major: "Need", sub: "Groceries", amount: 220, desc: "Egg Crate" },
  { type: 'Daily', date: "2026-01-02", major: "Need", sub: "Groceries", amount: 20, desc: "Curd" },
  { type: 'Daily', date: "2026-01-02", major: "Want", sub: "Dining", amount: 130, desc: "Local" },
  { type: 'Daily', date: "2026-01-02", major: "Want", sub: "Snacks", amount: 24, desc: "Tea" },

  // 3rd January
  { type: 'Daily', date: "2026-01-03", major: "Need", sub: "Groceries", amount: 405, desc: "Zepto" },
  { type: 'Daily', date: "2026-01-03", major: "Want", sub: "Dining", amount: 70, desc: "Local" },

  // 4th January
  { type: 'Daily', date: "2026-01-04", major: "Need", sub: "Transport", amount: 144, desc: "Transportation" },
  { type: 'Daily', date: "2026-01-04", major: "Want", sub: "Misc", amount: 100, desc: "Ticket" },
  { type: 'Daily', date: "2026-01-04", major: "Want", sub: "Dining", amount: 1113, desc: "Restaurant" },
  { type: 'Daily', date: "2026-01-04", major: "Want", sub: "Snacks", amount: 90, desc: "Cold Drink & Tea" },
  { type: 'Daily', date: "2026-01-04", major: "Want", sub: "Snacks", amount: 20, desc: "Phuchka" },
  { type: 'Daily', date: "2026-01-04", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 5th January
  { type: 'Daily', date: "2026-01-05", major: "Need", sub: "Groceries", amount: 380, desc: "Chicken" },
  { type: 'Daily', date: "2026-01-05", major: "Need", sub: "Transport", amount: 20, desc: "Bus" },
  { type: 'Daily', date: "2026-01-05", major: "Want", sub: "Dining", amount: 16, desc: "Local" },

  // 6th January
  { type: 'Daily', date: "2026-01-06", major: "Need", sub: "Transport", amount: 70, desc: "Moto+Bus" },
  { type: 'Daily', date: "2026-01-06", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 7th January
  { type: 'Daily', date: "2026-01-07", major: "Want", sub: "Dining", amount: 200, desc: "Local" },
  { type: 'Daily', date: "2026-01-07", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 8th January
  { type: 'Daily', date: "2026-01-08", major: "Need", sub: "Grooming", amount: 203, desc: "Wild Stone Code" },
  { type: 'Daily', date: "2026-01-08", major: "Need", sub: "Utilities", amount: 630, desc: "Water Filter" },
  { type: 'Daily', date: "2026-01-08", major: "Want", sub: "Dining", amount: 78, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-01-08", major: "Need", sub: "Transport", amount: 25, desc: "Bus" },
  { type: 'Daily', date: "2026-01-08", major: "Want", sub: "Dining", amount: 303, desc: "Swiggy" },

  // 9th January
  { type: 'Daily', date: "2026-01-09", major: "Need", sub: "Transport", amount: 22, desc: "Bus" },
  { type: 'Daily', date: "2026-01-09", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-01-09", major: "Want", sub: "Dining", amount: 128, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-01-09", major: "Want", sub: "Snacks", amount: 32, desc: "Tea" },
  { type: 'Daily', date: "2026-01-09", major: "Want", sub: "Dining", amount: 20, desc: "Roti" },
  { type: 'Daily', date: "2026-01-09", major: "Want", sub: "Snacks", amount: 95, desc: "Cold Drink" },

  // 10th January
  { type: 'Daily', date: "2026-01-10", major: "Want", sub: "Dining", amount: 44, desc: "Petai Paratha" },
  { type: 'Daily', date: "2026-01-10", major: "Need", sub: "Groceries", amount: 406, desc: "Zepto" },
  { type: 'Daily', date: "2026-01-10", major: "Need", sub: "Groceries", amount: 282, desc: "Flipkart Minutes" },
  { type: 'Daily', date: "2026-01-10", major: "Need", sub: "Transport", amount: 284, desc: "Transportation" },

  // 11th January
  { type: 'Daily', date: "2026-01-11", major: "Want", sub: "Dining", amount: 370, desc: "Local Chinese" },
  { type: 'Daily', date: "2026-01-11", major: "Want", sub: "Habits", amount: 165, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-01-11", major: "Need", sub: "Transport", amount: 124, desc: "Transportation" },
  { type: 'Daily', date: "2026-01-11", major: "Want", sub: "Dining", amount: 663, desc: "Parents Dinner" },
  { type: 'Daily', date: "2026-01-11", major: "Want", sub: "Dining", amount: 194, desc: "Zomato" },
  { type: 'Daily', date: "2026-01-11", major: "Want", sub: "Snacks", amount: 60, desc: "Tea" },
  { type: 'Daily', date: "2026-01-11", major: "Want", sub: "Snacks", amount: 30, desc: "Ice Cream" },
  { type: 'Daily', date: "2026-01-11", major: "Need", sub: "Groceries", amount: 42, desc: "Bread" },

  // 12th January
  { type: 'Daily', date: "2026-01-12", major: "Need", sub: "Groceries", amount: 800, desc: "Chicken" },
  { type: 'Daily', date: "2026-01-12", major: "Want", sub: "Snacks", amount: 70, desc: "Tea" },

  // 13th January
  { type: 'Daily', date: "2026-01-13", major: "Want", sub: "Dining", amount: 140, desc: "Chicken Rolls" },
  { type: 'Daily', date: "2026-01-13", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 14th January
  { type: 'Daily', date: "2026-01-14", major: "Want", sub: "Dining", amount: 304, desc: "Swiggy" },
  { type: 'Daily', date: "2026-01-14", major: "Want", sub: "Snacks", amount: 135, desc: "Cold Drink & Nuts" },
  { type: 'Daily', date: "2026-01-14", major: "Want", sub: "Dining", amount: 20, desc: "Roti" },
  { type: 'Daily', date: "2026-01-14", major: "Want", sub: "Snacks", amount: 50, desc: "Cold Drink" },

  // 15th January
  { type: 'Daily', date: "2026-01-15", major: "Want", sub: "Dining", amount: 361, desc: "Cake & Breakfast" },
  { type: 'Daily', date: "2026-01-15", major: "Need", sub: "Groceries", amount: 275, desc: "5 kg Rice" },
  { type: 'Daily', date: "2026-01-15", major: "Want", sub: "Snacks", amount: 53, desc: "Tea" },
  { type: 'Daily', date: "2026-01-15", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 16th January
  { type: 'Daily', date: "2026-01-16", major: "Need", sub: "Recharge", amount: 38, desc: "Mobile - Vi" },
  { type: 'Daily', date: "2026-01-16", major: "Want", sub: "Dining", amount: 86, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-01-16", major: "Want", sub: "Misc", amount: 20, desc: "Lighter" },
  { type: 'Daily', date: "2026-01-16", major: "Want", sub: "Dining", amount: 312, desc: "Swiggy" },

  // 17th January
  { type: 'Daily', date: "2026-01-17", major: "Want", sub: "Dining", amount: 30, desc: "Petai Paratha" },
  { type: 'Daily', date: "2026-01-17", major: "Want", sub: "Dining", amount: 240, desc: "Teamotion" },
  { type: 'Daily', date: "2026-01-17", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 18th January
  { type: 'Daily', date: "2026-01-18", major: "Want", sub: "Dining", amount: 69, desc: "Breakfast" },
  { type: 'Daily', date: "2026-01-18", major: "Want", sub: "Misc", amount: 10, desc: "Gave" },
  { type: 'Daily', date: "2026-01-18", major: "Want", sub: "Transport", amount: 120, desc: "Transportation" },

  // 19th January
  { type: 'Daily', date: "2026-01-19", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-01-19", major: "Want", sub: "Dining", amount: 330, desc: "Lunch" },

  // 20th January
  { type: 'Daily', date: "2026-01-20", major: "Want", sub: "Dining", amount: 78, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-01-20", major: "Want", sub: "Dining", amount: 85, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-01-20", major: "Want", sub: "Transport", amount: 102, desc: "Transportation" },
  { type: 'Daily', date: "2026-01-20", major: "Want", sub: "Dining", amount: 510, desc: "Bachan's Dhaba" },
  { type: 'Daily', date: "2026-01-20", major: "Want", sub: "Snacks", amount: 95, desc: "Cold Drink" },

  // 21st January
  { type: 'Daily', date: "2026-01-21", major: "Want", sub: "Dining", amount: 78, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-01-21", major: "Want", sub: "Dining", amount: 15, desc: "Dinner" },
  { type: 'Daily', date: "2026-01-21", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 22nd January
  { type: 'Daily', date: "2026-01-22", major: "Want", sub: "Dining", amount: 244, desc: "Lunch" },

  // 23rd January
  { type: 'Daily', date: "2026-01-23", major: "Need", sub: "Groceries", amount: 644, desc: "Bigbasket" },
  { type: 'Daily', date: "2026-01-23", major: "Need", sub: "Grooming", amount: 599, desc: "Cred Deo Set of 6" },

  // 24th January
  { type: 'Daily', date: "2026-01-24", major: "Want", sub: "Habits", amount: 165, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-01-24", major: "Want", sub: "Dining", amount: 64, desc: "Petai Paratha" },
  { type: 'Daily', date: "2026-01-24", major: "Need", sub: "Transport", amount: 82, desc: "Transportation" },
  { type: 'Daily', date: "2026-01-24", major: "Need", sub: "Health & Medicine", amount: 46, desc: "Electrol" },
  { type: 'Daily', date: "2026-01-24", major: "Want", sub: "Dining", amount: 110, desc: "Lunch" },

  // 25th January
  { type: 'Daily', date: "2026-01-25", major: "Need", sub: "Groceries", amount: 100, desc: "Coconut Water" },
  { type: 'Daily', date: "2026-01-25", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 26th January
  { type: 'Daily', date: "2026-01-26", major: "Want", sub: "Shopping", amount: 199, desc: "Cred Bag" },
  { type: 'Daily', date: "2026-01-26", major: "Need", sub: "Transport", amount: 154, desc: "Transportation" },
  { type: 'Daily', date: "2026-01-26", major: "Want", sub: "Dining", amount: 1642, desc: "Eating Out - 734+814+94" },

  // 27th January
  { type: 'Daily', date: "2026-01-27", major: "Need", sub: "Health & Medicine", amount: 98, desc: "Rantac300" },

  // 28th January
  { type: 'Daily', date: "2026-01-28", major: "Want", sub: "Dining", amount: 220, desc: "Dinner" },
  { type: 'Daily', date: "2026-01-28", major: "Need", sub: "Groceries", amount: 42, desc: "Bread" },

  // 29th January
  { type: 'Daily', date: "2026-01-29", major: "Need", sub: "Transport", amount: 1342, desc: "Uber Pass" },
  { type: 'Daily', date: "2026-01-29", major: "Want", sub: "Gifts", amount: 1084, desc: "Jonai Birthday" },
  { type: 'Daily', date: "2026-01-29", major: "Want", sub: "Dining", amount: 10, desc: "Snacks" },
  { type: 'Daily', date: "2026-01-29", major: "Need", sub: "Transport", amount: 22, desc: "Auto" },
  { type: 'Daily', date: "2026-01-29", major: "Want", sub: "Dining", amount: 130, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-01-29", major: "Need", sub: "Health & Medicine", amount: 700, desc: "Doctor Fees" },
  { type: 'Daily', date: "2026-01-29", major: "Need", sub: "Health & Medicine", amount: 380, desc: "Meds+Electrol" },
  { type: 'Daily', date: "2026-01-29", major: "Want", sub: "Dining", amount: 56, desc: "Swapna" },

  // 30th January
  { type: 'Daily', date: "2026-01-30", major: "Want", sub: "Dining", amount: 320, desc: "Zomato" },
  { type: 'Daily', date: "2026-01-30", major: "Want", sub: "Snacks", amount: 112, desc: "Cold Drink" },
  { type: 'Daily', date: "2026-01-30", major: "Need", sub: "Transport", amount: 35, desc: "Transportation" },

  // 31st January
  { type: 'Daily', date: "2026-01-31", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // ---------- FEBRUARY 2026 - FIXED EXPENSES ----------
  { type: 'Fixed', date: "2026-02-01", major: "Need", sub: "Housing", amount: 28300, desc: "Home Loan EMI" },
  { type: 'Fixed', date: "2026-02-01", major: "Need", sub: "Housing", amount: 37834, desc: "Home Loan Prepayment" },
  { type: 'Fixed', date: "2026-02-01", major: "Need", sub: "Parents Expenses", amount: 10000, desc: "Parents Expenses" },
  { type: 'Fixed', date: "2026-02-01", major: "Need", sub: "Utilities", amount: 450, desc: "Electricity Bill" },
  { type: 'Fixed', date: "2026-02-01", major: "Want", sub: "Subscriptions", amount: 217, desc: "Netflix" },
  { type: 'Fixed', date: "2026-02-01", major: "Want", sub: "Subscriptions", amount: 59, desc: "Google One" },

  // ---------- FEBRUARY 2026 - DAILY EXPENSES ----------
  // 1st February
  { type: 'Daily', date: "2026-02-01", major: "Need", sub: "Groceries", amount: 160, desc: "Bigbasket" },
  { type: 'Daily', date: "2026-02-01", major: "Want", sub: "Dining", amount: 330, desc: "Swiggy" },
  { type: 'Daily', date: "2026-02-01", major: "Want", sub: "Misc", amount: 75, desc: "Aadhaar Mobile Number Update" },

  // 2nd February
  { type: 'Daily', date: "2026-02-02", major: "Need", sub: "Transport", amount: 22, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-02", major: "Want", sub: "Dining", amount: 95, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-02-02", major: "Want", sub: "Dining", amount: 8, desc: "Dinner" },

  // 3rd February
  { type: 'Daily', date: "2026-02-03", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-02-03", major: "Want", sub: "Dining", amount: 100, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-02-03", major: "Need", sub: "Transport", amount: 25, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-03", major: "Want", sub: "Snacks", amount: 64, desc: "Tea" },

  // 4th February
  { type: 'Daily', date: "2026-02-04", major: "Want", sub: "Gifts", amount: 641, desc: "Books for Uttal" },
  { type: 'Daily', date: "2026-02-04", major: "Want", sub: "Shopping", amount: 410, desc: "Myntra 2 Shirts" },
  { type: 'Daily', date: "2026-02-04", major: "Want", sub: "Dining", amount: 140, desc: "Zomato Lunch" },
  { type: 'Daily', date: "2026-02-04", major: "Want", sub: "Dining", amount: 194, desc: "Zomato Dinner" },

  // 5th February
  { type: 'Daily', date: "2026-02-05", major: "Need", sub: "Transport", amount: 46, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-05", major: "Want", sub: "Misc", amount: 635, desc: "Wireless Mouse" },
  { type: 'Daily', date: "2026-02-05", major: "Want", sub: "Dining", amount: 64, desc: "Zomato Dinner" },

  // 6th February
  { type: 'Daily', date: "2026-02-06", major: "Want", sub: "Habits", amount: 36, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-02-06", major: "Want", sub: "Dining", amount: 280, desc: "Swiggy Lunch" },

  // 7th February
  { type: 'Daily', date: "2026-02-07", major: "Want", sub: "Dining", amount: 106, desc: "Zomato Lunch" },
  { type: 'Daily', date: "2026-02-07", major: "Need", sub: "Health & Medicine", amount: 1564, desc: "Maa's Arthritis Medicine" },
  { type: 'Daily', date: "2026-02-07", major: "Need", sub: "Groceries", amount: 236, desc: "Cold Drink & Ice Cream FM" },
  { type: 'Daily', date: "2026-02-07", major: "Want", sub: "Gifts", amount: 139, desc: "Valentine Chocolate from FM" },
  { type: 'Daily', date: "2026-02-07", major: "Want", sub: "Snacks", amount: 78, desc: "Tea" },
  { type: 'Daily', date: "2026-02-07", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-02-07", major: "Want", sub: "Dining", amount: 205, desc: "Zomato Dinner" },

  // 8th February
  { type: 'Daily', date: "2026-02-08", major: "Want", sub: "Dining", amount: 303, desc: "Swiggy Lunch" },
  { type: 'Daily', date: "2026-02-08", major: "Need", sub: "Transport", amount: 362, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-08", major: "Want", sub: "Dining", amount: 70, desc: "Roti" },
  { type: 'Daily', date: "2026-02-08", major: "Need", sub: "Recharge", amount: 195, desc: "My Jio" },
  { type: 'Daily', date: "2026-02-08", major: "Need", sub: "Recharge", amount: 195, desc: "Mother Jio" },

  // 9th February
  { type: 'Daily', date: "2026-02-09", major: "Need", sub: "Groceries", amount: 480, desc: "Chicken" },
  { type: 'Daily', date: "2026-02-09", major: "Need", sub: "Groceries", amount: 170, desc: "Egg Crate" },
  { type: 'Daily', date: "2026-02-09", major: "Need", sub: "Transport", amount: 22, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-09", major: "Want", sub: "Dining", amount: 163, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-02-09", major: "Need", sub: "Groceries", amount: 234, desc: "Bigbasket" },

  // 10th February
  { type: 'Daily', date: "2026-02-10", major: "Want", sub: "Dining", amount: 10, desc: "Muri" },
  { type: 'Daily', date: "2026-02-10", major: "Need", sub: "Transport", amount: 46, desc: "Transportation" },

  // 11th February
  { type: 'Daily', date: "2026-02-11", major: "Need", sub: "Groceries", amount: 42, desc: "Bread" },
  { type: 'Daily', date: "2026-02-11", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-02-11", major: "Want", sub: "Snacks", amount: 51, desc: "Snacks" },
  { type: 'Daily', date: "2026-02-11", major: "Want", sub: "Dining", amount: 10, desc: "Roti" },

  // 12th February
  { type: 'Daily', date: "2026-02-12", major: "Want", sub: "Dining", amount: 72, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-02-12", major: "Need", sub: "Grooming", amount: 172, desc: "Set Wet Hair Spray" },
  { type: 'Daily', date: "2026-02-12", major: "Need", sub: "Groceries", amount: 248, desc: "Mortein Spray" },
  { type: 'Daily', date: "2026-02-12", major: "Want", sub: "Dining", amount: 20, desc: "Roti" },

  // 13th February
  { type: 'Daily', date: "2026-02-13", major: "Want", sub: "Gifts", amount: 3687, desc: "Valentine's Day" },
  { type: 'Daily', date: "2026-02-13", major: "Want", sub: "Dining", amount: 72, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-02-13", major: "Need", sub: "Transport", amount: 24, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-13", major: "Want", sub: "Dining", amount: 277, desc: "Swiggy Dinner" },
  { type: 'Daily', date: "2026-02-13", major: "Want", sub: "Dining", amount: 800, desc: "Vodka" },
  { type: 'Daily', date: "2026-02-13", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-02-13", major: "Want", sub: "Snacks", amount: 95, desc: "Cold Drink" },
  { type: 'Daily', date: "2026-02-13", major: "Want", sub: "Snacks", amount: 40, desc: "Nuts" },

  // 14th February
  { type: 'Daily', date: "2026-02-14", major: "Want", sub: "Dining", amount: 44, desc: "Petai Paratha" },
  { type: 'Daily', date: "2026-02-14", major: "Want", sub: "Dining", amount: 116, desc: "Zomato Dinner" },
  { type: 'Daily', date: "2026-02-14", major: "Want", sub: "Shopping", amount: 352, desc: "Laptop Stand" },
  { type: 'Daily', date: "2026-02-14", major: "Want", sub: "Misc", amount: 119, desc: "Card Holder" },

  // 15th February
  { type: 'Daily', date: "2026-02-15", major: "Need", sub: "Groceries", amount: 13, desc: "Bigbasket" },
  { type: 'Daily', date: "2026-02-15", major: "Need", sub: "Grooming", amount: 400, desc: "Haircut" },
  { type: 'Daily', date: "2026-02-15", major: "Want", sub: "Dining", amount: 110, desc: "Lunch" },
  { type: 'Daily', date: "2026-02-15", major: "Want", sub: "Misc", amount: 50, desc: "Shivratri" },
  { type: 'Daily', date: "2026-02-15", major: "Want", sub: "Dining", amount: 115, desc: "Zomato Dinner" },

  // 16th February - No expenses

  // 17th February
  { type: 'Daily', date: "2026-02-17", major: "Need", sub: "Groceries", amount: 180, desc: "Egg Crate" },
  { type: 'Daily', date: "2026-02-17", major: "Need", sub: "Groceries", amount: 42, desc: "Bread" },
  { type: 'Daily', date: "2026-02-17", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-02-17", major: "Want", sub: "Dining", amount: 248, desc: "Zomato Dinner" },
  { type: 'Daily', date: "2026-02-17", major: "Need", sub: "Groceries", amount: 80, desc: "Zepto" },
  { type: 'Daily', date: "2026-02-17", major: "Want", sub: "Snacks", amount: 77, desc: "Cold Drink" },
  { type: 'Daily', date: "2026-02-17", major: "Want", sub: "Snacks", amount: 47, desc: "Tea" },

  // 18th February
  { type: 'Daily', date: "2026-02-18", major: "Need", sub: "Groceries", amount: 450, desc: "Chicken" },
  { type: 'Daily', date: "2026-02-18", major: "Need", sub: "Groceries", amount: 10, desc: "Curd" },
  { type: 'Daily', date: "2026-02-18", major: "Want", sub: "Dining", amount: 72, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-02-18", major: "Want", sub: "Dining", amount: 247, desc: "Swiggy Dinner" },
  { type: 'Daily', date: "2026-02-18", major: "Want", sub: "Snacks", amount: 50, desc: "Cold Drink" },

  // 19th February
  { type: 'Daily', date: "2026-02-19", major: "Need", sub: "Groceries", amount: 30, desc: "Musur Dal" },
  { type: 'Daily', date: "2026-02-19", major: "Need", sub: "Groceries", amount: 15, desc: "Green Chilli" },
  { type: 'Daily', date: "2026-02-19", major: "Want", sub: "Dining", amount: 10, desc: "Chips" },
  { type: 'Daily', date: "2026-02-19", major: "Want", sub: "Dining", amount: 12, desc: "Roti" },

  // 20th February
  { type: 'Daily', date: "2026-02-20", major: "Want", sub: "Dining", amount: 22, desc: "Petai Paratha" },
  { type: 'Daily', date: "2026-02-20", major: "Want", sub: "Habits", amount: 180, desc: "Cigarettes" },

  // 21st February
  { type: 'Daily', date: "2026-02-21", major: "Want", sub: "Dining", amount: 22, desc: "Petai Paratha" },
  { type: 'Daily', date: "2026-02-21", major: "Want", sub: "Habits", amount: 660, desc: "Cigarettes" },
  { type: 'Daily', date: "2026-02-21", major: "Want", sub: "Dining", amount: 101, desc: "Swiggy Lunch" },
  { type: 'Daily', date: "2026-02-21", major: "Want", sub: "Dining", amount: 91, desc: "Swiggy Dinner" },
  { type: 'Daily', date: "2026-02-21", major: "Want", sub: "Misc", amount: 100, desc: "Donate" },

  // 22nd February - No expenses

  // 23rd February
  { type: 'Daily', date: "2026-02-23", major: "Need", sub: "Other", amount: 4000, desc: "Mutation Amount" },
  { type: 'Daily', date: "2026-02-23", major: "Want", sub: "Dining", amount: 314, desc: "Swiggy Dinner" },
  { type: 'Daily', date: "2026-02-23", major: "Want", sub: "Habits", amount: 330, desc: "Cigarettes" },

  // 24th February
  { type: 'Daily', date: "2026-02-24", major: "Want", sub: "Dining", amount: 50, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-02-24", major: "Want", sub: "Dining", amount: 68, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-02-24", major: "Want", sub: "Snacks", amount: 41, desc: "Tea" },
  { type: 'Daily', date: "2026-02-24", major: "Want", sub: "Snacks", amount: 85, desc: "Cold Drink" },

  // 25th February
  { type: 'Daily', date: "2026-02-25", major: "Need", sub: "Transport", amount: 1434, desc: "Uber Shuttle Pass" },
  { type: 'Daily', date: "2026-02-25", major: "Need", sub: "Transport", amount: 22, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-25", major: "Want", sub: "Dining", amount: 84, desc: "Mio Amore" },
  { type: 'Daily', date: "2026-02-25", major: "Want", sub: "Dining", amount: 15, desc: "Roti" },

  // 26th February
  { type: 'Daily', date: "2026-02-26", major: "Want", sub: "Dining", amount: 50, desc: "Office Lunch" },
  { type: 'Daily', date: "2026-02-26", major: "Need", sub: "Transport", amount: 22, desc: "Transportation" },
  { type: 'Daily', date: "2026-02-26", major: "Want", sub: "Dining", amount: 254, desc: "Swiggy Dinner" },
  { type: 'Daily', date: "2026-02-26", major: "Want", sub: "Gifts", amount: 753, desc: "Dinner set for Ayush" },
  { type: 'Daily', date: "2026-02-26", major: "Need", sub: "Groceries", amount: 359, desc: "Handwash & Wet Tissues" },
  { type: 'Daily', date: "2026-02-26", major: "Need", sub: "Health & Medicine", amount: 558, desc: "Lens Solution" },

  // 27th February
  { type: 'Daily', date: "2026-02-27", major: "Want", sub: "Gifts", amount: 10, desc: "Wrapper" },
  { type: 'Daily', date: "2026-02-27", major: "Need", sub: "Transport", amount: 603, desc: "Uber Go" },
  { type: 'Daily', date: "2026-02-27", major: "Want", sub: "Snacks", amount: 85, desc: "Cold Drink" },

  // 28th February
  { type: 'Daily', date: "2026-02-28", major: "Want", sub: "Dining", amount: 217, desc: "Zomato/Swiggy Lunch" },
  { type: 'Daily', date: "2026-02-28", major: "Need", sub: "Parents Expenses", amount: 4500, desc: "Maa's Slippers" },
  { type: 'Daily', date: "2026-02-28", major: "Want", sub: "Dining", amount: 122, desc: "Zomato Dinner" }
];

// Function to get subcategories for a major category
function getSubcategories(major) {
  return SUBCATEGORIES[major] || [];
}

// Function to add a new subcategory
function addSubcategory(major, newSub) {
  if (major && newSub && SUBCATEGORIES[major]) {
    if (!SUBCATEGORIES[major].includes(newSub)) {
      SUBCATEGORIES[major].push(newSub);
      return true;
    }
  }
  return false;
}