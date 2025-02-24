const get = function(selector) {
    return document.querySelector(selector);
}

const newDiv = function(div){
    return document.createElement(div);
}

const numberClicker = get('.number-clicker');
const evenNumbers = get('.even-numbers');
const oddNumbers = get('.odd-numbers');
const by3Numbers = get('.divisible-3-numbers');

let count = 0;
//let newCount;

const addNumbertoDiv = function(numberDiv, list, newCount) {
    numberDiv.classList.add('number-clicker');
    numberDiv.innerText = `${newCount}`;
    list.appendChild(numberDiv);
}    

numberClicker.addEventListener('click', function() {
    let newCount = ++count;
    numberClicker.innerText = newCount;

    if (newCount % 2 === 0) {
        const newEvenNumber = newDiv('div');
        addNumbertoDiv(newEvenNumber, evenNumbers, newCount);

    } else if (newCount % 2 !== 0) {
        const newOddNumber = newDiv('div');
        addNumbertoDiv(newOddNumber, oddNumbers, newCount);
        } 

    if (newCount % 3 === 0) {
        const newBy3Number = newDiv('div');
        addNumbertoDiv(newBy3Number, by3Numbers, newCount);
        }
});



