const { expect } = require("chai");
const { underscoreToCamelCase, camelCaseToUnderscore } = require(".");

describe("underscoreToCamelCase", () => {
  it("should return a string", () => {
    expect(typeof underscoreToCamelCase()).to.eql("string");
  });

  it("should return a string in the Camel Case format", () => {
    const str = "underscore";
    const str2 = "underscore_to_camel_case";
    expect(underscoreToCamelCase(str)).to.eql("underscore");
    expect(underscoreToCamelCase(str2)).to.eql("underscoreToCamelCase");
  });
});

describe("camelCaseToUnderscore", () => {
  it("should return a string", () => {
    expect(typeof camelCaseToUnderscore()).to.eql("string");
  });

  it("should return a string in the Camel Case format", () => {
    const str = "underscore";
    const str2 = "underscoreToCamelCase";
    expect(camelCaseToUnderscore(str)).to.eql("underscore");
    expect(camelCaseToUnderscore(str2)).to.eql("underscore_to_camel_case");
  });
});
