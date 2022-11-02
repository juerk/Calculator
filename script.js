let operatorSwitch;
let numberSwitch = 'First Number';

let firstNumber = '';
let secondNumber = '';
let thirdNumber = '';
let finalNumber = '';
let operator;
let currentResult = '';
let firstGo = true;

let nextOperator;
let equalSign;
let operateReady = false;
let operatorAppended = false;
let firstGoOperatorAppended = false;
let decimalAppended = false;

let allClearBtn = document.querySelector('.allClearBtn')
let backSpaceBtn = document.querySelector('.backSpaceBtn')

let equalsBtn = document.querySelector('.equalsBtn')
let multiplyBtn = document.querySelector('.multiplyBtn')
let subtractBtn = document.querySelector('.subtractBtn')
let divideBtn = document.querySelector('.divideBtn')
let remainderBtn = document.querySelector('.remainderBtn')
let addBtn = document.querySelector('.addBtn')

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
let decimalBtn = document.querySelector('.decimalBtn')

let outputContainer = document.querySelector('.outputContainer');
let answerContainer = document.querySelector('.answerContainer');
let calculator = document.querySelector('.calculator');
let operatorContainer = document.querySelector('.operatorContainer');

allClearBtn.addEventListener('click', () => {
  location.reload(calculator);
})

backSpaceBtn.addEventListener('click', () => {
  outputContainer.replaceChildren(currentResult);
  operatorAppended = false;
})


decimalBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number' && decimalAppended === false) {
    firstNumber += '.';
    operatorSwitch = 'Operator Selection'
    outputContainer.append('.');
    decimalAppended = true;
    console.log('firstNumber', firstNumber);
  } else if (numberSwitch === 'Second Number' && decimalAppended === false) {
    secondNumber += '.';
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('.')
    decimalAppended = true;
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number' && decimalAppended === false) {
    thirdNumber += '.';
    operateReady = true;
    operatorAppended = false;
    decimalAppended = true;
    outputContainer.append('.');
    console.log('thirdNumber', thirdNumber);
  }
})

oneBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 1;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('1')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 1;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('1')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '1';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('1')
    console.log('thirdNumber', thirdNumber)
  }
})

twoBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 2;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('2')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 2;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('2')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '2';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('2')
    console.log('thirdNumber', thirdNumber)
  }
})

threeBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 3;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('3')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 3;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('3')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '3';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('3')
    console.log('thirdNumber', thirdNumber)
  }
})

fourBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 4;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('4')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 4;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('4')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '4';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('4')
    console.log('thirdNumber', thirdNumber)
  }
})

fiveBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 5;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('5')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 5;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('5')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '5';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('5')
    console.log('thirdNumber', thirdNumber)
  }
})

sixBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 6;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('6')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 6;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('6')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '6';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('6')
    console.log('thirdNumber', thirdNumber)
  }
})

sevenBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 7;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('7')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 7;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('7')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '7';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('7')
    console.log('thirdNumber', thirdNumber)
  }
})

eightBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 8;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('8')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 8;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('8')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '8';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('8')
    console.log('thirdNumber', thirdNumber)
  }
})

nineBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 9;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('9')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 9;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('9')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '9';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('9')
    console.log('thirdNumber', thirdNumber)
  }
})

zeroBtn.addEventListener('click', () => {
  if (numberSwitch === 'First Number') {
    firstNumber += 0;
    operatorSwitch = 'Operator Selection'
    outputContainer.append('0')
    console.log('firstNumber', firstNumber)
  } else if (numberSwitch === 'Second Number') {
    secondNumber += 0;
    operatorSwitch = 'Equals';
    operateReady = true;
    outputContainer.append('0')
    console.log('secondNumber', secondNumber)
  } else if (numberSwitch === 'Third Number') {
    thirdNumber += '0';
    operateReady = true;
    operatorAppended = false;
    outputContainer.append('0')
    console.log('thirdNumber', thirdNumber)
  }
})

function appendNum () {
  operateReady = true;
  console.log('thirdNumber', thirdNumber)
}

multiplyBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection' && operatorAppended === false && firstGoOperatorAppended === false) {
    operator = '*';
    console.log('*')
    outputContainer.append('*');
    numberSwitch = 'Second Number';
    firstGoOperatorAppended = true;
    decimalAppended = false;
  } else if (operatorSwitch === 'Equals' && operatorAppended === false && firstGoOperatorAppended === true) {
    operate();
    operator = '*';
    operatorAppended = true;
    outputContainer.append('*');
    decimalAppended = false;
    console.log('*')
  } else if (operatorSwitch === 'Equals' && operatorAppended === false) {
    operate();
    operator = '*';
    operatorAppended = true;
    outputContainer.append('*');
    console.log('*')
  } else if (operatorSwitch === 'ONLY Equals' && operatorAppended === false) {
    operator = '*';
    operatorSwitch = 'Equals';
    outputContainer.append('*');
    operatorAppended = true;
    console.log('*')
  }
})

subtractBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection' && operatorAppended === false && firstGoOperatorAppended === false) {
    operator = '-';
    console.log('-')
    outputContainer.append('-');
    numberSwitch = 'Second Number';
    firstGoOperatorAppended = true;
    decimalAppended = false;
  } else if (operatorSwitch === 'Equals' && operatorAppended === false && firstGoOperatorAppended === true) {
    operate();
    operator = '-';
    operatorAppended = true;
    outputContainer.append('-');
    decimalAppended = false;
    console.log('-')
  } else if (operatorSwitch === 'Equals' && operatorAppended === false) {
    operate();
    operator = '-';
    operatorAppended = true;
    outputContainer.append('-');
    console.log('-')
  } else if (operatorSwitch === 'ONLY Equals' && operatorAppended === false) {
    operator = '-';
    operatorSwitch = 'Equals';
    outputContainer.append('-');
    operatorAppended = true;
    console.log('-')
  }
})

divideBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection' && operatorAppended === false && firstGoOperatorAppended === false) {
    operator = '/';
    console.log('/')
    outputContainer.append('/');
    numberSwitch = 'Second Number';
    firstGoOperatorAppended = true;
    decimalAppended = false;
  } else if (operatorSwitch === 'Equals' && operatorAppended === false && firstGoOperatorAppended === true) {
    operate();
    operator = '/';
    operatorAppended = true;
    outputContainer.append('/');
    console.log('/')
    decimalAppended = false;
  } else if (operatorSwitch === 'Equals' && operatorAppended === false) {
    operate();
    operator = '/';
    operatorAppended = true;
    outputContainer.append('/');
    console.log('/')
  } else if (operatorSwitch === 'ONLY Equals' && operatorAppended === false) {
    operator = '/';
    operatorSwitch = 'Equals';
    outputContainer.append('/');
    operatorAppended = true;
    console.log('/')
  }
})

remainderBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection' && operatorAppended === false && firstGoOperatorAppended === false) {
    operator = '%';
    console.log('%')
    outputContainer.append('%');
    numberSwitch = 'Second Number';
    firstGoOperatorAppended = true;
    decimalAppended = false;
  } else if (operatorSwitch === 'Equals' && operatorAppended === false && firstGoOperatorAppended === true) {
    operate();
    operator = '%';
    operatorAppended = true;
    outputContainer.append('%');
    decimalAppended = false;
    console.log('%')
  } else if (operatorSwitch === 'Equals' && operatorAppended === false) {
    operate();
    operator = '%';
    operatorAppended = true;
    outputContainer.append('%');
    console.log('%')
  } else if (operatorSwitch === 'ONLY Equals' && operatorAppended === false) {
    operator = '%';
    operatorSwitch = 'Equals';
    outputContainer.append('%');
    operatorAppended = true;
    console.log('%')
  }
})

addBtn.addEventListener('click', () => {
  if (operatorSwitch === 'Operator Selection' && operatorAppended === false && firstGoOperatorAppended === false) {
    operator = '+';
    console.log('+')
    outputContainer.append('+');
    numberSwitch = 'Second Number';
    firstGoOperatorAppended = true;
    decimalAppended = false;
  } else if (operatorSwitch === 'Equals' && operatorAppended === false && firstGoOperatorAppended === true) {
    operate();
    operator = '+';
    operatorAppended = true;
    outputContainer.append('+');
    decimalAppended = false;
    console.log('+')
  } else if (operatorSwitch === 'Equals' && operatorAppended === false) {
    operate();
    operator = '+';
    operatorAppended = true;
    outputContainer.append('+');
    console.log('+')
  } else if (operatorSwitch === 'ONLY Equals' && operatorAppended === false) {
    operator = '+';
    operatorSwitch = 'Equals';
    outputContainer.append('+');
    operatorAppended = true;
    console.log('+')
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
    currentResult = parseFloat(firstNumber) + parseFloat(secondNumber);
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
    currentResult = parseFloat(currentResult) + parseFloat(thirdNumber);
    console.log('equals', currentResult);
    equals();
  }
}

function firstGoEquals() {
  if (equalSign === true && currentResult < 99999999) {
    firstGo = false;
    numberSwitch = 'Third Number';
    thirdNumber = '';
    operatorSwitch = 'ONLY Equals';
    equalSign = false;
    operateReady = false;
    decimalAppended = false;
    currentResult = (Math.round(currentResult * 1000) / 1000)
    answerContainer.replaceChildren(currentResult);
    outputContainer.replaceChildren(currentResult);
    console.log('ONLY EQUALS firstGoEquals', currentResult);
  } else if (currentResult < 99999999) {
    firstGo = false;
    numberSwitch = 'Third Number';
    operatorSwitch = 'Equals';
    operateReady = false;
    decimalAppended = false;
    currentResult = (Math.round(currentResult * 1000) / 1000);
    answerContainer.replaceChildren(currentResult);
    outputContainer.replaceChildren(currentResult);
    console.log('firstGoEquals', currentResult);
  } else {
    firstGo = false;
    numberSwitch = 'Third Number';
    operatorSwitch = 'Equals';
    operateReady = false;
    decimalAppended = false;
    currentResult = currentResult.toExponential(1);
    answerContainer.replaceChildren(currentResult);
    outputContainer.replaceChildren(currentResult);
    console.log('firstGoEquals', currentResult);
  }
}

function equals() {
  if (currentResult > 99999999) {
    operatorSwitch = 'Equals';
    operator = '';
    thirdNumber = '';
    operateReady = false;
    decimalAppended = false;
    currentResult = currentResult.toExponential(1);
    answerContainer.replaceChildren(currentResult);
    outputContainer.replaceChildren(currentResult);
  } else {
    operatorSwitch = 'Equals';
    operator = '';
    thirdNumber = '';
    operateReady = false;
    decimalAppended = false;
    currentResult = (Math.round(currentResult * 1000) / 1000);
    answerContainer.replaceChildren(currentResult);
    outputContainer.replaceChildren(currentResult);
  }
}