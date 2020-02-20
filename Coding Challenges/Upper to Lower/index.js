/*
source: https://github.com/haizlin/fe-interview/issues/15
Write a function that changes all the uppercase letters to lowercase and vice versa.

来源：https://github.com/haizlin/fe-interview/issues/15
写一个把字符串大小写切换的方法
*/

// const upperToLower = (str = "") => {
//   const arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (/[a-z]/.test(arr[i])) arr[i] = arr[i].toUpperCase();
//     else if (/[A-Z]/.test(arr[i])) arr[i] = arr[i].toLowerCase();
//   }
//   return arr.join("");
// };

const upperToLower = (str = "") =>
  str.replace(/[a-zA-Z]/g, match =>
    /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase()
  );

module.exports = { upperToLower };
