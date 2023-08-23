const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item)
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
    if(num == 0 || num == 1){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
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
