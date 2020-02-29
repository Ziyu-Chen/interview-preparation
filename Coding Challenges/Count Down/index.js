/*
Source: https://github.com/haizlin/fe-interview/issues/187
Write a function that shows countdown to the New Year.

来源：https://github.com/haizlin/fe-interview/issues/187
写个过年的倒计时
*/

const countDown = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1); // The second parameter of Date() is month - 1
  return Math.floor((newYear - today) / (1000 * 60 * 60 * 24));
};

module.exports = { countDown };
