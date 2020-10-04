// zadanie 1
let a = 30;
let b = 4;

if (a > b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}

// zadanie 2
let a = 100;
let b = 24;
let c = 36;

if (a > b && a > c) {
    console.log("a is the greatest");
} else if (b > a && b > c) {
    console.log("b is the greatest");
} else {
    console.log("c is the greatest");
}

// zadanie 3
for (let i = 0;i < 10;i++) {
    console.log("Lubię JavaScript");
}

// zadanie 4
let result = 0;
for (let i = 1;i <= 10;i++) {
    result += i;
}

// zadanie 5
let n = 5;
for (let i = 0;i <= n;i++) {
    let even = i%2 === 0;
    console.log(`${i} - ${even ? 'parzysta' : 'nieparzysta'}`);
}

// zadanie 6
for(let i = 0;i < 50;i++) {
    for(let j = 0;j < 10;j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// zadanie 7
for(let i = 0;i <= 100;i++) {
    if (i%15 === 0) {
        console.log('FizzBuzz');
    } else if (i%5 === 0) {
        console.log('Buzz');
    } else if (i%3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

// zadanie 8
// a
for(let y = 1;y <= 5;y++) {
    let row = '';
    for(let x = 0;x < y;x++) {
        row += '*';
    }
    console.log(row);
}

// b
for(let y = 1;y <= 5;y++) {
    let row = '';
    for(let ws = 0;ws < 5-y;ws++) {
        row += ' ';
    }

    for(let x = 0;x < y;x++) {
        row += '*';
        if (x < y-1) {
            row += ' ';
        }
    }
    console.log(row);
}

// c
for(let y = 0;y < 5;y++) {
    let row = '';
    for(let ws = 0;ws < 5-y;ws++) {
        row += ' ';
    }

    for(let x = 0;x < 1+y*2;x++) {
        row += '*';
    }
    console.log(row);
}

// d
for(let y = 1;y <= 11;y++) {
    let row = '';
    let flip = y > 6 ? 6 - y%6 : y%6;
    for(let x = 0;x < 5;x++) {
        if (flip === 0) {
            row += '-';
        } else if (x >= flip) {
            row += x;
        } else {
            row += "*";
        }
    }

    console.log(row);
}

// e
for(let y = 1;y <= 5;y++) {
    let row = '';
    for(let ws = 0;ws < 5-y;ws++) {
        row += ' ';
    }

    for(let x = 0;x < y;x++) {
        row += '*';
        if (x < y-1) {
            row += ' ';
        }
    }
    console.log(row);
}

for(let y = 1;y <= 3;y++) {
    console.log('    *');
}