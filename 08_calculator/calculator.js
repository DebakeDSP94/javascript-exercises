const add = function(num1, num2) {
	let sum = num1 + num2;
  return sum
};

const subtract = function(num1, num2) {
	let sub = num1 - num2;
  return sub;
};

const sum = function(array) {
	let total = 0;
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(num1, num2) {
	let expo = num1 ** num2;
  return expo;
};

const factorial = function(num) {
	let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
