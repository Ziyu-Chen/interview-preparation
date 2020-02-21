/*
Source: https://github.com/haizlin/fe-interview/issues/18
Write a function that removes tabulates and newlines

来源：https://github.com/haizlin/fe-interview/issues/18
写一个去除制表符和换行符的方法
*/

const remover = (str = "") => str.replace(/[\n\t]/g, "");

module.exports = { remover };
