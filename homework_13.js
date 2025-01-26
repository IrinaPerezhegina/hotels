const mathemOerations = {
    multiply: (a, b) => a * b,
    division: (a, b) => a / b,
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
};

const selectedMultiply = 'multiply';
const selectedDivision = 'division';
const selectedAddition = 'addition';
const selectedSubtraction = 'subtraction';
function calculate(firstValue, twoValue, func) {
    return func(firstValue, twoValue);
}

console.log(calculate(6, 2, mathemOerations[selectedMultiply]));
console.log(calculate(6, 2, mathemOerations[selectedDivision]));
console.log(calculate(6, 2, mathemOerations[selectedAddition]));
console.log(calculate(6, 2, mathemOerations[selectedSubtraction]));
