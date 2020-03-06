const { expect } = require("chai");
const { newMap } = require(".");

describe("newMap", () => {
  it("should return an array populated with the results of calling a provided function on every element in the given array.", async () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = ["a", "ab", "abc", "abcd", "abcde"];
    const func1 = a => a ** 2;
    const func2 = b => b.length ** 2;
    expect(newMap(arr1, func1)).to.eql(arr1.map(func1));
    expect(newMap(arr2, func2)).to.eql(arr2.map(func2));
  });
});
