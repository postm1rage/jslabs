async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    // wait() возвращает Promise, который в итоге даст значение 10
    wait().then(result => {
        console.log(result);
    });

    // или если нужно вернуть результат наружу
    return wait();
}
f(); // через секунду выведет 10