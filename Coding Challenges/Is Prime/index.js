/*
Write a function that checks if a number is a prime number
*/

const isPrime = (number = 1) => {
  if (number < 2) return false;
  if (number == 2) return true;
  if (number % 2 == 0) return false;
  const store = [];
  for (let i = 3; i <= number; i += 2) {
    let isP = true;
    for (const preNum of store) {
      if (i % preNum == 0) {
        isP = false;
        break;
      }
    }
    if (isP) store.push(i);
  }
  if (number === store.pop()) return true;
  return false;
};

const isPrimeCreator = () => {
  const store = [];
  return (number = 1) => {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    const firstNum = store.length ? store[store.length - 1] + 2 : 3;
    if (number < firstNum) {
      if (store.includes(number)) return true;
      return false;
    }
    for (let i = firstNum; i <= number; i += 2) {
      let isP = true;
      for (const preNum of store) {
        if (i % preNum === 0) {
          isP = false;
          break;
        }
      }
      if (isP) store.push(i);
    }
    if (number === store[store.length - 1]) return true;
    return false;
  };
};

module.exports = { isPrime, isPrimeCreator };
