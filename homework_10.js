function getSumNumberFields(obj) {
    let sum = 0;
    for (var key in obj) {
        if (Number(obj[key])) {
            sum = sum + obj[key];
        }
    }
    return sum;
}
console.log(
    getSumNumberFields({
        cc: NaN,
        gg: undefined,
        gyg: null,
        name: 'Vasya',
        friends: 5,
        likes: 19,
        projects: 7,
    }),
);

function getKeyOfFieldsObjSort(obj) {
    let result = [];

    for (var key in obj) {
        if (Number(obj[key])) {
            result.push({ [key]: obj[key] });
        }
    }
    function quickSort(array) {
        if (array.length < 2) {
            return array;
        } else {
            let pivot = array[0];
            let less = [];
            for (let i = 1; i < array.length; i++) {
                if (
                    array[i][Object.keys(array[i])] >= pivot[Object.keys(pivot)]
                ) {
                    less.push(array[i]);
                }
            }
            let greater = [];
            for (let i = 1; i < array.length; i++) {
                if (
                    array[i][Object.keys(array[i])] < pivot[Object.keys(pivot)]
                ) {
                    greater.push(array[i]);
                }
            }
            return [...quickSort(less), pivot, ...quickSort(greater)];
        }
    }
    return quickSort(result).map((item) => Object.keys(item)[0]);
}
console.log(
    getKeyOfFieldsObjSort({
        cc: 100,
        gg: 1,
        gyg: null,
        name: 5,
        friends: 1112,
        likes: 19,
        projects: 7,
    }),
);
