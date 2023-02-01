import { resolve } from "path";
import { defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueScrollAnimator"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: { "vue": "Vue" },
        sourcemap: true
      }
    }
  },
  plugins: [Vue()],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@docs": resolve(__dirname, "docs")
    }
  }
});
