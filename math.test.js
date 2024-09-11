const { add, multiply, subtract } = require("./math");

describe("Math.js test", () => {
  it("Should add correctly", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Should subtract correctly", () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it("Should mutiply correctly", () => {
    expect(multiply(10, 10)).toBe(100);
  });
});
