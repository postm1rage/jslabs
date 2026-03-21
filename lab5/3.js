// функции
function f1(x, callback) {
    setTimeout(() => {
        const result = x * x;
        console.log(`f1(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f2(x, callback) {
    setTimeout(() => {
        const result = 2 * x;
        console.log(`f2(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f3(x, callback) {
    setTimeout(() => {
        const result = -2;
        console.log(`f3(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f4(x, callback) {
    setTimeout(() => {
        const result = x * 3;
        console.log(`f4(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f5(x, callback) {
    setTimeout(() => {
        const result = x + 10;
        console.log(`f5(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

function f6(x, callback) {
    setTimeout(() => {
        const result = 5;
        console.log(`f6(${x}) = ${result}`);
        callback(result);
    }, Math.floor(Math.random() * 1000));
}

// промисификация
function f1Promise(x) {
    return new Promise((resolve) => {
        f1(x, resolve);
    });
}

function f2Promise(x) {
    return new Promise((resolve) => {
        f2(x, resolve);
    });
}

function f3Promise(x) {
    return new Promise((resolve) => {
        f3(x, resolve);
    });
}

function f4Promise(x) {
    return new Promise((resolve) => {
        f4(x, resolve);
    });
}

function f5Promise(x) {
    return new Promise((resolve) => {
        f5(x, resolve);
    });
}

function f6Promise(x) {
    return new Promise((resolve) => {
        f6(x, resolve);
    });
}

// вычисление f
async function calculateF(x, functions) {
    let total = 0;

    for (let i = 0; i < functions.length; i++) {
        const value = await functions[i](x);
        total += value;
        console.log(`Промежуточный результат: ${total}`);
    }

    return total;
}


// тест
const x = 3;
console.log(`x = ${x}`);

// n = 4 
setTimeout(() => {
    console.log("n = 4");
    calculateF(x, [f1Promise, f2Promise, f3Promise, f4Promise])
        .then(result => {
            console.log(`F(${x}) = ${result}\n`);
        });
}, 3000);