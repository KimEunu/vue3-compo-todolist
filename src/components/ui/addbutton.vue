<script setup lang="ts">
const emit = defineEmits<{
  (e: 'formSubmitHandler'): void
}>()
</script>

<template>
  <button type="submit" @click.prevent="emit('formSubmitHandler')">
    +
  </button>
</template>

<style scoped>
button {
  font: inherit;
  height: 60%;
  width: 3rem;
  border: none;
  outline: 1px solid white;
  line-height: 1.72rem;
  border-radius: 0 0.25rem 0.25rem 0;
  background-color: white;
  color: rgb(0, 0, 0);
  transition: all 200ms ease;
}

button:hover {
  color: white;
  background-color: var(--color-main-orange-softer);
}
</style>
