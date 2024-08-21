let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

let calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

let calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log('Average Total:', calcAverage(totals));
