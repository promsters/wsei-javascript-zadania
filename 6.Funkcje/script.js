// zadanie 1
function itWorks() {
    console.log("Udało się!");
}
itWorks();

// zadanie 2
/**
 * @param {int} number
 */
function displayNumber(number) {
    console.log(number);
}

displayNumber(15);

// zadanie 3
/**
 * @param {array} someArray
 * @return {array}
 */
function takeAndReturn(someArray) {
    return someArray;
}
console.log(takeAndReturn([1,2,3]));

// zadanie 4
/**
 * @param {string} text
 * @param {int} n - how many repeats
 * @param {int } delay - delay between writes in ms
 */
function repeatToConsole(text, n, delay) {
    let repeats = 0;
    const timerId = setInterval(() => {
        if (++repeats > n) {
            console.log("Koniec");

            clearInterval(timerId);
            return;
        }

        console.log(text);
    }, delay);
}

repeatToConsole("Haha", 5, 1000);