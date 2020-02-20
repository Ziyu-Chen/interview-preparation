const { expect } = require("chai");
const { deleteLast } = require(".");

describe("deleteLast", () => {
  it("should return a string", () => {
    expect(typeof deleteLast()).to.eql("string");
  });

  it("should return an empty string when no argument is given", () => {
    expect(deleteLast()).to.eql("");
  });

  it("should return the first argument without changing it when the second argument is not given", () => {
    const str = "abcdefg";
    expect(deleteLast(str)).to.eql(str);
  });

  it("should remove the last character specified by the second argument from the first argument", () => {
    const str = "ababababababababababba";
    const str2 = "ababababababababababab";
    const str3 = "baaaaaaaaaaaaaaaaaaaaa";
    expect(deleteLast(str, "b")).to.eql("ababababababababababa");
    expect(deleteLast(str2, "b")).to.eql("ababababababababababa");
    expect(deleteLast(str3, "b")).to.eql("aaaaaaaaaaaaaaaaaaaaa");
  });
});
