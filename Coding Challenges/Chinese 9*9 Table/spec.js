const { expect } = require("chai");
const { expression } = require(".");

describe("expression", () => {
  it("should return a string", () => {
    expect(typeof expression()).to.eql("string");
  });

  it("should return an expression in Chinese from the multiplication table", () => {
    expect(expression(1, 1)).to.eql("一一得一");
    expect(expression(1, 5)).to.eql("一五得五");
    expect(expression(-1, 1000)).to.eql("一九得九");
    expect(expression(2, 5)).to.eql("二五一十");
    expect(expression(2, 8)).to.eql("二八十六");
    expect(expression(4, 5)).to.eql("四五二十");
    expect(expression(9, 5)).to.eql("五九四十五");
    expect(expression(9, 9)).to.eql("九九八十一");
  });
});
