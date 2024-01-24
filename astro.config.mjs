import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./plugins/remark-modified-time.mjs";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    shikiConfig: {
      experimentalThemes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
  },
  integrations: [tailwind(), mdx()],
  adapter: netlify(),
});
