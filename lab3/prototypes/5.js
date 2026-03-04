function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Вариант 1
Rabbit.prototype = {};
console.log(rabbit.eats); // true

// Вариант 2
Rabbit.prototype.eats = false;
console.log(rabbit.eats); // false

// Вариант 3
delete rabbit.eats;
console.log(rabbit.eats); // true

// Вариант 4
delete Rabbit.prototype.eats;
console.log(rabbit.eats); // undefined