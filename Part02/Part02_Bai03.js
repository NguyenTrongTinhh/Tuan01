let createPerson = (fullName, mass, height) => ({
    fullName,
    mass,
    height,
    calcBMI() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
});

let mark = createPerson('Mark Miller', 78, 1.69);
let john = createPerson('John Smith', 92, 1.95);

mark.calcBMI();
john.calcBMI();

let result = mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`;

console.log(result);
