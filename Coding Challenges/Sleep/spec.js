const { expect } = require("chai");
const { sleep } = require(".");

describe("sleep", () => {
  it("should pause the JavaScript engine for the given amount time", async () => {
    const start = new Date();
    await sleep(1.5);
    const end = new Date();
    console.log(end - start);
    expect((end - start) / 1000 > 1.5).to.be.true;
  });
});
