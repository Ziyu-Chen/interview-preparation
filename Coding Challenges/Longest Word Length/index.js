/*
Source: https://github.com/haizlin/fe-interview/issues/138
Write a function that returns the length of the longest word in a string.

来源：https://github.com/haizlin/fe-interview/issues/138
找到字符串中最长的单词，并返回它的长度
*/

const longestWordLength = (str = "") => {
  const words = str.replace(/[^ a-zA-Z]/g, "").split(" ");
  let max = 0;
  for (const word of words) {
    const wordLength = word.length;
    if (max < wordLength) {
      max = wordLength;
    }
  }
  return max;
};

module.exports = { longestWordLength };
