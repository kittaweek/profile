import { defineConfig } from 'vitepress'
import tabsPlugin from '@red-asuka/vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devsiam",
  description: "Kittawee Kongpan — Software / Data Engineer. Essays, work, and a public knowledge base.",

  cleanUrls: true,

  head: [
    ['script', { defer: '', 'data-domain': 'devsiam.com', src: 'https://plausible.io/js/script.js' }]
  ],

  sitemap: {
    hostname: 'https://devsiam.com'
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    th: {
      label: 'ไทย',
      lang: 'th',
      link: '/th/',
      themeConfig: {
        nav: [
          { text: 'หน้าแรก', link: '/th/' },
          { text: 'เกี่ยวกับ', link: '/th/about/' },
          { text: 'ผลงาน', link: '/th/portfolio/' },
          { text: 'บทความ', link: '/th/articles/' }
        ]
      }
    }
  },

  markdown: {
    config: (md) => {
      tabsPlugin(md)
    },
  },

  themeConfig: {
    logo: '/assets/logo.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Articles', link: '/articles/' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Kittawee Kongpan | © 2023-present | Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kittaweek' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kittawee-kongpan-360887249/' }
    ]
  }
})
