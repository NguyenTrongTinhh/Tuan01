// Challenge01
// Data 1
let mark_weight_1 = 78;  // kg
let mark_height_1 = 1.69;  // meters
let john_weight_1 = 92;  // kg
let john_height_1 = 1.95;  // meters

let mark_bmi_1 = mark_weight_1 / (mark_height_1 ** 2);
let john_bmi_1 = john_weight_1 / (john_height_1 ** 2);
let mark_higher_bmi_1 = mark_bmi_1 > john_bmi_1;

console.log("Challenge 01");
console.log("Data 1: Mark's BMI:", mark_bmi_1);
console.log("Data 1: John's BMI:", john_bmi_1);
console.log("Data 1: Does Mark have a higher BMI than John?", mark_higher_bmi_1);

// Data 2
let mark_weight_2 = 95;  // kg
let mark_height_2 = 1.88;  // meters
let john_weight_2 = 85;  // kg
let john_height_2 = 1.76;  // meters

let mark_bmi_2 = mark_weight_2 / (mark_height_2 ** 2);
let john_bmi_2 = john_weight_2 / (john_height_2 ** 2);
let mark_higher_bmi_2 = mark_bmi_2 > john_bmi_2;

console.log("Data 2: Mark's BMI:", mark_bmi_2);
console.log("Data 2: John's BMI:", john_bmi_2);
console.log("Data 2: Does Mark have a higher BMI than John?", mark_higher_bmi_2);

//Challenge02
console.log("Challenge 02");
// Data1
if (mark_bmi_1 > john_bmi_1) {
    console.log(`Mark's BMI (${mark_bmi_1.toFixed(1)}) is higher than John's (${john_bmi_1.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${john_bmi_1.toFixed(1)}) is higher than Mark's (${mark_bmi_1.toFixed(1)})!`);
}
// Data2
if (mark_bmi_2 > john_bmi_2) {
    console.log(`Mark's BMI (${mark_bmi_2.toFixed(1)}) is higher than John's (${john_bmi_2.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${john_bmi_2.toFixed(1)}) is higher than Mark's (${mark_bmi_2.toFixed(1)})!`);
}