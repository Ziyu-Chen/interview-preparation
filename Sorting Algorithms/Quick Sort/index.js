const quickSort = (arr = []) => {
  if (arr.length <= 1) return arr;
  if (arr.length === 2) return arr[0] <= arr[1] ? arr : [arr[1], arr[0]];
  const threshold = arr[arr.length - 1];
  let i = 0;
  let j = arr.length - 2;
  while (i < j) {
    if (arr[i] <= threshold) i++;
    else if (arr[j] > threshold) j--;
    else if (arr[i] > threshold && arr[j] <= threshold) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return arr[i] <= threshold
    ? [
        ...quickSort(arr.slice(0, i + 1)),
        threshold,
        ...quickSort(arr.slice(i + 1, arr.length - 1))
      ]
    : [
        ...quickSort(arr.slice(0, i)),
        threshold,
        ...quickSort(arr.slice(i, arr.length - 1))
      ];
};

module.exports = { quickSort };
