import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import windi from "vite-plugin-windicss";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), windi()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: { host: "0.0.0.0", port: 3000 },
})
