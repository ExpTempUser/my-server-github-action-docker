import request from "supertest"
import app from "./server.js"

describe("GET /", () => {
  it("should return a 200 OK status", async () => {
    const response = await request(app).get("/")
    expect(response.status).toBe(200)
  })
})
