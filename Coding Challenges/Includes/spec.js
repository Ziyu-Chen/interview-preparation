const { expect } = require("chai");
const { includes } = require(".");

describe("includes", () => {
  it("should return a boolean", () => {
    expect(includes([1, 2, 4, 6], 6)).to.be.true;
  });
  it("should return true if the given array contains the given target", () => {
    expect(includes([2, 4, 5, 6, 8, 9, 10], 5)).to.be.true;
    expect(includes([1, 2, 4, 5, 6, 7, 8, 317], 8)).to.be.true;
    expect(includes([1, 3, 5, 6, 8, 9, 10, 103, 1034, 10314, 10555], 1)).to.be
      .true;
  });
  it("should return false if the given array doesn't contain the given target", () => {
    expect(includes([2, 4, 5, 6, 8, 9, 10], 100)).to.be.false;
    expect(includes([1, 2, 4, 5, 6, 7, 8, 317], 88)).to.be.false;
    expect(includes([1, 3, 5, 6, 8, 9, 10, 103, 1034, 10314, 10555], 134)).to.be
      .false;
  });
});
