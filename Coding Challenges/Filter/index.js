/*
filter
It returns an array of items in the given array that fit the given criteria.
*/

const filter = (arr, func) => {
  const result = [];
  for (const item of arr) {
    if (func(item)) result.push(item);
  }
  return result;
};

module.exports = { filter };
