const { expect } = require("chai");
const { unique } = require(".");

describe("getQueryParameters", () => {
  it("should return an array", () => {
    expect(Array.isArray(unique())).to.be.true;
  });

  it("should remove all the duplicates from an array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8];
    const arr2 = [
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7, 8]
    ];
    const arr3 = [1, 1, [2, 2, [3, 3, [4, 4, [5, 5, [6, 6, [7, 7, [8, 8]]]]]]]];
    expect(unique(arr)).to.deep.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(unique(arr2)).to.deep.eql([[1], [2], [3], [4], [5], [6], [7], [8]]);
    expect(unique(arr3)).to.deep.eql([1, [2, [3, [4, [5, [6, [7, [8]]]]]]]]);
  });
});
