import { fileURLToPath, URL } from "url";
import { defineConfig } from "astro/config";

import windi from "astro-windicss";

// https://astro.build/config
export default defineConfig({
  integrations: [windi()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  server: { host: "0.0.0.0", port: 3000 },
});
