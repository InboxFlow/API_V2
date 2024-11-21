import { vitePlugin as remix } from "@remix-run/dev";
import { config } from "dotenv";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import wyw from "@wyw-in-js/vite";

config({ path: ".env" });

export default defineConfig({
  plugins: [
    wyw(),
    remix({
      appDirectory: "./src",
      future: {
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true,
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
