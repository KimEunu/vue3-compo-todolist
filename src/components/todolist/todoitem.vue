<script setup>
import { useTodoStore } from "../../store/todoStore.mjs";
import trashcanIconVue from "../icon/trashcan-icon.vue";
import pencilIconVue from "../icon/pencil-icon.vue";
const todoStore = useTodoStore();
const emit = defineEmits(["deleteHandler"]);
const props = defineProps(["time", "content","id"]);
// const dayTime = props.date.getHours();
// const hour =
//   props.date.getHours() > 12
//     ? props.date.getHours() - 12
//     : props.date.getHours();
// const minutes = props.date.getMinutes();

const daytime = props.time.slice(0, 2);
const daytimeFlow = 13 > +daytime > 0 ? true : false;
</script>

<template>
  <div class="todoitem" v-if="todoStore.pageMode === 'normal'">
    <span v-if="daytimeFlow">오전</span>
    <span v-else>오후</span>
    <time>
      {{ props.time }}
    </time>
    <div class="todoitem-content">{{ props.content }}</div>
  </div>
  <div class="todoitem" v-else-if="todoStore.pageMode === 'delete'">
    <span v-if="daytimeFlow">오전</span>
    <span v-else>오후</span>
    <time>
      {{ props.time }}
    </time>
    <div class="todoitem-content">{{ props.content }}</div>
    <span @click="emit('deleteHandler', props.id)"><trashcanIconVue /></span>
  </div>
  <div class="todoitem" v-else-if="todoStore.pageMode === 'edit'">
    <span v-if="daytimeFlow">오전</span>
    <span v-else>오후</span>
    <time>
      {{ props.time }}
    </time>
    <div class="todoitem-content">{{ props.content }}</div>
    <span><pencilIconVue /></span>
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
