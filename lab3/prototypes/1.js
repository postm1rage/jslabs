let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true, собственное свойство rabbit
delete rabbit.jumps;
console.log(rabbit.jumps); // null, свойство удалили, теперь берется из прототипа animal
delete animal.jumps;
console.log(rabbit.jumps); // undefined,свойства нет ни в rabbit, ни в animal