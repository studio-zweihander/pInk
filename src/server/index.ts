import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { testConnection } from "./config/database";
import { comicsController } from "./controllers/comicsController";
import { issuesController } from "./controllers/issuesController";

const PORT = process.env.PORT || 3000;

async function start() {
  await testConnection();

  const app = new Elysia()
    .use(cors())
    .use(swagger())
    .get("/health", () => ({
      status: "OK",
      timestamp: new Date().toISOString(),
      version: "1.1.0 (Bun + Elysia)",
    }))
    .group("/api", (app) =>
      app
        .group("/comics", (app) =>
          app
            .get("/", () => comicsController.getAllComics())
            .get("/:id", comicsController.getComicById)
            .get("/:id/issues", comicsController.getComicIssues)
        )
        .group("/issues", (app) =>
          app
            .get("/", issuesController.getAllIssues)
            .get("/:id", issuesController.getIssueById)
        )
    )
    .get("/", () => ({
      name: "pInk API",
      description: "Catálogo de quadrinhos - Bun + Elysia Backend",
      version: "1.1.0",
      endpoints: {
        health: "/health",
        comics: "/api/comics",
        issues: "/api/issues",
      },
    }))
    .onError(({ code, error, set }) => {
      console.error(`❌ Error (${code}):`, error);

      if (code === "NOT_FOUND") {
        set.status = 404;
        return {
          success: false,
          message: "Not Found",
        };
      }

      set.status = 500;
      return {
        success: false,
        message: (error as any).message || "Internal server error",
      };
    })
    .listen(PORT);

  console.log(`🚀 pInk server running on http://localhost:${PORT}`);
}

start().catch((err) => {
  console.error("❌ Failed to start server:", err);
  process.exit(1);
});
