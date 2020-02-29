const insertionSort = (arr = []) => {
  for (let i = 1; i < arr.length; i++) {
    while (i > 0 && arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }
  return arr;
};

module.exports = { insertionSort };
