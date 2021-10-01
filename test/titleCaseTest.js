const { expect } = require("chai");
const assert = require("assert");
const titleCase = require("../titleCase");

describe("titleCase()", () => {
  // test cases here
  it("AB = Ab", function () {
    const result = titleCase("AB");
    assert.equal(result, "Ab");
  });
});
