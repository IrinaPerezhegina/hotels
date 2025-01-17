function guessNumber() {
    let computerOne;
    console.log(
        'Один игрок загадывает целое число от 1 до 100, другой игрок отгадывает результат',
    );
    computerOne = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    let start = 1;
    let end = 100;
    let i = 1;
    let middle = Math.floor((end - start) / 2 + start);
    while (middle !== computerOne) {
        middle = Math.floor((end - start) / 2 + start);
        console.log('Администратор: ' + i + ' ' + 'попытка');
        console.log(
            'Копьютер 2: Число в диапазоне от ' +
                start +
                ' до ' +
                end +
                '. ' +
                'Пробую число' +
                ' ' +
                middle +
                '.',
        );

        if (computerOne > middle) {
            console.log('Копьютер 1: Больше');
            start = middle;
            i++;
        }
        if (computerOne < middle) {
            console.log('Копьютер 1: Меньше');
            i++;
            end = middle;
            middle = Math.floor((end - start) / 2 + start);
        }
        if (computerOne === middle) {
            console.log('Администратор: ' + i + ' ' + 'попытка');
            console.log(
                'Копьютер 2: Число в диапазоне от ' +
                    start +
                    ' до ' +
                    end +
                    '. ' +
                    'Пробую число' +
                    ' ' +
                    middle +
                    '.',
            );
            console.log('Угадал! Это число ' + computerOne + '.');
        }
    }
    console.log('Конец игры!');
}

guessNumber();
