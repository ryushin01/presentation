import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

export default defineConfig({
  base: "/presentation",
  plugins: [svgr(), react()],
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@modules", replacement: "/src/modules" },
      { find: "@components", replacement: "/src/components" },
      { find: "@data", replacement: "/src/data" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@images", replacement: "/src/assets/images" },
    ],
  },
});
