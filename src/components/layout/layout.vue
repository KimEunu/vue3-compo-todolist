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
  padding: 1rem;
  padding-left: 4rem;
  width: calc(100vw - 5rem);
  height: calc(100vh - 2rem);

  touch-action: none;
}
@media (max-width: 46rem) {
  #main_content {
    padding: 2rem;
    width: calc(100vw - 4rem);
    height: calc(100vh - 4rem);

  }
}
</style>
