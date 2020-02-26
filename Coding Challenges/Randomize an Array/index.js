/*
Source: https://github.com/haizlin/fe-interview/issues/84
Write a function that randomizes an array.

来源：https://github.com/haizlin/fe-interview/issues/84
如何快速让一个数组乱序，写出来
*/

const randomize = (arr = []) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const j = random(n);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const random = n => {
  return Math.floor(Math.random() * n);
};

module.exports = { randomize };
