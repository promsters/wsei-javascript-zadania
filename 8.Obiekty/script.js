// zadanie 1
let car = {
    make: 'AUDI',
    model: 'A3',
    engine: '2.0 TFSI',
    mileage: 95300,
    age: 7
};

console.log(car.make, car.model, car.engine, car.mileage);

// zadanie 2
car.setModel = function (model) {
    this.model = model;
}

// zadanie 3
let tableSumCalculator = {
    sum: 0,
    /**
     * @param {int[]} table
     */
    sumArray: function (table) {
        table.forEach((number) => {
            this.sum += number;
        });
    }
};

tableSumCalculator.sumArray([1, 2, 3]);
console.log(tableSumCalculator.sum);

// zadanie 4
for(const [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

// zadanie 5
car.radio = {
    active: true,
    fmFrequency: 98.1,
    volume: 14
};

console.log(car.radio.active, car.radio.fmFrequency, car.radio.volume);

// zadanie 6
car.speed = 120;
car.sayHello = () => {
    console.log('Hello');
};

