import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    open: true,

    // проксируем запросы фронта к локальному API-серверу
    proxy: {
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
      },
      "/health": {
        target: "http://localhost:8787",
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: "dist",
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});