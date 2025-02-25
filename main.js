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
const by5Numbers = get('.divisible-5-numbers');
const by15Numbers = get('.divisible-15-numbers');


let count = 0;

const addNumbertoDiv = function(numberDiv, list, newCount) {
    numberDiv.classList.add('number-clicker');
    numberDiv.innerText = `${newCount}`;
    list.appendChild(numberDiv);

    numberDiv.addEventListener('click', function() {
        numberDiv.remove();
    });
}    

numberClicker.addEventListener('click', function() {
    let newCount = ++count;
    numberClicker.innerText = newCount;

    if (newCount % 15 === 0) {
        const newBy15Number = newDiv('button');
        addNumbertoDiv(newBy15Number, by15Numbers, newCount);
    } else if (newCount % 5 === 0) {
        const newBy5Number = newDiv('button');
        addNumbertoDiv(newBy5Number, by5Numbers, newCount);
    } else if (newCount % 3 === 0) {
        const newBy3Number = newDiv('button');
        addNumbertoDiv(newBy3Number, by3Numbers, newCount);
    } else if (newCount % 2 === 0) {
        const newEvenNumber = newDiv('button');
        addNumbertoDiv(newEvenNumber, evenNumbers, newCount);
    } else if (newCount % 2 !== 0) {
        const newOddNumber = newDiv('button');
        addNumbertoDiv(newOddNumber, oddNumbers, newCount);
    } 
});



