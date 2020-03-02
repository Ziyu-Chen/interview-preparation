/*
Source: https://github.com/haizlin/fe-interview/issues/582
Write a function that generates an expression in Chinese from the multiplication table

来源：https://github.com/haizlin/fe-interview/issues/582
用js实现一个九九乘法口诀表
*/

const expression = (a = 1, b = 1) => {
  if (a < 1) a = 1;
  if (b < 1) b = 1;
  if (a > 9) a = 9;
  if (b > 9) b = 9;
  const dict = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  const ab = a < b ? dict[a] + dict[b] : dict[b] + dict[a];
  const product = a * b;
  if (product < 10) return ab + "得" + dict[product];
  if (product === 10) return ab + "一十";
  if (product < 20) return ab + "十" + dict[product - 10];
  if (product < 100)
    return ab + dict[Math.floor(product / 10)] + "十" + dict[product % 10];
};

module.exports = { expression };
