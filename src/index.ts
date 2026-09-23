import { Elysia, t } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Bun + ElysiaJS + Drizzle + MySQL API!",
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .get("/users", async ({ set }) => {
    try {
      const allUsers = await db.select().from(users);
      return { success: true, data: allUsers };
    } catch (error: any) {
      set.status = 500;
      return {
        success: false,
        message: "Failed to query database. Ensure MySQL server is running and configured.",
        error: error.message,
      };
    }
  })
  .post(
    "/users",
    async ({ body, set }) => {
      try {
        const { name, email } = body;
        await db.insert(users).values({ name, email });
        set.status = 201;
        return { success: true, message: "User created successfully" };
      } catch (error: any) {
        set.status = 500;
        return {
          success: false,
          message: "Failed to create user",
          error: error.message,
        };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
      }),
    }
  )
  .listen(port);

console.log(`🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
