const { expect } = require("chai");
const { isSorted } = require(".");

describe("isSorted", () => {
  it("should return a boolean", () => {
    expect(isSorted()).to.be.true;
  });
  it("should return true if the given array is sorted", () => {
    expect(isSorted([2])).to.be.true;
    expect(isSorted([1, 2, 4, 5, 6, 7, 8, 317])).to.be.true;
    expect(
      isSorted([141341, 102, 41, 13, 4, 2, Number.NEGATIVE_INFINITY], true)
    ).to.be.true;
  });
  it("should return false if the given array is not sorted", () => {
    expect(isSorted([111, 12])).to.be.false;
    expect(isSorted([1, 2, 4, 5, 6, 7, 8, 317], true)).to.be.false;
    expect(isSorted([Number.NEGATIVE_INFINITY, 31, 1451414321, 100, 141341])).to
      .be.false;
  });
});
