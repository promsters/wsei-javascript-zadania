// zadanie 1
let person = {
    firstName: 'Piotr',
    lastName: 'Lak',
    age: 20,
    country: 'Poland',
    city: 'Kraków'
};

let person2 = {
    firstName: 'Damian',
    lastName: 'Byk',
    age: 30,
    country: 'Poland',
    city: 'Kraków'
};

function printInfo() {
    console.log(this.firstName, this.lastName, this.age, this.country, this.city);
}

function incrementAge() {
    this.age++;
}

person.printInfo = printInfo;
person.incrementAge = incrementAge;
person2.incrementAge = incrementAge;

person.printInfo();
person.incrementAge();
person.incrementAge();
person2.incrementAge();

console.log(person.age, person2.age);

// zadanie 2
person.favDishes = [];
person2.favDishes = [];

/**
 * @param {string} name
 */
function addFavouriteDish(name) {
    this.favDishes.push(name);
}

function printFavouriteDishes() {
    console.log(this.favDishes);
}

person.addFavouriteDish = addFavouriteDish;
person.printFavouriteDishes = printFavouriteDishes;
person2.addFavouriteDish = addFavouriteDish;
person2.printFavouriteDishes = printFavouriteDishes;

// zadanie 3
let calculator = {
    a: 0,
    b: 0,
    /**
     * @param {int} a
     * @param {int} b
     */
    input: function (a, b) {
        this.a = a;
        this.b = b;
    },
    /**
     * @return {int}
     */
    add: function () {
        return this.a + this.b;
    },
    /**
     * @return {int}
     */
    subtract: function () {
        return this.a - this.b;
    },
    /**
     * @return {int}
     */
    multiply: function () {
        return this.a * this.b;
    },
    /**
     * @return {number}
     */
    divide: function () {
        if (this.b === 0) {
            throw 'InvalidArgumentException';
        }
        return this.a / this.b;
    }
};

calculator.input(6, 6);
console.log(calculator.multiply());

// zadanie 4
// szczerze nie wiem jak to ma wyglądać
let ladderClimber = {
    onTop: false,
    goUp: function () {
        if (this.isOnTop()) {
            throw 'Cant go up when already on top';
        }
        this.onTop = true;
    },
    goDown: function () {
       if (!this.isOnTop()) {
           throw 'Cant go down when not on top';
       }
       this.onTop = false;
    },
    /**
     * @return {boolean}
     */
    isOnTop: function () {
        return this.onTop;
    }
};

ladderClimber.goUp();
ladderClimber.goDown();
