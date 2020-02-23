/*
Source: https://github.com/haizlin/fe-interview/issues/48
Write a function that removes duplicates from an array. (Could be multi-dimensional arrays)

来源：https://github.com/haizlin/fe-interview/issues/48
写一个数组去重的方法（支持多维数组）
*/

const unique = (array = [], store = {}) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) newArray.push(unique(array[i], store));
    else if (!store[array[i]]) {
      newArray.push(array[i]);
      store[array[i]] = true;
    }
  }
  return newArray;
};

module.exports = { unique };
