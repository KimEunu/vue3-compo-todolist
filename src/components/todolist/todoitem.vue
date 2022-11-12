<script setup>
const props = defineProps(['time', 'content'])
</script>

<template>
  <div>{{ props.time }}</div>
  <div>{{ props.content }}</div>
</template>
