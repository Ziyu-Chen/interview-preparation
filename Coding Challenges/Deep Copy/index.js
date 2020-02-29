/*
Source: https://github.com/haizlin/fe-interview/issues/167
Write a function that deep copies an object.

来源：https://github.com/haizlin/fe-interview/issues/167
深度克隆对象的方法有哪些，并把你认为最好的写出来 
*/

const deepCopy = obj => {
  if (typeof obj === "object") {
    let newObj;
    if (Array.isArray(obj)) newObj = [];
    else newObj = {};
    for (const key in obj) {
      newObj[key] = deepCopy(obj[key]);
    }
    return newObj;
  }
  return obj;
};

module.exports = { deepCopy };
