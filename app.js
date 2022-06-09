const screen = document.querySelector('.screen');
const clear = document.querySelector('.ac');
const percentage = document.querySelector('.percentage');
const nums = document.querySelectorAll('.num');
const oprs = document.querySelectorAll('.opr');
const dec = document.querySelector('.dec');
const equal = document.querySelector('.equal');

let prevNum = 0;
let currentNum = 0;
let operator = '';
let result = '';

nums.forEach(num => {
  num.addEventListener("click", e => {
    if (result) {
      currentNum = '';
      result = '';
    }
    inputNum(e.target.value);
    updateScreen(currentNum);
  })
})

oprs.forEach(opr => {
  opr.addEventListener('click', (e) => {
    inputOpr(e.target.value);
  })
})

equal.addEventListener('click', () => {
  calculate(prevNum, currentNum, operator);
  updateScreen(currentNum);
})

clear.addEventListener('click', () => {
  prevNum = 0;
  currentNum = 0;
  operator = '';
  updateScreen(0);
})

dec.addEventListener('click', (e) => {
  if (currentNum.includes('.')) {
    return
  }
  currentNum += e.target.value;
  updateScreen(currentNum);
})

percentage.addEventListener('click', () => {
  currentNum /= 100;
  updateScreen(currentNum);
})

const calculate = (num1, num2, opr) => {
  switch (opr) {
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    default:
      return;
  }
  currentNum = result;
  operator = '';
}

const updateScreen = num => {
  screen.value = num;
}

const inputNum = num => {
  if (currentNum == '0' || currentNum === '') {
    currentNum = num;
  } else {
    currentNum += num;
  }
}

const inputOpr = opr => {
  if (operator === '') {
    prevNum = currentNum;
  }
  operator = opr;
  currentNum = '';
}