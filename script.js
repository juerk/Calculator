// append outputs to screen
// backspce button
// decimal btn
//
//
//



let operatorSwitch; // Equals Mode
let numberSwitch = 'First Number' // Second Number // Third Number

let firstNumber = '';
let secondNumber = '';
let thirdNumber = '';
let finalNumber = '';
let operator;
let currentResult = '';
let firstGo = true;

let nextOperator;
let equalSign;
operateReady = false;

let multiplyBtn = document.querySelector('.multiplyBtn')
let subtractBtn = document.querySelector('.subtractBtn')
let divideBtn = document.querySelector('.divideBtn')
let remainderBtn = document.querySelector('.remainderBtn')
let addBtn = document.querySelector('.addBtn')
let equalsBtn = document.querySelector('.equalsBtn')

let oneBtn = document.querySelector('.oneBtn')
let twoBtn = document.querySelector('.twoBtn')
let threeBtn = document.querySelector('.threeBtn')
let fourBtn = document.querySelector('.fourBtn')
let fiveBtn = document.querySelector('.fiveBtn')
let sixBtn = document.querySelector('.sixBtn')
let sevenBtn = document.querySelector('.sevenBtn')
let eightBtn = document.querySelector('.eightBtn')
let nineBtn = document.querySelector('.nineBtn')
let zeroBtn = document.querySelector('.zeroBtn')

let outputContainer = document.querySelector('.outputContainer');
let answerContainer = document.querySelector('.answerContainer');
let calculator = document.querySelector('.calculator');

oneBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 1;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('1')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 1;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    outputContainer.append('1')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '1';
    operateReady = true;
    outputContainer.append('1')
    console.log('thirdNumber', thirdNumber)
  }
})

twoBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 2;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 2;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '2';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

threeBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 3;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 3;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '3';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

fourBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 4;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 4;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '4';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

fiveBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 5;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 5;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '5';
    outputContainer.append('*')
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

sixBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 6;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 6;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '6';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

sevenBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 7;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 7;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '7';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

eightBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 8;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 8;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '8';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

nineBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 9;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 9;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '9';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

zeroBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 0;
    operatorSwitch = 'Operator Selection'
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 0;
    operatorSwitch = 'Equals'; // previously Next Equals
    operateReady = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '0';
    operateReady = true;
    console.log('thirdNumber', thirdNumber)
  }
})

function appendNum () {
  operateReady = true;
  console.log('thirdNumber', thirdNumber)
}



multiplyBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection') {
    operator = '*';
    outputContainer.append('*')
    console.log('*')
    numberSwitch = 'Second Number';
  } else if (operatorSwitch === 'Equals') {
    operate();
    outputContainer.append('*')
    operator = '*';
    console.log('*')
  } else if (operatorSwitch === 'ONLY Equals') {
    operator = '*';
    outputContainer.append('*')
    operatorSwitch = 'Equals';
    console.log('*')
  }
})

subtractBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection') {
    operator = '-';
    numberSwitch = 'Second Number';
    console.log('-')
  } else if (operatorSwitch === 'Equals') {
    operate();
    operator = '-';
    console.log('-')
  } else if (operatorSwitch === 'ONLY Equals') {
    operator = '-';
    operatorSwitch = 'Equals';
    console.log('-');
  }
}) 

divideBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection') {
    operator = '/';
    numberSwitch = 'Second Number';
    console.log('/')
  } else if (operatorSwitch === 'Equals') {
    operate();
    operator = '/';
    console.log('/')
  } else if (operatorSwitch === 'ONLY Equals') {
    operator = '/';
    operatorSwitch = 'Equals';
    console.log('/');
  }
})

remainderBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection') {
    operator = '%';
    numberSwitch = 'Second Number';
    console.log('%')
  } else if (operatorSwitch === 'Equals') {
    operate();
    operator = '%';
    console.log('%')
  } else if (operatorSwitch === 'ONLY Equals') {
    operator = '%';
    operatorSwitch = 'Equals';
    console.log('%');
  }
})

addBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection') {
    operator = '+';
    numberSwitch = 'Second Number';
    console.log('+')
  } else if (operatorSwitch === 'Equals') {
    operate();
    operator = '+';
    console.log('+')
  } else if (operatorSwitch === 'ONLY Equals') {
    operator = '+';
    operatorSwitch = 'Equals';
    console.log('+');
  }
}) 





equalsBtn.addEventListener('click', () => {
  console.log('=');
  equalSign = true;
  operate();
})










function operate() {
  if (operateReady === false) {
    console.log('awaiting input')
  } else if (operator === '*' && firstGo === true) {
    currentResult = firstNumber * secondNumber;
    firstGoEquals();
  } else if (operator === '-' && firstGo === true) {
    currentResult = firstNumber - secondNumber;
    firstGoEquals();
  } else if (operator === '/' && firstGo === true) {
    currentResult = firstNumber / secondNumber;
    firstGoEquals();
  } else if (operator === '%' && firstGo === true) {
    currentResult = firstNumber % secondNumber;
    firstGoEquals();
  } else if (operator === '+' && firstGo === true) {
    currentResult = parseInt(firstNumber) + parseInt(secondNumber);
    firstGoEquals();
  } else if (operator === '*' && firstGo === false) {
    currentResult *= thirdNumber;
    console.log('equals', currentResult);
    equals();
  } else if (operator === '-' && firstGo === false) {
    currentResult -= thirdNumber;
    console.log('equals', currentResult);
    equals();
  } else if (operator === '/' && firstGo === false) {
    currentResult /= thirdNumber;
    console.log('equals', currentResult);
    equals();
  } else if (operator === '%' && firstGo === false) {
    currentResult %= thirdNumber;
    console.log('equals', currentResult);
    equals();
  } else if (operator === '+' && firstGo === false) {
    currentResult = parseInt(currentResult) + parseInt(thirdNumber);
    console.log('equals', currentResult);
    equals();
  }
}

function firstGoEquals() {
  if (equalSign === true) {
    firstGo = false;
    numberSwitch = 'Third Number';
    thirdNumber = '';
    operatorSwitch = 'ONLY Equals';
    equalSign = false;
    operateReady = false;
    console.log('ONLY EQUALS firstGoEquals', currentResult);
  } else {
    firstGo = false;
    numberSwitch = 'Third Number';
    operatorSwitch = 'Equals';
    operateReady = false;
    console.log('firstGoEquals', currentResult);
  }
}

function equals() {
  operatorSwitch = 'Equals';
  operator = '';
  thirdNumber = '';
  operateReady = false;
}