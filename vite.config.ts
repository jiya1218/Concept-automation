import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": "{}",
    "global": "window",
  },
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
});
