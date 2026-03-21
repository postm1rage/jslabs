function createDelayedSum(a, b) {
    // Проверка типов аргументов
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

// успешное выполнение через async/await
async function runSuccess() {
    console.log("Начальные значения: a = 10, b = 3");
    console.log("Ожидаемая последовательность: 10+3=13, 13+3=16, 16+3=19, 19+3=22, 22+3=25\n");

    try {
        const finalSum = await createDelayedSum(10, 3);
        console.log(`Итоговая сумма: ${finalSum}\n`);
    } catch (error) {
        console.error(`Ошибка: ${error.message}\n`);
    }
}

runSuccess();

// ошибочное выполнение через async/await
setTimeout(async () => {
    console.log("Начальные значения: a = 10, b = 'abc'\n");

    try {
        const finalSum = await createDelayedSum(10, "abc");
        console.log(`Итоговая сумма: ${finalSum}`);
    } catch (error) {
        console.error(`Ошибка: ${error.message}\n`);
    }
}, 12000);