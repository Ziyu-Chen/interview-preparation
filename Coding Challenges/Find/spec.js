const { expect } = require("chai");
const { find } = require(".");

describe("find", () => {
  it("should return the first element that fits the given criteria in the given array.", async () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = ["a", "ab", "abc", "abcd", "abcde"];
    const func1 = a => a % 2 == 0;
    const func2 = b => b.length > 3;
    expect(find(arr1, func1)).to.eql(arr1.find(func1));
    expect(find(arr2, func2)).to.eql(arr2.find(func2));
  });
});
