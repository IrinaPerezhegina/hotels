// 1 Логгер
function createLogger() {
    const arr = [];
    const obj = {
        log: (log = (message) => {
            arr.push(message);

            return message;
        }),
        getLogs: (getLogs = () => {
            return arr;
        }),
    };

    return obj;
}
const data = createLogger();
data.log('One');
data.log('Two');
data.log('Three');
console.log(data.getLogs());

// 2 Генератор случайных чисел из диапазона
function createRandomGenerator(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('min и max должны быть числами');
    }
    const start = min;
    const end = max;
    return function () {
        return Math.floor(Math.random() * (end - start)) + start;
    };
}

const firstExample = createRandomGenerator(1, 100);
console.log(firstExample());
const twoExample = createRandomGenerator(1, 5);
console.log(twoExample());
