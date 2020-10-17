// zadanie 1
const newDiv = document.createElement('div');
newDiv.innerText = 'To jest nowy element';
document.body.append(newDiv);

// zadanie 2
const fruits = ['apple', 'strawberry', 'watermelon', 'kiwi', 'pear', 'blueberry'];

const ulElement = document.createElement('ul');
document.body.append(ulElement);

fruits.forEach((fruitName) => {
    const liElement = document.createElement('li');
    liElement.innerText = fruitName;

    ulElement.append(liElement);
});

// zadanie 3
ulElement.addEventListener('click', function () {
    ulElement.querySelectorAll('li:nth-of-type(odd)').forEach((li) => {
        li.remove();
    });
});

// zadanie 4
const button = document.createElement('button');
button.innerText = "usuwam sie po kliknieciu";
document.body.append(button);

button.addEventListener('click', function () {
    this.remove();
});

// zadanie 5
const randomAmount = Math.floor(Math.random()*20);
for(let i = 1;i <= randomAmount;i++) {
    const div = document.createElement('div');
    div.innerText = `to jest div numer ${i}`;

    document.body.append(div);
}

// zadanie 6
// jesli chodzilo o utworzenie tej struktury recznie w index.html to sie rozpedzilem.
// dopiero pomyslalem o tym pozniej jak zobaczylem kolejne zadania
const htmlObject = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span', };

function createElements(data, parentElement) {
    for (const [key, value] of Object.entries(data)) {
        const tagName = key.substr(0, key.length - 1);
        const element = document.createElement(tagName);

        if (typeof value === 'object') {
            createElements(value, element);
        } else {
            element.innerHTML = value;
        }

        parentElement.append(element);
    }
}

createElements(htmlObject, document.body);

// zadanie 7 (div#ex7)
document.querySelectorAll('div#ex7 > div').forEach((listContainer) => {
    const ul = listContainer.querySelector('ul');
    const button = listContainer.querySelector('button');

    const targetList = document.querySelector(`#${listContainer.dataset.target}`);

    button.addEventListener('click', () => {
        const targetListUl = targetList.querySelector('ul');
        targetListUl.append(ul.lastElementChild);

        if (targetListUl.childElementCount === 1) {
            targetList.querySelector('button').disabled = false;
        }

        if (ul.childElementCount === 0) {
            button.disabled = true;
        }
    });
});

// zadanie 8 (form#ex8)
document.querySelector('form#ex8').addEventListener('submit', function (event) {
    event.preventDefault();

    const data = Object.fromEntries((new FormData(this)).entries());

    for(let i = 0;i < data.amount; i++) {
        const element = document.createElement(data.tag);
        element.innerHTML = data.text;
        element.style.color = data.color;

        document.body.append(element);
    }
});

// zadanie 9
const TableGenerator = {
    /**
     * @param {array} headers
     * @param {array} records
     * @param {Element} appendTo
     */
    generate: function(headers, records, appendTo) {
        this.table = document.createElement('table');

        this.addHeader(headers);
        this.addBody(records);

        appendTo.appendChild(this.table);
    },
    /**
     * @param {array} headers
     */
    addHeader: function (headers) {
        if (headers.length === 0) {
            return;
        }

        this.addRow(headers, 'th');
    },
    /**
     * @param {array} records
     */
    addBody: function (records) {
        records.forEach((record) => {
            this.addRow(record, 'td');
        });
    },
    /**
     * @param {array} elements
     * @param {string} elementTagName
     */
    addRow: function (elements, elementTagName) {
        const tr = document.createElement('tr');
        elements.forEach((value) => {
            const element = document.createElement(elementTagName);
            element.innerHTML = value;
            tr.appendChild(element);
        });

        this.table.appendChild(tr);
    }
};

const PeopleListFormHandler = {
    init: function() {
        this.container = document.querySelector('#ex9');
        this.form = this.container.querySelector('form');
        this.tableContainer = this.container.querySelector('#ex9-table-container');

        this.form.querySelector('button').addEventListener('click', () => {
            this.onAddMore();
        });

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            this.onSubmit();
        });

        this.tableContainer.addEventListener('click', (event) => {
            this.onTableClick(event.target);
        });
    },
    onAddMore: function() {
        const prototype = this.form.querySelector('div:first-of-type').cloneNode(true);

        prototype.querySelectorAll('input[type=text], input[type=number]').forEach((input) => {
            input.value = null;
            input.name = input.name.replace('[0]', `[${this.form.querySelectorAll('div').length}]`)
        });

        this.form.querySelector('div:last-of-type').after(prototype);
    },
    onSubmit: function() {
        const data = Object.fromEntries((new FormData(this.form)).entries());
        let parsedData = [];
        for(let i = 0;i < this.form.querySelectorAll('div').length;i++) {
            let record = [
                StringUtils.capitalizeFirst(data[`first_name[${i}]`]),
                StringUtils.capitalizeFirst(data[`last_name[${i}]`]),
                parseInt(data[`age[${i}]`]),
                parseInt(data[`kids_amount[${i}]`]),
                '<input type="button" class="remove-record" value="Usuń" />'
            ];

            parsedData.push(record);
        }

        if (parsedData.length > 0) {
            this.generate(parsedData);
        }
    },
    /**
     * @param {Element} target
     */
    onTableClick: function (target) {
        if (target.matches('.remove-record')) {
            const table = target.closest('table');

            target.closest('tr').remove();

            if (table.querySelectorAll('td').length === 0) {
                table.remove();
            }
        }
    },
    /**
     * @param {array} data
     */
    generate: function(data) {
        this.tableContainer.innerHTML = null;

        TableGenerator.generate(['First name', 'Last name', 'Age', 'Kids amount'], data, this.tableContainer);
    }
};

PeopleListFormHandler.init();

// zadanie 10
const StringUtils = {
    /**
     * @param {string} input
     */
    capitalizeFirst: function (input) {
        if (typeof input !== "string" || input.length === 0) {
            return input;
        }

        return input.charAt(0).toUpperCase() + input.slice(1);
    }
};

// zadanie 11
/**
 * @param {string} input
 */
function numbersExtractor(input) {
    const numbers = [...input.matchAll(/(\d+)/g)];

    if (numbers.length === 0) {
        return;
    }
    let sum = 0;
    let product = 1;
    numbers.forEach((number) => {
        number = parseInt(number[0]);
        sum += number;
        product *= number;
    });

    console.log(sum);

    for(let i = 0;i < product;i++) {
        const div = document.createElement('div');
        div.innerHTML = input;
        document.body.appendChild(div);
    }
}

numbersExtractor("asdasd");
numbersExtractor("14xasd");
numbersExtractor("1 3 axas 5");

// zadanie 12
/**
 * @param {string} input
 */
function noIdeaForName(input) {
    let object = {
        text: input
    };

    object.replaceIfExists = function () {
        if (this.text.includes('Ala')) {
            this.text = this.text.replaceAll('Ala', 'Ola');
            return;
        }

        const div = document.createElement('div');
        div.innerHTML = 'Słowo Ala nie występuje w tekście';
        document.body.append(div);
        return false;
    };

    object.replaceIfExists();
    return object;
}

// zadanie 13
/**
 * @param {string[]} stringArray
 */
function countLetters(stringArray) {
    let result = [];
    stringArray.forEach((input) => {
        result.push([...input.matchAll(/[A-z]/g)].length);
    });

    return result;
}

console.log(countLetters(["test", "he123", "dupa"]));

/**
 * @param {int[]} numberArray
 */
function sumNumbers(numberArray) {
    let sum = 0;
    numberArray.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log(sumNumbers([15, 24, 10]));

/**
 * @param {int[]} numberArray
 */
function avgNumbers(numberArray) {
    return sumNumbers(numberArray)/numberArray.length;
}

console.log(avgNumbers([15, 24, 10]));

// zadanie 14
let object14 = {
    name: '',
    surname: '',
    age: ''
};

const modifyObject = (name, surname, age) => {
    object14.name = name;
    object14.nameLength = object14.name.length;
    object14.surname = surname;
    object14.surnameLength = object14.surname.length;
    object14.age = age;
    object14.ageLength = object14.age.length;

    if (object14.nameLength > 5 || object14.surnameLength > 5 || object14.ageLength > 5) {
        const button = document.createElement('button');
        button.innerHTML = 'Reset';

        button.addEventListener('click', () => {
            object14 = {
                name: '',
                surname: '',
                age: ''
            };
            button.remove();
        });

        document.body.append(button);
    }
};

modifyObject("Tomasz", "Ptak", "25");