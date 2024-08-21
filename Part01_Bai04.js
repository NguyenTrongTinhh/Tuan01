// Câu 1
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

let tip1 = (bill1 >= 50 && bill1 <= 300) ? bill1 * 0.15 : bill1 * 0.2;
let tip2 = (bill2 >= 50 && bill2 <= 300) ? bill2 * 0.15 : bill2 * 0.2;
let tip3 = (bill3 >= 50 && bill3 <= 300) ? bill3 * 0.15 : bill3 * 0.2;

console.log("Câu 1");
console.log(`The bill was ${bill1}, the tip was ${tip1.toFixed(2)}, and the total value is ${(bill1 + tip1).toFixed(2)}`);
console.log(`The bill was ${bill2}, the tip was ${tip2.toFixed(2)}, and the total value is ${(bill2 + tip2).toFixed(2)}`);
console.log(`The bill was ${bill3}, the tip was ${tip3.toFixed(2)}, and the total value is ${(bill3 + tip3).toFixed(2)}`);

// Câu 2
let bills = [275, 40, 430];
console.log("Câu 2");
bills.forEach(bill => {
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    let total = bill + tip;

    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value is ${total.toFixed(2)}`);
});
