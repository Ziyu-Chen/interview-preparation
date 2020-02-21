/*
Source: https://github.com/haizlin/fe-interview/issues/21
Write a function that counts the number of times a string appearing in another string.

来源：https://github.com/haizlin/fe-interview/issues/21
统计某一字符或字符串在另一个字符串中出现的次数
*/

const count = (str = "", s = "") => {
  if (!str || !s) return 0;
  const re = new RegExp(s, "g");
  return str.match(re).length;
};

module.exports = { count };
