const auth = require("../auth");

describe("auth test", () => {
  it("createUser should exist", () => {
    expect(auth.createUser).toBeDefined();
  });

  it("login should exist", () => {
    expect(auth.login).toBeDefined();
  });
});
