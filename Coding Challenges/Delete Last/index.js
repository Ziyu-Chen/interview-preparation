/*
Source: https://github.com/haizlin/fe-interview/issues/9
Write a function that can remove the last character specified by the second argument from the first argument.

来源：https://github.com/haizlin/fe-interview/issues/9
去除字符串中最后一个指定的字符
*/

const deleteLast = (str = "", char = "") => {
  if (typeof str === "string" && typeof char === "string") {
    let i = str.length - 1;
    while (i >= 0 && str[i] !== char) i--;
    return i === -1 ? str : str.slice(0, i) + str.slice(i + 1);
  } else {
    return str;
  }
};

module.exports = { deleteLast };
