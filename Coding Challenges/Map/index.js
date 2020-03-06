/*
map
It returns an array populated with the results of calling a provided function on every element in the given array.
*/

const newMap = (arr, func) => {
  const result = [];
  for (const item of arr) {
    result.push(func(item));
  }
  return result;
};

module.exports = { newMap };
