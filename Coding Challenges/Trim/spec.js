const { expect } = require("chai");
const _ = require("lodash");
const { trimStart, trimEnd, trim } = require(".");

describe("trimStart", () => {
  it("should return a string", () => {
    expect(typeof trimStart()).to.eql("string");
  });

  it("should return an empty string when no argument is given", () => {
    expect(trimStart()).to.eql("");
  });

  it("should remove all the spaces in the front when the second argument is not given", () => {
    const str = "   abc   ";
    expect(trimStart(str)).to.eql(_.trimStart(str));
  });

  it("should remove all the characters (specified in the second argument) in the front", () => {
    const str = "-_-abc-_-";
    expect(trimStart(str, "-_")).to.eql(_.trimStart(str, "-_"));
  });
});

describe("trimEnd", () => {
  it("should return a string", () => {
    expect(typeof trimEnd()).to.eql("string");
  });

  it("should return an empty string when no argument is given", () => {
    expect(trimEnd()).to.eql("");
  });

  it("should remove all the spaces at the end when the second argument is not given", () => {
    const str = "   abc   ";
    expect(trimEnd(str)).to.eql(_.trimEnd(str));
  });

  it("should remove all the characters (specified in the second argument) at the end", () => {
    const str = "-_-abc-_-";
    expect(trimEnd(str, "-_")).to.eql(_.trimEnd(str, "-_"));
  });
});

describe("trim", () => {
  it("should return a string", () => {
    expect(typeof trim()).to.eql("string");
  });

  it("should return an empty string when no argument is given", () => {
    expect(trim()).to.eql("");
  });

  it("should remove all the spaces in the front and at the end when the second argument is not given", () => {
    const str = "   abc   ";
    expect(trim(str)).to.eql(_.trim(str));
  });

  it("should remove all the characters (specified in the second argument) in the front and at the end", () => {
    const str = "-_-abc-_-";
    expect(trim(str, "-_")).to.eql(_.trim(str, "-_"));
  });
});
