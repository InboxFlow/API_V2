import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { config } from "dotenv";
import { remixDevTools } from "remix-development-tools";
import { defineConfig } from "vite";

import wyw from "@wyw-in-js/vite";
import { denyImports } from "vite-env-only";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();
config({ path: ".env" });

export default defineConfig({
  plugins: [
    remixDevTools(),
    wyw(),
    remix({
      appDirectory: "./src",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    denyImports({ client: { specifiers: ["@arkyn/server", "@remix/node"] } }),
    tsconfigPaths(),
  ],
});
