let calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Test the function with a bill value of 100
console.log(calcTip(100)); // 15

// Test data
let bills = [125, 555, 44];

// Calculate tips
let tips = bills.map(bill => calcTip(bill));
console.log(tips); // [18.75, 111, 8.8]

// Calculate total values (bill + tip)
let total = bills.map((bill, index) => bill + tips[index]);
console.log(total); // [143.75, 666, 52.8]
