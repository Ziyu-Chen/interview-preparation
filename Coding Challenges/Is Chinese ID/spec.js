const { expect } = require("chai");
const { isChineseID } = require(".");

describe("getQueryParameters", () => {
  it("should return a boolean", () => {
    expect(typeof isChineseID()).to.eql("boolean");
  });

  it("should return false when the given ID number is not a valid Chinese ID number", () => {
    const ID = "fafj41321l4b1tl1kh4kjl1hr1b4l1kh4";
    const ID2 = "310101192358482233";
    const ID3 = "310101200011313144";
    const ID4 = "310101500011119310";
    expect(isChineseID(ID)).to.be.false;
    expect(isChineseID(ID2)).to.be.false;
    expect(isChineseID(ID3)).to.be.false;
    expect(isChineseID(ID4)).to.be.false;
  });
  it("should return true when the given ID number is a valid Chinese ID number", () => {
    const ID = "34052419800101001X";
    expect(isChineseID(ID)).to.be.true;
  });
});
