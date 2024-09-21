import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://happyroll.netlify.app", // TODO: Set to domain when live.
  integrations: [mdx(), sitemap()],
});
