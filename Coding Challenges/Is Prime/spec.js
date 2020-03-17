const { expect } = require("chai");
const { isPrime, isPrimeCreator } = require(".");

describe.only("isPrime", () => {
  it("should return a boolean", () => {
    expect(isPrime()).to.be.false;
  });
  it("should return true when the argument is a prime number and false when the argument is not a prime number", () => {
    expect(isPrime(2)).to.be.true;
    expect(isPrime(17)).to.be.true;
    expect(isPrime(31)).to.be.true;
    expect(isPrime(30)).to.be.false;
    expect(isPrime(81)).to.be.false;
    expect(isPrime(99)).to.be.false;

    const start = new Date().getTime();
    for (let i = 1; i <= 1000; i++) {
      isPrime(i);
    }
    const end = new Date().getTime();
    const dur = end - start;
    console.log(dur);
  });
});

describe.only("isPrimeCreator", () => {
  it("should return a function", () => {
    const isPrime2 = isPrimeCreator();
    expect(typeof isPrime2).to.eql("function");
  });

  it("should return a function that returns a boolean", () => {
    const isPrime2 = isPrimeCreator();
    expect(isPrime2()).to.be.false;
  });
  it("should return a function that returns true when the argument is a prime number and false when the argument is not a prime number", () => {
    const isPrime2 = isPrimeCreator();
    expect(isPrime2(2)).to.be.true;
    expect(isPrime2(17)).to.be.true;
    expect(isPrime2(31)).to.be.true;
    expect(isPrime2(30)).to.be.false;
    expect(isPrime2(81)).to.be.false;
    expect(isPrime2(99)).to.be.false;

    const start = new Date().getTime();
    const isPrime3 = isPrimeCreator();
    for (let i = 1; i <= 1000; i++) {
      isPrime3(i);
    }
    const end = new Date().getTime();
    const dur = end - start;
    console.log(dur);
  });
});
