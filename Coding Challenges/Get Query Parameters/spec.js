const { expect } = require("chai");
const { getQueryParameters } = require(".");

describe("getQueryParameters", () => {
  it("should return an object", () => {
    expect(typeof getQueryParameters()).to.eql("object");
  });

  it("should return an object with parameter names being the keys and property values being the values", () => {
    const url = "https://www.google.com/";
    const url2 = "https://www.baidu.com/?a=222";
    const url3 =
      "https://www.google.com/search?q=url+query+parameters&oq=url+query+&aqs=chrome.0.0l2j69i57j0l5.4548j0j1&sourceid=chrome&ie=UTF-8";
    expect(getQueryParameters(url)).to.deep.eql({});
    expect(getQueryParameters(url2)).to.deep.eql({ a: "222" });
    expect(getQueryParameters(url3)).to.deep.eql({
      q: "url+query+parameters",
      oq: "url+query+",
      aqs: "chrome.0.0l2j69i57j0l5.4548j0j1",
      sourceid: "chrome",
      ie: "UTF-8"
    });
  });
});
