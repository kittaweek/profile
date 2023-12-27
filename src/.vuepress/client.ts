import { defineClientConfig } from '@vuepress/client'
import Layout from './theme/layouts/GlobalLayout.vue'

export default defineClientConfig({
  layouts: {
    Layout,
  },
})