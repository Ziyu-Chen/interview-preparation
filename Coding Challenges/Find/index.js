/*
find
It returns the first element that fits the given criteria in the given array.
*/

const find = (arr, func) => {
  i = 0;
  while (true) {
    if (func(arr[i])) return arr[i];
    i++;
  }
};

module.exports = { find };
