const { expect } = require("chai");
const { bubbleSort } = require(".");

describe("bubbleSort", () => {
  it("should return an array", () => {
    expect(Array.isArray(bubbleSort())).to.eql(true);
  });

  it("should return a sorted array", () => {
    const arr = [1];
    const arr2 = [2, 1];
    const arr3 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 6];
    const arr4 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 5, 6, 5];
    expect(bubbleSort(arr)).to.deep.eql(arr);
    expect(bubbleSort(arr2)).to.deep.eql([1, 2]);
    expect(bubbleSort(arr3)).to.deep.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(bubbleSort(arr4)).to.deep.eql([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10]);
  });
});
