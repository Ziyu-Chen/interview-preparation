const bubbleSort = (arr = []) => {
  while (true) {
    let finished = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        finished = false;
      }
    }
    if (finished) break;
  }
  return arr;
};

module.exports = { bubbleSort };
