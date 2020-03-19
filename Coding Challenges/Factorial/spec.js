const { expect } = require("chai");
const { factorial } = require(".");

describe("factorial", () => {
  it("should return a number", () => {
    expect(typeof factorial()).to.eql("number");
  });
  it("should return the number that is the factorial of the given number.", () => {
    expect(factorial(0)).to.eql(1);
    expect(factorial(1)).to.eql(1);
    expect(factorial(6)).to.eql(720);
  });
});
