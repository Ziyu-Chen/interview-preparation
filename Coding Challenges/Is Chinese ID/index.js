/*
Source: https://github.com/haizlin/fe-interview/issues/68
Write a function that verifies if a string is a valid Chinese ID number

来源：https://github.com/haizlin/fe-interview/issues/68
写一个验证身份证号的方法
*/

/*
一、身份证前17位编排规则
（1）前1、2位数字表示：所在省份的代码；
（2）第3、4位数字表示：所在城市的代码；
（3）第5、6位数字表示：所在区县的代码；
（4）第7~14位数字表示：出生年、月、日；
（5）第15、16位数字表示：所在地的派出所的代码；
（6）第17位数字表示性别：奇数表示男性，偶数表示女性；

二、身份证第十八位数字的计算方法
校验的计算方式： 　　
1. 对前17位数字本体码加权求和 　　
公式为：S = Sum(Ai * Wi), i = 0, … , 16 　　
其中Ai表示第i位置上的身份证号码数字值，Wi表示第i位置上的加权因子，其各位对应的值依次为： 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 　　
2. 以11对计算结果取模 　　Y = mod(S, 11) 　　
3. 根据模的值得到对应的校验码 　　
对应关系为： 　　
Y值： 0 1 2 3 4 5 6 7 8 9 10 　　
校验码： 1 0 X 9 8 7 6 5 4 3 2
4. 通过上面得知如果余数是2，就会在身份证的第18位数字上出现罗马数字的Ⅹ。如果余数是10，身份证的最后一位号码就是2。

例如：某男性的身份证号码是34052419800101001X。我们要看看这个身份证是不是合法的身份证。
首先：我们得出，前17位的乘积和是189
然后：用189除以11得出的结果是17 + 2/11，也就是说余数是2。
最后：通过对应规则就可以知道余数2对应的数字是x。所以，这是一个合格的身份证号码。
*/

const _ = require("lodash");
const moment = require("moment");

const isChineseID = (ID = "") => {
  // Step 1: Check if the first 17 characters are numbers and the last character is a number or X
  if (!/\d{18}|\d{17}[X]/.test(ID)) return false;
  // Step 2: Check if the 7th character to the 14th character make up a valid date before today.
  const dateStr = ID.slice(6, 14);
  const month = Number(dateStr.slice(4, 6));
  const day = Number(dateStr.slice(6));
  if (month < 1 || month > 12) return false;
  else {
    if (day < 1) return false;
    if (month === 2) {
      if (year % 400 === 0) {
        if (day > 29) return false;
      } else if (year % 100 === 0) {
        if (day > 28) return false;
      } else if (year % 4 === 0) {
        if (day > 29) return false;
      } else {
        if (day > 28) return false;
      }
    }
    if ([1, 3, 5, 7, 8, 10, 12].includes(month) && day > 31) return false;
    if ([4, 6, 9, 11].includes(month) && day > 30) return false;
  }
  const date = moment(dateStr);
  const today = moment();
  if (date > today) return false;
  // Step 3: Check if the last character is valid
  const arr = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
  const values = ID.slice(0, 17).split("");
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const remainder =
    _.zip(values, weights)
      .map(item => Number(item[0]) * item[1])
      .reduce((a, b) => a + b) % 11;
  if (ID[ID.length - 1] !== arr[remainder]) return false;
  return true;
};

module.exports = { isChineseID };
