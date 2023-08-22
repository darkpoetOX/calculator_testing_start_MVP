const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 5500000;
    actual = sum(2000000, 3500000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -6;
    actual = sum(-2, -4);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 4;
    actual = sum(0, 4);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two positive numbers', () => {
    expected = 7;
    actual = subtract(10, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -7;
    actual = subtract(-10, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract positive from negative number', () => {
    expected = -13;
    actual = subtract(-10, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract negative from positive numbers', () => {
    expected = 13;
    actual = subtract(10, -3);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    expected = 15;
    actual = multiply(5, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 20;
    actual = multiply(-5, -4);
    expect(actual).toBe(expected);
  });

  test('can multiply positive and negative numbers', () => {
    expected = -20;
    actual = multiply(-5, 4);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide two positive numbers', () => {
    expected = 12;
    actual = divide(24, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 12;
    actual = divide(-24, -2);
    expect(actual).toBe(expected);
  });

  test('division by zero statement', () => {
    expected = "Not divisible by zero";
    actual = divide(21, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can calculate modulus of two positive numbers', () => {
    expected = 6;
    actual = modulus(21, 15);
    expect(actual).toBe(expected);
  });

  test('entered modulus of zero denominator statement', () => {
    expected = "Not divisible by zero so no modulus";
    actual = modulus(21, 0);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {
  test('is true for even number', () => {
    expected = true;
    actual = even(8);
    expect(actual).toBe(expected);
  });

  test('is false for odd number', () => {
    expected = false;
    actual = even(9);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {
  test('is true for odd number', () => {
    expected = true;
    actual = odd(9);
    expect(actual).toBe(expected);
  });

  test('is false for even number', () => {
    expected = false;
    actual = odd(40);
    expect(actual).toBe(expected);
  });

});
