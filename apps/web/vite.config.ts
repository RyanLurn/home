import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { WEB_CLIENT_PORT } from "@home/core/constants/ports";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    // Make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      autoCodeSplitting: true,
      quoteStyle: "double",
      semicolons: true,
      target: "react",
    }),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: WEB_CLIENT_PORT,
  },
});
