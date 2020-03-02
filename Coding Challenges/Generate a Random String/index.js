/*
Source: https://github.com/haizlin/fe-interview/issues/519
Write a function that generates a random string of the given length.

来源：https://github.com/haizlin/fe-interview/issues/519
写一个方法随机生成指定位数的字符串
*/

const randomString = (n = 1) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    const num = Math.floor(Math.random() * 94) + 33;
    str += String.fromCharCode(num);
  }
  return str;
};

module.exports = { randomString };
