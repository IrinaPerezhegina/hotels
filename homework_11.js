// 1 задание
function geStringCapitalLetter(str) {
    return str.trim()[0].toUpperCase() + str.trim().slice(1);
}
// console.log(geStringCapitalLetter(' d ssshhhhh  fff '));

// 2 задание
function getCroppedLine(str, size) {
    let result = str;
    let lastIndex = size - 1;
    if (str.length == size - 1 || str.length < size) {
        return str + '...';
    }
    const date = (el) => {
        if (
            el === ' ' ||
            el === ',' ||
            el === '.' ||
            el === ':' ||
            el === '!' ||
            el === '?' ||
            el === ';'
        ) {
            return true;
        } else {
            return false;
        }
    };
    for (let i = lastIndex; i < str.length; i++) {
        if (!str[i + 1]) {
            lastIndex = i + 1;
            break;
        } else if (date(str[i]) && !date(str[i + 1])) {
            lastIndex = i;
            break;
        } else if (!date(str[i]) && date(str[i + 1])) {
            lastIndex = i + 1;
            break;
        } else if (date(str[i]) && date(str[i + 1])) {
            lastIndex = i;
            break;
        }
    }
    return result.slice(0, lastIndex) + '...';
}
console.log(
    getCroppedLine(
        'Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим, чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.Необходимо реализовать такую функцию.',
        17,
    ),
);

// 3 задание
function isSubstring(str1, str2) {
    return (
        str1.toUpperCase().includes(str2.toUpperCase()) ||
        str2.toUpperCase().includes(str1.toUpperCase())
    );
}
console.log(isSubstring('ПОДСТРОКА', 'строка'));
