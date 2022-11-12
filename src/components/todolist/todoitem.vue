<script setup>
const props = defineProps(['time', 'content'])
</script>

<template>
  <div>
    <time>
      {{ props.time }}
    </time>
    <div>{{ props.content }}</div>
  </div>
</template>

<style scoped>
</style>
