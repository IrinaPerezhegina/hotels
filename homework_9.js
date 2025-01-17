function mySlice(arr, [start], [end]) {
    let startCopy = false;
    let result = [];
    if (start === end) {
        return (result = []);
    }
    if (!start) {
        startCopy = true;
    }
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === start) {
            startCopy = true;
        }
        if (arr[i] === end) {
            break;
        }
        if (startCopy) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(mySlice([6, 'tyt', 8, 9, 'tt', 5, 3, 'ttt'], [6], [5]));

function myIndexOf(arr, item, from) {
    let result = -1;
    let k = 0;
    for (let i = from ? from : 0; i <= arr.length - 1; i++) {
        if (arr[i] === item) {
            result = i;
            break;
        }
    }
    return result;
}
console.log(myIndexOf([6, 'tyt', 8, 9, 'n', 5, 3, 'k'], 9, 10));

function myIncludes(arr, item, from) {
    let result = false;
    let k = 0;
    for (let i = from ? from : 0; i <= arr.length - 1; i++) {
        if (arr[i] === item) {
            result = true;
            break;
        }
    }
    return result;
}
console.log(myIncludes([6, 'tyt', 8, 9, 'n', 5, 3, 'm'], 'ttt'));
