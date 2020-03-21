/*
Write a function that returns true or false indicating whether the given number appears in the given sorted array. 
Can you do it in O(log(N)) time?
*/

const includes = (array = [], target) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const mid = Math.ceil((start + end) / 2);
    if (array[mid] === target) return true;
    if (array[mid] < target) start = mid;
    else end = mid - 1;
  }
  return array[start] === target ? true : false;
};

module.exports = { includes };
