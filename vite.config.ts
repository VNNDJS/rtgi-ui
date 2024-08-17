import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { env } from "process"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": env,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
