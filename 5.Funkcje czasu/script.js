// zadanie 1
let counter = 1;
const timerId = setInterval(() => {
    console.log(`Cześć po raz ${counter++}`)
    if (counter > 15) {
        clearInterval(timerId);
    }
}, 3000);

// zadanie 2
const table = ["hehe", "haha", "test123", "test45"];
let timerId = null;
let tablePointer = 0;
setTimeout(() => {
    console.log(table);
    timerId = setInterval(() => {
        console.log(`table[${tablePointer}] = ${table[tablePointer++]}`);
        if (tablePointer > table.length-1) {
            clearInterval(timerId);
        }
    }, 3000);
}, 2000);