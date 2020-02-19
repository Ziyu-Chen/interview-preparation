const { expect } = require("chai");
const _ = require("lodash");
const { randomNumbersArray } = require(".");

describe("randomNumbersArray", () => {
  it("should return an array with the length 5", () => {
    const arr = randomNumbersArray();
    expect(arr.length).to.eql(5);
  });

  it("should contain elements that are between 2 and 32", () => {
    const arr = randomNumbersArray();
    expect(arr.every(value => value >= 2 && value <= 32)).to.be.true;
  });

  it("should not contain duplicates", () => {
    const arr = randomNumbersArray();
    expect(_.uniq(arr).length).to.eql(5);
  });
});
