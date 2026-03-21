function createDelayedSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return Promise.reject(new Error(`Аргументы должны быть числами. Получено: a=${a} (${typeof a}), b=${b} (${typeof b})`));
    }

    return new Promise((resolve, reject) => {
        let count = 0;
        let currentSum = a;
        const bValue = b;

        const intervalId = setInterval(() => {
            count++;
            const newSum = currentSum + bValue;

            console.log(`Итерация ${count}: ${currentSum} + ${bValue} = ${newSum}`);

            currentSum = newSum;

            if (count === 5) {
                clearInterval(intervalId);
                console.log(`Выполнено 5 итераций. Финальная сумма: ${currentSum}`);
                resolve(currentSum);
            }
        }, 2000);
    });
}



// успешное выполнение
console.log("Начальные значения: a = 10, b = 3");
console.log("Ожидаемая последовательность: 10+3=13, 13+3=16, 16+3=19, 19+3=22, 22+3=25\n");

createDelayedSum(10, 3)
    .then(finalSum => {
        console.log(`Итоговая сумма: ${finalSum}\n`);
    })
    .catch(error => {
        console.error(`Ошибка: ${error.message}\n`);
    });

// ошибочное выполнение 
setTimeout(() => {
    console.log("Начальные значения: a = 10, b = 'abc'\n");

    createDelayedSum(10, "abc")
        .then(finalSum => {
            console.log(`Итоговая сумма: ${finalSum}`);
        })
        .catch(error => {
            console.error(`Ошибка: ${error.message}\n`);
        });
}, 12000);