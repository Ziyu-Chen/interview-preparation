const { expect } = require("chai");
const { quickSort } = require(".");

describe("quickSort", () => {
  it("should return an array", () => {
    expect(Array.isArray(quickSort())).to.eql(true);
  });

  it("should return a sorted array", () => {
    const arr = [1];
    const arr2 = [2, 1];
    const arr3 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 6];
    const arr4 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 5, 6, 5];
    expect(quickSort(arr)).to.deep.eql(arr);
    expect(quickSort(arr2)).to.deep.eql([1, 2]);
    expect(quickSort(arr3)).to.deep.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(quickSort(arr4)).to.deep.eql([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10]);
  });
});
