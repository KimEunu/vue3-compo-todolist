<script setup>
const props = defineProps(['time', 'content', 'day'])
const dayTime = props.time.split('').slice(0, 2).join('')
</script>

<template>
  <div class="todoitem">
    <span class="day">{{ props.day }}요일</span>
    <span v-if="12 > dayTime > 0">오전</span>
    <span v-else>오후</span>
    <time>
      {{ props.time }}
    </time>
    <div class="todoitem-content">{{ props.content }}</div>
  </div>
</template>

<style scoped>
.todoitem {
  text-align: center;
  margin: 0 auto;
  margin-top: 1rem;
  width: 95%;
  height: auto;
  border-radius: 1rem;
  background-color: var(--color-white);
  padding: 2px 0;
}
@media (min-width: 46rem) {
  .todoitem {
    margin-left: 1.8rem;
  }
}
.todoitem span {
  margin-right: 0.35rem;
}
.todoitem-content {
  margin: 0.35rem 0.35rem;
}
</style>
