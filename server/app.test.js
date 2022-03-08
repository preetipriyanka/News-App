const app = require("./app");

describe("app component should be existing", () => {
    it("should exist", (done) => {
        expect(app).toBeDefined();
        done();
    })

    // it("calling 'app' should call use method", () => {
    //     const use = jest.fn();
    //     use();
    //     expect(app.app.use).toHaveBeenCalled();
    // })
})