// zadanie 1
let table = [15, 24];
console.log(table[0], table[1]);

// zadanie 2
let table = ["test1", 23, "3litery", 516, 0, "23"];
console.log(table[0], table[1]);
console.log(table[table.length-1]);
table.forEach((el) => {
    console.log(el);
});

table.forEach((el, key) => {
    if (key%2 === 0) {
        console.log(el);
    }
});

table.forEach((el) => {
    if (typeof el === 'string') {
        console.log(el);
    }
});

table.forEach((el) => {
    if (typeof el === 'number') {
        console.log(el);
    }
});

// zadanie 3
let table = [421, 13, 8, 78, 16, 241, -51, 0];

let sum = 0;
let diff = 0;
let avg = 0;
let countEven = 0;
let countOdd = 0;
let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;

table.forEach((el) => {
    sum += el;
    diff -= el;
    if (el%2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }

    if (el > max) {
        max = el;
    }

    if (el < min) {
        min = el;
    }
});

avg = sum/table.length;

console.log(sum, diff, avg, countEven, countOdd, max, min);
table.reverse().forEach((el) => {
    console.log(el);
});

// zadanie 4
/**
 * @param {number[]} table
 * @return {number}
 */
function sumTable(table) {
    let sum = 0;
    table.forEach((el) => {
        sum += el;
    });

    return sum;
}

console.log(sumTable([1, 2, 3]));

// zadanie 5
/**
 * @param {number[]} table
 */
function printAvgMultipliedTable(table) {
    let avg = 0;
    table.forEach((el) => {
        avg += el;
    });

    avg /= table.length;

    table.forEach((el) => {
        console.log(el*avg);
    });
}

// zadanie 6
/**
 * @param {number[]} table
 * @return {number}
 */
function tableEvenNumbersAvg(table) {
    let sum = 0;
    let evenCount = 0;
    table.forEach((el) => {
        if (el%2 === 0) {
            sum += el;
            evenCount++;
        }
    });

    return sum/evenCount;
}

// zadanie 7
/**
 * @param {array} table
 */
function displaySortedArray(table) {
    table.sort();
    table.forEach((el) => {
        console.log(el);
    });
}

// zadanie 8
/**
 * @param {array} table1
 * @param {array} table2
 * @return {array}
 */
function mergeArrayKeys(table1, table2) {
    return [...table1.keys(), ...table2.keys()];
}

console.log(mergeArrayKeys([1, 4, 5], [0, 1]));

// zadanie 9
/**
 * @param {array} table
 * @param {any} element
 * @return {array}
 */
function removeArrayElement(table, element) {
    return table.filter((value) => {return value !== element});
}

console.log(removeArrayElement(["dobry", "zly", "do usuniecia"], "do usuniecia"));

// zadanie 10
/**
 * @param {int[]} table
 * @return {int[]}
 */
function changeNumbersSign(table) {
    return table.map((el) => {
        return el * -1;
    });
}

console.log(changeNumbersSign([-2, -8, 3, 0, -4]));