const { expect } = require("chai");
const { upperToLower } = require(".");

describe("upperToLower", () => {
  it("should return a string", () => {
    expect(typeof upperToLower()).to.eql("string");
  });

  it("should change all the uppercase letters to lowercase and vice versa", () => {
    const str = "aaaaaaaa";
    const str2 = "AAAAAAAA";
    expect(upperToLower(str)).to.eql(str2);
    expect(upperToLower(str2)).to.eql(str);

    const str3 = "abc___DEF---GHI___jkl";
    const str4 = "ABC___def---ghi___JKL";
    expect(upperToLower(str3)).to.eql(str4);
    expect(upperToLower(str4)).to.eql(str3);
  });
});
