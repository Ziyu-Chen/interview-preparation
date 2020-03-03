/*
Source: https://github.com/haizlin/fe-interview/issues/602
Write a sleep function

来源：https://github.com/haizlin/fe-interview/issues/602
请写一个暂停函数
*/

const sleep = (t = 1) => {
  return new Promise(resolve => {
    setTimeout(resolve, t * 1000);
  });
};

module.exports = { sleep };
