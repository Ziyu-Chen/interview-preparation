const countingSort = (arr = []) => {
  if (arr.length <= 1) return arr;
  const dict = {};
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
    if (!dict[num]) dict[num] = 1;
    else dict[num]++;
  }
  let res = [];
  for (let i = min; i <= max; i++) {
    if (dict[i]) {
      res = res.concat(Array(dict[i]).fill(i));
    }
  }
  return res;
};

module.exports = { countingSort };
