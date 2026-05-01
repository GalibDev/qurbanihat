import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  database: new Database("auth.db"),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    changeEmail: {
      enabled: false,
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },

  trustedOrigins: [
    "http://localhost:5173",
    "https://qurbanihat-six.vercel.app",
    process.env.CLIENT_URL || "",
  ],

  defaultCookieAttributes: {
    sameSite: "none",
    secure: true,
    httpOnly: true,
  },

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
});