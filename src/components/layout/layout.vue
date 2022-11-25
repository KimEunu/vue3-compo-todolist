<script setup>
import headerVue from './header.vue'
import todoVue from '../todolist/todo.vue'
import functionbuttonVue from '../ui/functionbutton.vue'
</script>

<template>
  <headerVue />
  <main id="main_content">
    <todoVue />
    <functionbuttonVue />
  </main>

  <footer></footer>
</template>

<style scoped>
#main_content {
  padding: 1rem;
  padding-left: 4rem;
  padding-bottom: 4rem;
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  touch-action: none;
}
@media (max-width: 46rem) {
  #main_content {
    padding: 2rem 1rem;
    padding-bottom: 5rem;
    width: calc(100vw - 2rem);
    height: calc(100vh - 7rem);
  }
}
</style>
