/*
Write a function that returns true or false, indicating whether the given array of numbers is sorted.
*/

const isSorted = (arr = [], reverse = false) => {
  if (arr.length < 2) return true;
  if (reverse) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] < arr[i]) return false;
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) return false;
    }
  }
  return true;
};

module.exports = { isSorted };
