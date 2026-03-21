// Асинхронная функция для выполнения задания
async function performTask(candidate, taskNumber, prepTime, defenseTime) {
    const name = candidate[0];

    // Начало выполнения задания
    console.log(`${name} started the ${taskNumber} task.`);

    // Время на подготовку
    await new Promise(resolve => setTimeout(resolve, prepTime * 100));

    // Переход к защите
    console.log(`${name} moved on to the defense of the ${taskNumber} task.`);

    // Время на защиту
    await new Promise(resolve => setTimeout(resolve, defenseTime * 100));

    // Завершение задания
    console.log(`${name} completed the ${taskNumber} task.`);
}


async function interviewCandidate(candidate) {
    const name = candidate[0];
    const firstPrep = candidate[1];
    const firstDefense = candidate[2];
    const secondPrep = candidate[3];
    const secondDefense = candidate[4];


    await performTask(candidate, 1, firstPrep, firstDefense);


    console.log(`${name} is resting.`);
    await new Promise(resolve => setTimeout(resolve, 500));


    await performTask(candidate, 2, secondPrep, secondDefense);
}

async function interviews(candidates) {
    const promises = candidates.map(candidate => interviewCandidate(candidate));
    await Promise.all(promises);
}

// тест
const candidates = [
    ['Ivan', 5, 2, 7, 2],
    ['Denis', 3, 4, 5, 1],
    ['Timur', 4, 2, 5, 1]
];

interviews(candidates);