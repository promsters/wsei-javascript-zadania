// zadanie 1
/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {int} age
 * @param {string} country
 * @param {string} city
 * @param {string} language
 * @constructor
 */
function Person(firstName, lastName, age, country, city, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
}

/**
 * @param {int} age
 */
Person.prototype.setAge = function (age) {
    this.age = age;
};

/**
 * @param {string} city
 */
Person.prototype.setCity = function (city) {
    this.city = city;
};

let people = [
    new Person('Tomasz', 'Ptak', 25, 'Poland', 'Kraków', 'PL'),
    new Person('Klaudia', 'Bączek', 22, 'Poland', 'Warszawa', 'PL'),
    new Person('Wojtek', 'Damraz', 31, 'Poland', 'Kielce', 'PL'),
    new Person('John', 'Smith', 29, 'United States', 'New York', 'EN'),
    new Person('Peter', 'Strompf', 20, 'Germany', 'Berlin', 'DE')
];

people[0].setAge(50);
people[3].setCity('Sosnowiec');
people[1].setAge(10);
people[1].setCity('Gdańsk');

console.log(people);

// zadanie 2
function Calculator() {
    this.operationsHistory = [];
    this.currentResult = 0;
}

/**
 * @param {int} number
 * @return {this}
 */
Calculator.prototype.add = function (number) {
    let historyRecord = `${this.currentResult} + ${number} = `;

    this.currentResult += number;

    historyRecord += this.currentResult;
    this.operationsHistory.push(historyRecord);

    return this;
};

/**
 * @param {int} number
 * @return {this}
 */
Calculator.prototype.subtract = function (number) {
    let historyRecord = `${this.currentResult} - ${number} = `;

    this.currentResult -= number;

    historyRecord += this.currentResult;
    this.operationsHistory.push(historyRecord);

    return this;
};

/**
 * @param {int} number
 * @return {this}
 */
Calculator.prototype.multiply = function (number) {
    let historyRecord = `${this.currentResult} * ${number} = `;

    this.currentResult *= number;

    historyRecord += this.currentResult;
    this.operationsHistory.push(historyRecord);

    return this;
};

/**
 * @param {int} number
 * @return {this}
 */
Calculator.prototype.divide = function (number) {
    if (number === 0) {
        throw 'InvalidArgumentException';
    }
    let historyRecord = `${this.currentResult} / ${number} = `;

    this.currentResult /= number;

    historyRecord += this.currentResult;
    this.operationsHistory.push(historyRecord);

    return this;
};

Calculator.prototype.printOperationsHistory = function () {
    this.operationsHistory.forEach((record) => {
        console.log(record);
    });
};

Calculator.prototype.clearOperationsHistory = function () {
    this.operationsHistory = [];
}

const calcA = new Calculator();
const calcB = new Calculator();

calcA.add(6).multiply(6);
calcB.add(50).subtract(25).divide(5);

console.log(calcA.currentResult);
calcA.printOperationsHistory();
console.log('------------');
console.log(calcB.currentResult);
calcB.printOperationsHistory();

// zadanie 3
function Game() {
    this.lastNumber = null;
    this.drawNumber = function () {
        Game.prototype.number = Math.floor(Math.random() * 10);
    };

    /**
     * @return {boolean}
     */
    this.checkGameEnd = function () {
        if (this.lastNumber !== null) {
            if (Math.abs(this.lastNumber-Game.prototype.number) === 5) {
                return true;
            }
        }

        this.lastNumber = Game.prototype.number;
        return false;
    };
}

Game.prototype.number = 0;

let game1 = new Game();
let game2 = new Game();

const timerId = setInterval(() => {
    game1.drawNumber();
    console.log(Game.prototype.number, game2.lastNumber);
    if (game2.checkGameEnd()) {
        clearInterval(timerId);
    }
}, 1000);