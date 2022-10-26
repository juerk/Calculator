// get delete button working
// get decimals to work
// put a character limit so numbers dont go off screen
// condense all of these variable changes into a function


let buttonValue = '';
let ranOnce;
let operator;
let equalsReady = false;
let buttonReady = false;
let operatorReady = false;
let outputContainer = document.querySelector('.outputContainer');
let answerContainer = document.querySelector('.answerContainer');
let calculator = document.querySelector('.calculator');


// road work


// let backspaceBtn = document.querySelector('.backspaceBtn');
// backspaceBtn.addEventListener('click', () => {

// })

// // need to create a variable that is turned on after the operator is hit so the second time it is hit 
// // it acts normal until it is hit again

// let buttonStatus = false;

// function operatorSwitch() {

//   console.log('buttonStatus', buttonStatus);
//   console.log('buttonReady', buttonReady);
//   console.log('equalsReady', equalsReady);

//   currentValue = buttonValue;
//   buttonValue = '';
//   buttonReady = false;
//   equalsReady = true;
//   operatorReady = true;
//   if (ranOnce === 'yes') {
//     currentValue = ranThrough;
//   } 
// }


// end road work


let allclearBtn = document.querySelector('.allclearBtn');
allclearBtn.addEventListener('click', () => {
  location.reload(calculator);
})

let oneBtn = document.querySelector('.oneBtn');
oneBtn.addEventListener('click', () => {
  buttonValue += 1;
  outputContainer.append(1);
  buttonReady = true;
})

let twoBtn = document.querySelector('.twoBtn');
twoBtn.addEventListener('click', () => {
  buttonValue += 2;
  outputContainer.append(2);
  buttonReady = true;
})

let threeBtn = document.querySelector('.threeBtn');
threeBtn.addEventListener('click', () => {
  buttonValue += 3;
  outputContainer.append(3);
  buttonReady = true;
})

let fourBtn = document.querySelector('.fourBtn');
fourBtn.addEventListener('click', () => {
  buttonValue += 4;
  outputContainer.append(4);
  buttonReady = true;
})

let fiveBtn = document.querySelector('.fiveBtn');
fiveBtn.addEventListener('click', () => {
  buttonValue += 5;
  outputContainer.append(5);
  buttonReady = true;
})

let sixBtn = document.querySelector('.sixBtn');
sixBtn.addEventListener('click', () => {
  buttonValue += 6;
  outputContainer.append(6);
  buttonReady = true;
})

let sevenBtn = document.querySelector('.sevenBtn');
sevenBtn.addEventListener('click', () => {
  buttonValue += 7;
  outputContainer.append(7);
  buttonReady = true;
})

let eightBtn = document.querySelector('.eightBtn');
eightBtn.addEventListener('click', () => {
  buttonValue += 8;
  outputContainer.append(8);
  buttonReady = true;
})

let nineBtn = document.querySelector('.nineBtn');
nineBtn.addEventListener('click', () => {
  buttonValue += 9;
  outputContainer.append(9);
  buttonReady = true;
})

let zeroBtn = document.querySelector('.zeroBtn');
zeroBtn.addEventListener('click', () => {
  buttonValue += 0;
  outputContainer.append(0);
  buttonReady = true;
})

function operatorSwitch() {
  currentValue = buttonValue;
  buttonValue = '';
  buttonReady = false;
  equalsReady = true;
  operatorReady = true;
}

let divideBtn = document.querySelector('.divideBtn');
divideBtn.addEventListener('click', () => {
  if (operatorReady === false) {
    operator = '/';
    outputContainer.append(' / ');
    operatorSwitch();

  }
})

let minusBtn = document.querySelector('.minusBtn');
minusBtn.addEventListener('click', () => {
  if (operatorReady === false) {
    operator = '-';
    outputContainer.append(' - ');
    operatorSwitch();
  }
})

let addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
  if (operatorReady === false) {
    operator = '+';
    outputContainer.append(' + ')
    operatorSwitch();
  }
})

let remainderBtn = document.querySelector('.remainderBtn');
remainderBtn.addEventListener('click', () => {
  if (operatorReady === false) {
    operator = '%';
    outputContainer.append(' % ');
    operatorSwitch();
  }
})

let multiplyBtn = document.querySelector('.multiplyBtn');
multiplyBtn.addEventListener('click', () => {
  if (operatorReady === false) {
    operator = '*';
    outputContainer.append(' * ');
    operatorSwitch();
  }
})

let equalsBtn = document.querySelector('.equalsBtn');
equalsBtn.addEventListener('click', () => {
  doEquals();
})

function doEquals() {
  if (buttonReady === true && equalsReady === true) {
    firstValue = buttonValue;
    operate();
    } else {
      console.log('not ready');
    }
    equalsReady = false;
    operatorReady = false;
}



function operate() {
  ranOnce = 'yes';
  if (operator === '*') {
    currentValue *= firstValue;
    operateOperators();
  } else if (operator === '/') {
    currentValue /= firstValue;
    operateOperators();
  } else if (operator === '-') {
    currentValue -= firstValue;
    operateOperators();
  } else if (operator === '+') {
    currentValue = parseInt(currentValue) + parseInt(firstValue);
    operateOperators();
  } else if (operator === '%') {
    currentValue %= firstValue;
    operateOperators();
  }
  console.log(currentValue);
}

function operateOperators() {
  outputContainer.replaceChildren(currentValue);
  answerContainer.append(currentValue);
  answerContainer.replaceChildren(currentValue);
  ranThrough = currentValue;
}

