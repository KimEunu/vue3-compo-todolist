<script setup lang="ts"></script>

<template>
  <button type="submit">+</button>
</template>

<style scoped>
button {
  font: inherit;
  height: 100%;
  width: 3rem;
  border: none;
  line-height: 1.72rem;
  border-radius: 0 0.25rem 0.25rem 0;
  background-color: var(--color-white);
  color: rgb(0, 0, 0);
  transition: all 200ms ease;
}

button:hover {
  color: white;
  background-color: var(--color-header-bg);
}
</style>
