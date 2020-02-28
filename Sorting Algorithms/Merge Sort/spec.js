const { expect } = require("chai");
const { mergeSort } = require(".");

describe("mergeSort", () => {
  it("should return an array", () => {
    expect(Array.isArray(mergeSort())).to.eql(true);
  });

  it("should return a sorted array", () => {
    const arr = [1];
    const arr2 = [2, 1];
    const arr3 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 6];
    const arr4 = [5, 3, 9, 7, 2, 1, 4, 8, 10, 5, 6, 5];
    expect(mergeSort(arr)).to.deep.eql(arr);
    expect(mergeSort(arr2)).to.deep.eql([1, 2]);
    expect(mergeSort(arr3)).to.deep.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(mergeSort(arr4)).to.deep.eql([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10]);
  });
});
