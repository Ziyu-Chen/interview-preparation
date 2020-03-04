/*
Source: https://github.com/haizlin/fe-interview/issues/960
Write functions that return the intersection, union, difference or complement of two arrays.

来源：https://github.com/haizlin/fe-interview/issues/960
分别写出数组的交集、并集、差集、补集这四个方法
*/

const intersection = (arr1 = [], arr2 = []) => {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  const arr = [];
  let i = 0;
  let j = 0;
  const m = arr1.length;
  const n = arr2.length;
  while (i < m && j < n) {
    if (arr1[i] === arr2[j]) {
      arr.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) i++;
    else j++;
  }
  return arr;
};

const union = (arr1 = [], arr2 = []) => {
  return [...new Set(arr1.concat(arr2))];
};

const difference = (arr1 = [], arr2 = []) => {
  const dict = {};
  const arr = [];
  for (const num of arr2) {
    dict[num] = true;
  }
  for (const num of arr1) {
    if (!dict[num]) arr.push(num);
  }
  return arr;
};

module.exports = { intersection, union, difference };
