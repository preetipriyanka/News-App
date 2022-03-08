const getArticles = require("../articles");

describe("test for articles", () => {
  it("getArticles should exist", () => {
    expect(getArticles.getArticles).toBeDefined();
  });

  it("addArticle should exist", () => {
    expect(getArticles.addArticle).toBeDefined();
  });

  it("deleteArticle should exist", () => {
    expect(getArticles.deleteArticle).toBeDefined();
  });
});
