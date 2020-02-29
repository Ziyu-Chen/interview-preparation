const { expect } = require("chai");
const { deepCopy } = require(".");

describe("deepCopy", () => {
  it("should return a deep copy of an object", () => {
    const obj = "123456";
    const obj2 = 123456;
    const obj3 = [1, 2, 3, 4, 5, 6];
    const obj4 = { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6 };
    const obj5 = {
      "1": [1, 2, 3, 4],
      "2": { "2": 2, "3": 3, "4": 4, "5": 5 },
      "3": { "3": 3, "4": [4, 5, 6] },
      "4": [4, { "5": 5 }],
      "5": { "5": 5, "6": 6 },
      "6": 6
    };
    expect(deepCopy(obj)).to.deep.eql(obj);
    expect(deepCopy(obj2)).to.deep.eql(obj2);
    expect(deepCopy(obj3)).to.deep.eql(obj3);
    expect(deepCopy(obj4)).to.deep.eql(obj4);
    expect(deepCopy(obj5)).to.deep.eql(obj5);
  });
});
