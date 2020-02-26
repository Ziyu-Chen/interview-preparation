const { expect } = require("chai");
const { newNew } = require(".");

function Student(name, gender) {
  this.name = name;
  this.gender = gender;
}
Student.prototype.greeting = function() {
  return "Hello, " + this.gender ? "Mr. " : "Ms. " + this.name;
};

describe("newNew", () => {
  it("should return create a new object using the new new function just like the native new operator", () => {
    const newXiaoMing = new Student("Xiaoming", 1);
    const newNewXiaoMing = newNew(Student)("Xiaoming", 1);
    expect(newNewXiaoMing.name).to.eql(newXiaoMing.name);
    expect(newNewXiaoMing.gender).to.eql(newXiaoMing.gender);
    expect(newNewXiaoMing.greeting()).to.eql(newXiaoMing.greeting());
  });
});
