import { SERVER_PORT } from "@home/core/constants/ports";
import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Hello client!"));

export default {
  port: SERVER_PORT,
  fetch: app.fetch,
};
