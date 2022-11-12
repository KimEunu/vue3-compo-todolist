<script setup>
import headerVue from './header.vue'
import todoVue from '../todolist/todo.vue'
</script>

<template>
  <headerVue />
  <main id="main_content">
    <todoVue />
  </main>

  <footer></footer>
</template>

<style scoped>
#main_content {
  padding: 4rem;
  width: calc(100vw - 8rem);
  height: calc(100vh - 8rem);
  background: var(--color-main-orange-white);
  touch-action: none;
}
</style>
