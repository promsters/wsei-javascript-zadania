// zadanie 1
let bool1 = true;
let bool2 = false;

console.log(bool1 === bool2);

// zadanie 2
let a = 15;
let b = 6;
let moduloResult = 0;

moduloResult = a%b;
console.log(moduloResult);

// zadanie 3
let s1 = "test123";
let s2 = "dom";
let stringsResult = '';

stringsResult = s1 + s2;
console.log(stringsResult);

// zadanie 4
let someNumber = 425;
let someString = "425";

console.log(someNumber == someString); // true
console.log(someNumber === someString); // false
// === -> strict comparsion (typy muszą się zgadzać)

// zadanie 5
let counter = 30;

console.log(counter);
console.log(++counter); // po lewej bo chcemy najpierw wykonac operacje, a nie wyswietlic
console.log(--counter); // po lewej bo chcemy najpierw wykonac operacje, a nie wyswietlic

// zadanie 6
let a = 15;
let b = 30;
let result = null;

result = a > b;
console.log(result);