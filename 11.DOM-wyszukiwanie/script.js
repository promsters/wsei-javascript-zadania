// zadanie 1
const lists = document.querySelectorAll('.list');

// zadanie 2
/**
 * @param {string} selector
 * @return {NodeListOf<Element>}
 */
function getElementTag(selector) {
    return document.querySelectorAll(selector);
}

const elements = getElements('button');
console.log(elements);

// zadanie 3
const listEl = document.querySelector('#list');
const listEl2 = document.getElementById('list');

// zadanie 4
/**
 * @param {Element[]|NodeListOf<Element>} elements
 */
function printElements(elements) {
    elements.forEach((element) => {
        console.log(element);
    });
}

printElements(document.querySelectorAll('li'));
printElements(document.querySelectorAll('ul'));
printElements(document.querySelectorAll('span'));
// "szystkie spany znajdujące się w elemencie div z klasą list" - bezposrednio w tym elemencie?
printElements(document.querySelectorAll('div.list > span'));
printElements(document.querySelectorAll('div#spans > span'));