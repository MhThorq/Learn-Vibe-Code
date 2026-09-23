import { describe, expect, it } from "bun:test";
import { Elysia } from "elysia";

describe("Elysia Server Basic Test", () => {
  it("responds to GET /", async () => {
    const { app } = await import("../src/index");
    const response = await app.handle(new Request("http://localhost:3000/"));
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.status).toBe("ok");
    expect(data.message).toBe("Welcome to Bun + ElysiaJS + Drizzle + MySQL API!");
  });
});
