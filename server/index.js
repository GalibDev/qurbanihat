import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL || "",
    ],
    credentials: true,
  })
);

app.all("/api/auth/*", toNodeHandler(auth));

app.get("/", (req, res) => {
  res.send("QurbaniHat Better Auth server is running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});