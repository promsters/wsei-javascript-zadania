// zadanie 1
document.querySelector('#test-event').addEventListener('click', (event) => {
    console.log(event);
});

document.addEventListener('mousemove', (event) => {
    console.log(event);
});

document.querySelector('#test-event').addEventListener('mouseover', (event) => {
    console.log(event);
});

document.addEventListener('keydown', (event) => {
    console.log(event);
});

document.addEventListener('scroll', (event) => {
    console.log(event);
});

document.querySelector('#input-test').addEventListener('change', (event) => {
    console.log(event);
});

// zadanie 2
function putTextToSpan() {
    this.nextElementSibling.innerText = this.dataset.text;
}

document.querySelector('#ex2').addEventListener('click', putTextToSpan);

// zadanie 3
function colorToggle(event) {
    this.style.backgroundColor = event.type === 'mouseover' ? 'blue' : 'red';
}
const ex3Square = document.querySelector('#ex3');
ex3Square.addEventListener('mouseover', colorToggle);
ex3Square.addEventListener('mouseout', colorToggle);

// zadanie 4
function validateInput(event) {
    if (event.key.length === 1 && event.key !== " " && !isNaN(event.key)) {
        this.value = this.dataset.value;
        this.nextElementSibling.innerText = 'You cannot input any numbers';
        return;
    }

    this.dataset.value = this.value;
    this.nextElementSibling.innerText = '';
}

const inputTest = document.querySelector('#input-test');
inputTest.dataset.value = inputTest.value;
inputTest.addEventListener('keyup', validateInput);

// zadanie 5
// div ex5 nie istnieje - robie na ex2
function countClicks() {
    if (!('counter' in this.dataset)) {
        this.dataset.counter = 0;
    }

    this.dataset.counter++;
    this.nextElementSibling.innerText = this.dataset.counter;

    if (this.dataset.counter == 10) {
        this.removeEventListener('click', countClicks);
    }
}

document.querySelector('#ex2').addEventListener('click', countClicks);

// zadanie 6
document.addEventListener('scroll', (event) => {
    if (window.scrollY > 200) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = null;
    }
});

// zadanie 7
let calculator = {
    element: document.querySelector('#calculator'),
    a: null,
    b: null,
    operation: null,
    calculate: function () {
        if (this.operation === '+') {
            this.a += this.b;
        } else if (this.operation === '-') {
            this.a -= this.b;
        } else if (this.operation === '*') {
            this.a *= this.b;
        } else if (this.operation === '/') {
            this.a /= this.b;
        }

        this.b = null;
        this.operation = null;

        this.element.querySelector('input').value = this.a;
    }
}

function numberButtonClick() {
    const number = parseInt(this.innerText);
    if (calculator.a === null) {
        calculator.a = number;
    } else if (calculator.b === null && calculator.operation !== null) {
        calculator.b = number;

        calculator.calculate();
    }
}

function operationButtonClick() {
    calculator.operation = this.innerText;
}

calculator.element.querySelectorAll('div:first-of-type button').forEach((button) => {
    button.addEventListener('click', numberButtonClick);
});

calculator.element.querySelectorAll('div:last-of-type button').forEach((button) => {
    button.addEventListener('click', operationButtonClick);
});
