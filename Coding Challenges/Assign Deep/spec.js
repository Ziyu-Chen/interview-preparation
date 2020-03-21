const { expect } = require("chai");
const { assignDeep } = require(".");

describe.only("assignDeep", () => {
  it("should merge the given two objects deeply", () => {
    const obj1 = {};
    const obj2 = { a: 1 };
    const obj3 = { a: 1 };
    const obj4 = { a: { b: { c: { d: { e: 5 } } } }, f: 6, g: { h: 8 } };
    const obj5 = { a: 100, i: 9 };
    const obj6 = { a: { b: { c: { d: { e: 5 } } } }, f: 6, g: { h: 8 } };
    assignDeep(obj1, obj2);
    assignDeep(obj3, obj4);
    assignDeep(obj5, obj6);
    expect(obj1).to.eql(obj2);
    expect(obj3).to.eql(obj4);
    expect(obj5).to.eql({
      a: { b: { c: { d: { e: 5 } } } },
      i: 9,
      f: 6,
      g: { h: 8 }
    });
  });
});
