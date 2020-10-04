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
const ex9El = document.querySelector('#ex9');
const ex9Form = ex9El.querySelector('form');

ex9El.querySelector('form > button').addEventListener('click', () => {
    const prototype = ex9Form.querySelector('div:first-of-type').cloneNode(true);

    prototype.querySelectorAll('input[type=text], input[type=number]').forEach((input) => {
        input.value = null;
        input.name = input.name.replace('[0]', `[${ex9Form.querySelectorAll('div').length}]`)
    });

    ex9Form.querySelector('div:last-of-type').after(prototype);
});

ex9Form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries((new FormData(ex9Form)).entries());
    let parsedData = [];
    for(let i = 0;i < ex9Form.querySelectorAll('div').length;i++) {
        let object = {
            firstName: data[`first_name[${i}]`],
            lastName: data[`last_name[${i}]`],
            age: parseInt(data[`age[${i}]`]),
            kidsAmount: parseInt(data[`kids_amount[${i}]`])
        };

        parsedData.push(object);
    }

    console.log(parsedData);
});