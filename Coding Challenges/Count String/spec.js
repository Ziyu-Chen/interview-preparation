const { expect } = require("chai");
const { count } = require(".");

describe("count", () => {
  it("should return a number", () => {
    expect(typeof count()).to.eql("number");
  });

  it("should return the number of times the second argument appearing in the first argument", () => {
    const str = "aaaaaaaa";
    const str2 = "a\ta\na\ta\na\ta\na\ta";
    const str3 = "abcabcabcab";
    expect(count(str, "a")).to.eql(8);
    expect(count(str2, "a")).to.eql(8);
    expect(count(str, "aa")).to.eql(4);
    expect(count(str, "aaa")).to.eql(2);
    expect(count(str3, "abc")).to.eql(3);
  });
});
