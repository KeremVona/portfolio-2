import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: [
      "react-pdf/dist/esm/Page/AnnotationLayer.css",
      "react-pdf/dist/esm/Page/TextLayer.css",
    ],
  },
});
