import { resolve } from "path";
import { defineConfig } from "vitepress";

const REPO_HOME = "https://github.com/Byloth/vue-scroll-animator";

export default defineConfig({
  title: "Vue Scroll Animator",
  description: "A simple but fast & powerful library to animate HTML elements while scrolling pages.",

  base: "/vue-scroll-animator/",

  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Configs", link: "/configs/" },
      {
        text: "3.0.0-rc.2",
        items: [{ text: "Releases", link: `${REPO_HOME}/releases` }]
      }
    ],
    sidebar: [{
      text: "Introduction",
      collapsible: true,
      items: [
        { text: "Getting started", link: "/guide/getting-started" }
      ]
    }],
    socialLinks: [{ icon: "github", link: REPO_HOME }]
  },

  vite: {
    resolve: {
      alias: {
        "@src": resolve(__dirname, "../../src"),
        "@docs": resolve(__dirname, "..")
      }
    }
  }
});
