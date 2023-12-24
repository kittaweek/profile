<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">Kittawee Kongpan | © 2023-present | Powered by <a href="https://vuepress.vuejs.org">Vuepress</a></div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.footer {
    padding: 2.5rem;
    border-top: 1px solid var(--c-border);
    text-align: center;
    color: var(--c-text-lighter);
    transition: border-color var(--t-color);
}
</style>