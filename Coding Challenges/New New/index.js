/*
Source: https://github.com/haizlin/fe-interview/issues/76
Write a new function that 

来源：https://github.com/haizlin/fe-interview/issues/76
手动实现一个new方法
*/

const newNew = Obj => {
  return (...args) => {
    const obj = Object.create(Obj.prototype);
    const obj1 = Obj.apply(obj, args);
    return obj1 instanceof Object ? obj1 : obj;
  };
};

module.exports = { newNew };
