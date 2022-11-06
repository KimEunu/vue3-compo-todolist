<script setup>
import headerVue from './header.vue'
</script>

<template>
  <headerVue />
  <main id="main_content"></main>

  <footer></footer>
</template>

<style scoped>
#main_content {
  width: 100vw;
  height: 100vh;
  background: var(--color-main-orange-white);

}
</style>
