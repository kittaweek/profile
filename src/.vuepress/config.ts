const { description } = require('../../package')
import { defaultTheme } from "@vuepress/theme-default";
import { iconifyPlugin } from 'vuepress-plugin-iconify'

export default {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Kittawee Kongpan (Post)",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Software Engineer | Data Engineer | Data Science",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "author", content: "Kittawee Kongpan" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: defaultTheme({
    contributors: false,
    navbar: [
      {
        text: "About",
        link: "/about/",
      },
      {
        text: "Career",
        link: "/career/",
      },
      {
        text: "Portfolio",
        link: "/portfolio/",
      },
      {
        text: "Archive",
        link: "/archive/",
      },
    ],
  }),
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    iconifyPlugin()
  ],
};
