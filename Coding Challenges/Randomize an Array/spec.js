const { expect } = require("chai");
const { randomize } = require(".");

describe.only("randomize", () => {
  it("should return a array", () => {
    expect(Array.isArray(randomize())).to.be.true;
  });

  it("should randomize an array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(randomize(arr1).every((value, index) => value == arr[index])).to.be
      .false;
  });
});
