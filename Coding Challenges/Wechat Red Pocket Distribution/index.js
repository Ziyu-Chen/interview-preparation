/*
Source: https://github.com/haizlin/fe-interview/issues/1219
Write a function that imitates the Wechat red pocket distribution process.

来源：https://github.com/haizlin/fe-interview/issues/1219
用js模拟实现微信抢红包的算法，并说明你的思路
*/

/*
I decided to use closure to solve this problem. 
When creating red pockets, users will be asked to provide three arguments.
The first argument is the total amount of money they want to put into the red pockets.
The second argument is the number of red pockets.
The third argument indicates whether the amount of money in each red pocket is determined randomly.
When createRedPockets is called, an array of red pockets (positive numbers) will be created and a function is returned.
The function returns a red pocket when there are still red pockets (positive numbers) left in the array. Otherwise it returns 0.
*/

const createRedPockets = (total, num, random = false) => {
  let redPockets;
  if (random) {
    let weights = [];
    for (let i = 0; i < num; i++) {
      weights.push(Math.random() + 1);
    }
    const sum = weights.reduce((a, b) => a + b);
    weights = weights.map(weight => weight / sum);
    redPockets = weights.map(weight => weight * total);
  } else {
    redPockets = Array(num).fill(total / num);
  }
  return () => {
    if (!redPockets.length) return 0;
    return redPockets.pop();
  };
};

module.exports = { createRedPockets };
