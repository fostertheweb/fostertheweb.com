import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import fs from "node:fs";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkModifiedTime } from "./plugins/remark-modified-time.mjs";
import netlify from "@astrojs/netlify";
import preact from "@astrojs/preact";
const gruvboxDark = JSON.parse(fs.readFileSync("gruvbox-dark.json", "utf8"));


// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  markdown: {
    rehypePlugins: [rehypePrettyCode],
    remarkPlugins: [remarkModifiedTime],
    shikiConfig: {
      theme: gruvboxDark,
      wrap: true
    }
  },
  integrations: [tailwind(), mdx(), preact()],
  adapter: netlify()
});