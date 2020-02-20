/*
Source:https://github.com/haizlin/fe-interview/issues/12
Write a function that takes in a string in the underscore format and converts it to the Camel Case format

来源：https://github.com/haizlin/fe-interview/issues/12
写一个方法把下划线命名转成大驼峰命名
*/

// const underscoreToCamelCase = (str = "") => {
//   const arr = str.split("_");
//   for (let i = 1; i < arr.length; i++)
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   return arr.join("");
// };

const underscoreToCamelCase = (str = "") =>
  str.replace(/_[a-z]/g, match => match[1].toUpperCase());

const camelCaseToUnderscore = (str = "") =>
  str.replace(/[A-Z]/g, match => "_" + match.toLowerCase());

module.exports = { underscoreToCamelCase, camelCaseToUnderscore };
