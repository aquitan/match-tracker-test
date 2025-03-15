/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    exclude: ["**/node_modules/**", "**/*.stories.{js,jsx,ts,tsx}"],
  },
});
