<script setup>
import toolIconVue from '../icon/tool-icon.vue'
</script>
<template>
  <div class="function-btn">
    <toolIconVue />
    <div class="function-bar"></div>
  </div>
</template>
<style scoped>
.function-btn {
  position: fixed;
  width: 3rem;
  height: 3rem;
  left: 92%;
  top: 92%;
  text-align: center;
  background-color: var(--color-highlight-hard);
  line-height: 3.6rem;
  border-radius: 50%;
  color: white;
}
.function-bar {
  position: fixed;
  width: 12rem;
  height: 3rem;
  left: calc(92% - 12rem);
  top: 92%;
  background-color: white;
  transition: all 1s ease;
  transform: scaleX(0);
}
.function-btn:hover .function-bar {
  transform: scaleX(1);
}
</style>
