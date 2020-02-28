const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  const ll = left.length;
  const rl = right.length;
  let i = 0;
  let j = 0;
  let res = [];
  while (i < ll && j < rl) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  if (i === ll) return res.concat(right.slice(j));
  if (j === rl) return res.concat(left.slice(i));
  return res;
};

module.exports = { mergeSort };
