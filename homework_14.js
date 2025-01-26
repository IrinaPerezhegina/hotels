function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}
const numbers = [1, 2, 3, 4, 5, 45, 100, 0, -100, -30, 13];
const callback = (num) => num >= 3;

console.log(myFilter(numbers, callback));
console.log(numbers);
