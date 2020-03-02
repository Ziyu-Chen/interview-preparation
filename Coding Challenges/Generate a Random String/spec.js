const { expect } = require("chai");
const { randomString } = require(".");

describe.only("randomString", () => {
  it("should return a string", () => {
    console.log(randomString(100));
    expect(typeof randomString(100)).to.eql("string");
  });
});
