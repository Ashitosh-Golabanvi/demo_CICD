const request = require("supertest");
const app = require("../app");

describe("Todo API", () => {

  it("should return todos list", async () => {
    const res = await request(app).get("/todos");
    expect(res.statusCode).toBe(200);
  });

});