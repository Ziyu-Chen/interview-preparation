/*
Write a function that returns the number that is the factorial of the given number.
*/

const factorial = (number = 1) => {
  if (typeof number !== "number") return -1;
  if (number < 0) return -1;
  if (number < 2) return 1;
  return number * factorial(number - 1);
};

module.exports = { factorial };
