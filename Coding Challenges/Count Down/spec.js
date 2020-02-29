const { expect } = require("chai");
const { countDown } = require(".");

describe.only("countDown", () => {
  it("should return a number", () => {
    console.log(countDown());
    expect(typeof countDown()).to.eql("number");
  });
});
