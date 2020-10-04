// zadanie 1
console.log(document.querySelector('#buz').parentElement);
console.log(document.querySelector('#baz').previousElementSibling);

const foo = document.querySelector('#foo');

console.log(foo.children);
console.log(foo.parentElement);
console.log(foo.firstElementChild);
console.log(foo.children[Math.floor(foo.childElementCount/2)]);

// zadanie 2
/**
 * @param {Element} element
 */
function handleClick(element) {
    element.addEventListener('click', function () {
        console.log(this.firstElementChild.innerText.trim());
    });
}

handleClick(document.querySelector('#ex2'));

// zadanie 3
function handleSpanToggling() {
    document.querySelectorAll('#ex3 button').forEach((button) => {
        button.addEventListener('click', function () {
            const span = this.nextElementSibling;
            span.style.display = span.style.display === 'none' ? 'block' : 'none';
        });
    });
}

handleSpanToggling();

// zadanie 4
document.querySelectorAll('#ex3 button').forEach((button) => {
    button.addEventListener('click', function () {
        const parent = this.parentElement;
        parent.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});

// zadanie 5
const variant = 1;
document.querySelectorAll('#ex5 div').forEach((div) => {
    div.addEventListener('mouseover', function () {
        let targetColor = this.style.backgroundColor;
        let elements;

        if (variant === 1) {
            elements = div.parentElement.querySelectorAll('li:first-of-type');
        } else if (variant === 2) {
            elements = div.parentElement.querySelectorAll('li:last-of-type');
        } else if (variant === 3) {
            elements = div.parentElement.querySelectorAll('li:nth-of-type(even)');
        } else if (variant === 4) {
            elements = div.parentElement.querySelectorAll('li');
        } else {
            elements = div.parentElement.querySelectorAll('ul');
        }

        elements.forEach((element) => {
            element.style.backgroundColor = targetColor;
        });
    });

    div.addEventListener('mouseout', function () {
        div.parentElement.querySelectorAll('ul, li').forEach((element) => {
            element.style.backgroundColor = null;
        });
    });
});

// zadanie 6
const ex6 = document.querySelector('#ex6');

const element1 = ex6.firstElementChild.firstElementChild.firstElementChild;
const element2 = ex6.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
const element3 = ex6.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;