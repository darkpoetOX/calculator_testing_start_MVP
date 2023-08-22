const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    if (b !== 0){
        return a / b;
    } else {
        return "Not divisible by zero";
    }
};

const modulus = function(a, b){
    if (b !== 0){
        return a % b;
    } else {
        return "Not divisible by zero so no modulus";
    }
};

const even = function(num){
    return num % 2 === 0; // returns boolean
};

const odd = function(num){
    return num % 2 !== 0; // returns boolean
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
