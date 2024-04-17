import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pokemon",
  build: {
    outDir: "docs",
  },
  plugins: [react()],
  resolve: {
    alias: {
      api: resolve(__dirname, "./src/api/"),
      assets: resolve(__dirname, "./src/assets/"),
      components: resolve(__dirname, "./src/components/"),
      consts: resolve(__dirname, "./src/consts/"),
      store: resolve(__dirname, "./src/store/"),
      "~styles": resolve(__dirname, "./src/styles/"),
    },
    extensions: [".scss", ".js", ".jsx", ".ts", ".tsx"],
  },
});
