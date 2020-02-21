const { expect } = require("chai");
const { remover } = require(".");

describe("upperToLower", () => {
  it("should return a string", () => {
    expect(typeof remover()).to.eql("string");
  });

  it("should change all the uppercase letters to lowercase and vice versa", () => {
    const str = "aaaaaaaa";
    const str2 = "a\ta\na\ta\na\ta\na\ta";
    expect(remover(str)).to.eql(str);
    expect(remover(str2)).to.eql(str);
  });
});
