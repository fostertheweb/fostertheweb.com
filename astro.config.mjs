import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./plugins/remark-modified-time.mjs";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    shikiConfig: {
      theme: "dark-plus",
      wrap: true,
    },
  },
  integrations: [tailwind(), mdx()],
  adapter: netlify(),
});
