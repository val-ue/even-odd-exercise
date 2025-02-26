const get = function (selector) {
    return document.querySelector(selector);
  };
  
  const newElement = function (element) {
    return document.createElement(element);
  };
  
  const numberClicker = get(".number-clicker");
  const evenNumbers = get(".even-numbers");
  const oddNumbers = get(".odd-numbers");
  const by3Numbers = get(".divisible-3-numbers");
  const by5Numbers = get(".divisible-5-numbers");
  const by15Numbers = get(".divisible-15-numbers");
  
  let count = 0;
  
  numberClicker.addEventListener("click", function () {
    let newCount = ++count;
    numberClicker.innerText = newCount;
    const numberButton = newElement("button");
    numberButton.classList.add("number-clicker");
    numberButton.innerText = `${newCount}`;

    if (newCount % 15 === 0) {
      by15Numbers.appendChild(numberButton);

    } else if (newCount % 5 === 0) {
      by5Numbers.appendChild(numberButton);

    } else if (newCount % 3 === 0) {
      by3Numbers.appendChild(numberButton);

    } else if (newCount % 2 === 0) {
      evenNumbers.appendChild(numberButton);

    } else {
      oddNumbers.appendChild(numberButton);
    }

    numberButton.addEventListener("click", function () {
        numberButton.remove();
      });
  });
  

