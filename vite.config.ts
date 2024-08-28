import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ["src/components", "src/index.ts", "themes.ts"] }),
  ],
  build: {
    lib: {
      entry: "src/index.ts", // Asegúrate de que este archivo exporte todos tus componentes
      name: "arche-studio-ui",
      fileName: (format: string) => `arche-studio-ui.${format}.js`,
    },
    rollupOptions: {
      // Asegúrate de externalizar las dependencias que no deban incluirse en tu paquete final
      external: ["react", "react-dom"],
      output: {
        // Proporciona nombres de globals aquí para las dependencias externas
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
