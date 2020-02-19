/*
Source: https://github.com/haizlin/fe-interview/issues/6
Write a function to remove spaces in a given string. This function will remove spaces in the front, at the end, or in the middle according to the second input.

来源：https://github.com/haizlin/fe-interview/issues/6
写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格
*/

/*
This problem requires us to implement a function very similar to the trim, trimStart, and trimEnd methods in lodash. I will implement these three methods instead.
*/

const trimStart = (str = "", chars = " ") => {
  if (!str) return str;
  const charsSet = new Set(chars.split(""));
  let i = 0;
  while (charsSet.has(str[i])) i++;
  return str.slice(i);
};

const trimEnd = (str = "", chars = " ") => {
  if (!str) return str;
  const charsSet = new Set(chars.split(""));
  let i = str.length - 1;
  while (charsSet.has(str[i])) i--;
  return str.slice(0, i + 1);
};

const trim = (str = "", chars = " ") => {
  return trimStart(trimEnd(str, chars), chars);
};

module.exports = { trimStart, trimEnd, trim };
