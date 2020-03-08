const { expect } = require("chai");
const { numeralSystemSwitch } = require(".");

describe("numeralSystemSwitch", () => {
  it("should return a string", () => {
    expect(typeof numeralSystemSwitch("15")).to.eql("string");
  });
  it("should throw an error when the number is not valid", () => {
    try {
      numeralSystemSwitch("gafj;alkfj;bnof;aja;fa");
    } catch (e) {
      expect(String(e)).to.eql("Error: Invalid number");
    }
    try {
      numeralSystemSwitch("1111111112", 2, 5);
    } catch (e) {
      expect(String(e)).to.eql("Error: Invalid number");
    }
    try {
      numeralSystemSwitch("FFFFFFFF", 15, 5);
    } catch (e) {
      expect(String(e)).to.eql("Error: Invalid number");
    }
  });
  it("should throw an error when the base is not valid", () => {
    try {
      numeralSystemSwitch("15", -1, 3);
    } catch (e) {
      expect(String(e)).to.eql("Error: Invalid base");
    }
    try {
      numeralSystemSwitch("15", 2, 1);
    } catch (e) {
      expect(String(e)).to.eql("Error: Invalid base");
    }
  });
  it("should throw an error when fromBase or toBase is greater than 16", () => {
    try {
      numeralSystemSwitch("15", 100, 2);
    } catch (e) {
      expect(String(e)).to.eql("Error: Base not supported");
    }
    try {
      numeralSystemSwitch("15", 10, 200);
    } catch (e) {
      expect(String(e)).to.eql("Error: Base not supported");
    }
  });
  it("should switch the given number from one numeral system to another", () => {
    expect(numeralSystemSwitch("15")).to.eql("1111");
    expect(numeralSystemSwitch("1111", 2, 10)).to.eql("15");
    expect(numeralSystemSwitch("1111", 2, 16)).to.eql("F");
    expect(numeralSystemSwitch("1111", 16, 2)).to.eql("1000100010001");
    expect(numeralSystemSwitch("11001001110011011", 2, 3)).to.eql(
      "12020201210"
    );
    expect(numeralSystemSwitch("103323", 10, 12)).to.eql("4B963");
    expect(numeralSystemSwitch("29923", 14, 5)).to.eql("11301243");
    expect(numeralSystemSwitch("FFFFFF", 16, 14)).to.eql("232A207");
  });
});
