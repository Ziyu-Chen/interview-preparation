const { expect } = require("chai");
const { filter } = require(".");

describe("filter", () => {
  it("should return an array of items in the given array that fit the given criteria.", async () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = ["a", "ab", "abc", "abcd", "abcde"];
    const func1 = a => a % 2 == 0;
    const func2 = b => b.length > 3;
    expect(filter(arr1, func1)).to.eql(arr1.filter(func1));
    expect(filter(arr2, func2)).to.eql(arr2.filter(func2));
  });
});
