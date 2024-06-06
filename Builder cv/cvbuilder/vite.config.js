import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Cvease",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example of manual chunking
          if (id.includes("node_modules")) {
            // Separate large dependencies into their own chunks
            return id.split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit as needed
  },
});
