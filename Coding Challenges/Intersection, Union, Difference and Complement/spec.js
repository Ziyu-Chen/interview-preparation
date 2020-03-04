const { expect } = require("chai");
const { intersection, union, difference } = require(".");
const _ = require("lodash");

describe("intersection", () => {
  it("should return the intersection of two arrays", async () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    expect(intersection(arr1, arr2)).to.eql(_.intersection(arr1, arr2));
    const arr3 = [1, 2, 3, 4, 5];
    const arr4 = [6, 7, 8];
    expect(intersection(arr3, arr4)).to.eql(_.intersection(arr3, arr4));
  });
});

describe("union", () => {
  it("should return the union of two arrays", async () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    expect(union(arr1, arr2)).to.eql(_.union(arr1, arr2));
    const arr3 = [1, 2, 3, 4, 5];
    const arr4 = [6, 7, 8];
    expect(union(arr3, arr4)).to.eql(_.union(arr3, arr4));
  });
});

describe("difference", () => {
  it("should return the difference of two arrays", async () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    expect(difference(arr1, arr2)).to.eql(_.difference(arr1, arr2));
    const arr3 = [1, 2, 3, 4, 5];
    const arr4 = [1, 2, 3, 4, 5];
    expect(difference(arr3, arr4)).to.eql(_.difference(arr3, arr4));
  });
});
