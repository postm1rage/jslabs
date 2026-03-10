function f1(x, callback) {
  setTimeout(() => {
    callback(x * x);
  }, Math.random() * 1000);
}

function f2(x, callback) {
  setTimeout(() => {
    callback(2 * x);
  }, Math.random() * 1000);
}

function f3(x, callback) {
  setTimeout(() => {
    callback(-2);
  }, Math.random() * 1000);
}

function f4(x, callback) {
  setTimeout(() => {
    callback(x + 5);
  }, Math.random() * 1000);
}

function f5(x, callback) {
  setTimeout(() => {
    callback(x * 3);
  }, Math.random() * 1000);
}

function f6(x, callback) {
  setTimeout(() => {
    callback(10);
  }, Math.random() * 1000);
}

let functions = [f1, f2, f3, f4, f5, f6];

function calculate(x, n) {
  console.log("Для x = " + x + ", n = " + n);
  let sum = 0;
  let i = 0;

  function next(val) {
    if (val !== undefined) {
      sum = sum + val;
      console.log("промежуточный результат " + sum);
    }
    if (i < n) {
      functions[i](x, next);
      i++;
    } else {
      console.log("Ответ: " + sum);
    }
  }

  next();
}

calculate(3, 2);
setTimeout(() => {
  calculate(3, 4);
}, 2000);
setTimeout(() => {
  calculate(3, 6);
}, 4000);
