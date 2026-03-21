let promise = new Promise(function (resolve, reject) {
    resolve(1); // сразу вызываем resolve(1) (завершение функции успехом)
    setTimeout(() => resolve(2), 1000); // через 1 секунду пытаемся вызвать resolve(2). не сработает, тк мы уже завершили функцию успехом
});
promise.then(console.log); // выводим результат (1)

