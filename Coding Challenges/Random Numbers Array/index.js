/*
Source:https://github.com/haizlin/fe-interview/issues/3
1. Generate an empty array that contains 5 elements.
2. Generate a random number between 2 and 32
3. Put the random number into the array. If the random number is already in the array, then generate a new random number and put it in the array. Do this recursively, not iteratively!
4. Return an array with the length 5. There should not be any duplicates in this array.

来源：https://github.com/haizlin/fe-interview/issues/3
a) 生成一个长度为5的空数组arr。
b) 生成一个（2－32）之间的随机整数rand。
c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
d) 最终输出一个长度为5，且内容不重复的数组arr。
*/

const randomNumbersArray = () => {
  const arr = Array(5);
  return randomNumbersFiller(0, arr);
};

const randomNumbersFiller = (i, arr) => {
  if (i === arr.length) return arr;
  let randomNumber = randomNumberGenerator(2, 32);
  while (arr.includes(randomNumber)) {
    randomNumber = randomNumberGenerator(2, 32);
  }
  arr[i] = randomNumber;
  return randomNumbersFiller(i + 1, arr);
};

const randomNumberGenerator = (start, finish) => {
  if (start > finish) {
    const temp = start;
    start = finish;
    finish = temp;
  }
  return Math.ceil(Math.random() * (finish - start)) + start;
};

module.exports = { randomNumbersArray };
