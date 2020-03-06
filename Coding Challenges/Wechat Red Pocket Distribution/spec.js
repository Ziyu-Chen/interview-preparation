const { expect } = require("chai");
const { createRedPockets } = require(".");

describe("createRedPockets", () => {
  it("should return a function that generates one red pocket containing the total amount of money sepecified by the first argument when the second argument (num) is not given", () => {
    const distributeRedPockets = createRedPockets(100);
    const firstRedPocket = distributeRedPockets();
    const secondRedPocket = distributeRedPockets();
    const thirdRedPocket = distributeRedPockets();
    const fourthRedPocket = distributeRedPockets();
    const fifthRedPocket = distributeRedPockets();
    expect(firstRedPocket).to.eql(100);
    expect(secondRedPocket).to.eql(0);
    expect(thirdRedPocket).to.eql(0);
    expect(fourthRedPocket).to.eql(0);
    expect(fifthRedPocket).to.eql(0);
  });
  it("should return a function that generates red pockets containing the same amount of money when the third argument (random) is false or not given", () => {
    const distributeRedPockets1 = createRedPockets(100, 2, false);
    const distributeRedPockets2 = createRedPockets(100, 2);
    expect(distributeRedPockets1()).to.eql(50);
    expect(distributeRedPockets1()).to.eql(50);
    expect(distributeRedPockets1()).to.eql(0);
    expect(distributeRedPockets1()).to.eql(0);
    expect(distributeRedPockets1()).to.eql(0);
    expect(distributeRedPockets2()).to.eql(50);
    expect(distributeRedPockets2()).to.eql(50);
    expect(distributeRedPockets2()).to.eql(0);
    expect(distributeRedPockets2()).to.eql(0);
    expect(distributeRedPockets2()).to.eql(0);
  });
  it("should return a function that generates red pockets containing random amount of money when the third argument (random) is true", () => {
    const distributeRedPockets = createRedPockets(100, 2, true);
    const firstRedPocket = distributeRedPockets();
    const secondRedPocket = distributeRedPockets();
    const thirdRedPocket = distributeRedPockets();
    const fourthRedPocket = distributeRedPockets();
    const fifthRedPocket = distributeRedPockets();
    expect(firstRedPocket).to.not.eql(secondRedPocket);
    expect(firstRedPocket > 0).to.be.true;
    expect(secondRedPocket > 0).to.be.true;
    expect(Math.round(firstRedPocket + secondRedPocket)).to.eql(100);
    expect(thirdRedPocket).to.eql(0);
    expect(fourthRedPocket).to.eql(0);
    expect(fifthRedPocket).to.eql(0);
  });
});
