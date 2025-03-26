const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((acc, num) => acc + num, 0)
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let acc = 1;
  for(let i = 1; i <= num; i++) {
    acc *= i;
  }
  return acc;
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
