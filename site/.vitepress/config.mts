import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kittawee Kongpan (Post)",
  description: "Software Engineer | Data Engineer | Data Science",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Kittawee Kongpan | © 2023-present | Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a>'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Career', link: '/career/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Archive', link: '/archive/' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kittaweek' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kittawee-kongpan-360887249/' },
      // { icon: 'facebook', link: 'https://www.facebook.com/P0sTMaN' },
      // { icon: 'instagram', link: 'https://www.instagram.com/p0st_man/' },
      
    ]
  }
})
