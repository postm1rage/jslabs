console.log("1" + 2 + 3);        // "123" - конкатенация, первое строка
console.log(1 + 2 + "3");        // "33" - сначала сложение, потом конкатенация
console.log("1" - 2);            // -1 - строка преобразуется в число
console.log("1" + -2);           // "1-2" - конкатенация строки и числа
console.log("1" + "1" - "1");    // 10 - "11" - "1" = 10
console.log("foo" + - "bar");    // "fooNaN" - -"bar" дает NaN
console.log(0 == "0");           // true - нестрогое равенство, преобразование типов
console.log(0.5 + 0.1 == 0.6);   // true
console.log(0.1 + 0.2 == 0.3);   // false - погрешность чисел с плавающей точкой
console.log(true + true + true == 3); // true - true = 1
console.log(true == 1);          // true - нестрогое равенство
console.log(true === 1);         // false - строгое равенство, разные типы
console.log(1 < 2 < 3);          // true - (1<2)=true, true<3 => 1<3 true
console.log(3 > 2 > 1);          // false - (3>2)=true, true>1 => 1>1 false
console.log(9007199254740991 + 1 == 9007199254740991 + 2); // true - выход за пределы безопасных целых
console.log(Math.sqrt(-1) == Math.sqrt(-1)); // false - NaN не равен NaN