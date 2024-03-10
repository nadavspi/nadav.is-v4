import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), react()],
  redirects: {
    '/photography': { 
      destination: '/photography/wyoming',
      status: 302,
    }
  },
});
