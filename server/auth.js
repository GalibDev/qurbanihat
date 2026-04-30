import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  database: new Database("auth.db"),

  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins: ["http://localhost:5173"],

  secret: "qurbanihat-super-secret-key",
  baseURL: "http://localhost:5000",
});