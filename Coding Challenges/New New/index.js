/*
Source: https://github.com/haizlin/fe-interview/issues/76
Write a new function that 

来源：https://github.com/haizlin/fe-interview/issues/76
手动实现一个new方法
*/

/*
Step 1: Create a new object.
Step 2: Point the new object's prototype to the constructor's prototype.
Step 3: Point "this" to the new object.
Step 4: Run the constructor
Step 5: Return the object

1. 创建一个对象
2. 对象[[ProtoType]] 指向构造函数 prototype
3. this 指向该对象
4. 执行函数
5 .如果函数没有返回一个引用值则返回该对象
*/

const newNew = Obj => {
  return (...args) => {
    const obj = Object.create(Obj.prototype); // Step 1 & 2
    const obj1 = Obj.apply(obj, args); // Step 3 & 4
    return obj1 instanceof Object ? obj1 : obj; // Step 5
  };
};

module.exports = { newNew };
