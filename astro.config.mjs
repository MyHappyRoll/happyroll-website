import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://spec-design-monolith--happyroll.netlify.app/", // TODO: Set to domain when live.
  integrations: [mdx(), sitemap(), icon()],
});
