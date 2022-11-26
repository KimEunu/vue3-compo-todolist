<script setup>
const props = defineProps(["date", "content", "day"]);
const dayTime = props.date.getHours();
const hour =
  props.date.getHours() > 12
    ? props.date.getHours() - 12
    : props.date.getHours();
const minutes = props.date.getMinutes();
</script>

<template>
  <div class="todoitem">
    <span class="day">{{ props.day }}요일</span>
    <span v-if="12 > dayTime > 0">오전</span>
    <span v-else>오후</span>
    <time>
      {{ props.time }}{{ hour }}시 {{minutes}}분
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
