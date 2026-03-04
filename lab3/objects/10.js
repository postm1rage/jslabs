function Calculator() {
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read(5, 3);
console.log(calc.sum());
console.log(calc.mul());