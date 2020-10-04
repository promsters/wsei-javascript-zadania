/*
// zadanie 1
/!**
 * @param {Element[]|NodeListOf<Element>} elements
 * @return {string[]}
 *!/
function elementsToTags(elements) {
    let tags = [];
    elements.forEach((element) => {
        tags.push(element.tagName.toLowerCase());
    });

    return tags;
}

console.log(elementsToTags(document.querySelectorAll('.more-divs')));

// zadanie 2
/!**
 * @param {Element} element
 *!/
function printDetails(element) {
    console.log(element.innerHTML);
    console.log(element.outerHTML);
    console.log(element.className);
    console.log(element.classList);
    console.log(element.dataset);
}

printDetails(document.querySelector('.short-list'));
*/

// zadanie 3
/**
 * @param {DOMStringMap} dataset
 * @return {number[]}
 */
function makeMathsOnDataset(dataset) {
    let sum = 0;
    let sub = 0;

    for(const [key, value] of Object.entries(dataset)) {
        if (!isNaN(value)) {
            sum += parseInt(value);
            sub -= parseInt(value);
        }
    }

    return [sum, sub];
}

console.log(makeMathsOnDataset(document.querySelector('#datasetCheck').dataset));

// zadanie 4
document.querySelector('#spanText').innerText = 'WSEI';

// zadanie 5
document.querySelector('#spanText').className = 'wsei-krakow';

// zadanie 6
/**
 * @param {DOMTokenList} classList
 */
function processClasses(classList) {
    classList.forEach((name) => {
        console.log(name);
    });

    console.log(Array.from(classList.values()).join('+'));
}
const classes = document.querySelector('#classes');
processClasses(classes.classList);
classes.className = null;
console.log('Usunięto wszystkie klasy');

// zadanie 7
/**
 * @param {NodeListOf<Element>} elements
 */
function addData(elements) {
    elements.forEach((element) => {
        if (!('text' in element.dataset)) {
            element.dataset.text = 'text';
        }
    });
}

addData(document.querySelectorAll('#longList > li'));

// zadanie 8
/**
 * @param {string} name
 */
function buildObject(name) {
    return {newClass: name};
}

/**
 * @param {object} object
 */
function writeToDOM(object) {
    document.querySelector('#myDiv').className = object.newClass;
}

writeToDOM(buildObject('wsei-krakow'));


// zadanie 9
/**
 * @param {int} number
 */
function addParityClass(number) {
    document.querySelector('#numbers').classList.add(
        number%2 === 0 ? 'even' : 'odd'
    );
}

addParityClass(Math.round(Math.random()*10));

// zadanie 10
/**
 * @param {HTMLUListElement|HTMLOListElement|HTMLDListElement} listElement
 * @return {string[]}
 */
function getListTextElements(listElement) {
    let textElements = [];
    listElement.querySelectorAll('li').forEach((li) => {
        textElements.push(li.innerText);
    });

    return textElements;
}

console.log(getListTextElements(document.querySelector('#longList')));

// zadanie 11
/**
 * @param {Element[]|HTMLCollection} elements
 */
function randomizeInnerText(elements) {
    Array.from(elements).forEach((element) => {
        element.dataset.oldText = element.innerText;
        element.innerText = Math.floor(Math.random()*10);
    });
}

randomizeInnerText(document.querySelector('#longList').children);