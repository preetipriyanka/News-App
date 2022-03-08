const users = require("../users");

describe("tests for users", () => {
  it("getAllUsers should exist", () => {
    expect(users.getAllUsers).toBeDefined();
  });

  it("getUser should exist", () => {
    expect(users.getUser).toBeDefined();
  });
});
