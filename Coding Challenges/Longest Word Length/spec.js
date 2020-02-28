const { expect } = require("chai");
const { longestWordLength } = require(".");

describe("longestWordLength", () => {
  it("should return a number", () => {
    expect(typeof longestWordLength()).to.eql("number");
  });

  it("should return the length of the longest word in the string", () => {
    const str = "A little cat";
    const str2 = "Oh! My god! You are so beautiful! What a wonderful night!";
    expect(longestWordLength()).to.eql(0);
    expect(longestWordLength(str)).to.eql(6);
    expect(longestWordLength(str2)).to.eql(9);
  });
});
