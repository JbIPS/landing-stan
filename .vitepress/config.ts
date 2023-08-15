import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "fr-FR",
  title: "Stan",
  description: "La solution digitale et souveraine de gestion de vos données.",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
});
