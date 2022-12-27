<script setup>
import { useTodoStore } from "../../store/todoStore.mjs";
import trashcanIconVue from "../icon/trashcan-icon.vue";
import pencilIconVue from "../icon/pencil-icon.vue";
const todoStore = useTodoStore();
const emit = defineEmits(["deleteHandler", "editHandler"]);
const props = defineProps(["time", "content", "id"]);

const daytime = props.time.slice(0, 2);
const daytimeFlow = 12 > +daytime > 0 ? "오전" : "오후";
</script>

<template>
  <div class="todoitem">
    <span v-if="daytimeFlow === '오전'">{{ daytimeFlow }}</span>
    <span v-if="daytimeFlow === '오후'">{{ daytimeFlow }}</span>
    <time>
      &nbsp;{{ props.time }}
    </time>
    <div class="todoitem-content">{{ props.content }}</div>
    <div
      class="todoitem__function__icon"
      v-if="todoStore.pageMode === 'delete'"
      @click="emit('deleteHandler', props.id)"
    >
      <trashcanIconVue />
    </div>
    <div
      class="todoitem__function__icon"
      v-if="todoStore.pageMode === 'edit'"
      @click="emit('editHandler', props.id)"
    >
      <pencilIconVue />
    </div>
    <div v-if="todoStore.pageMode === 'normal'"></div>
  </div>
</template>

<style scoped>
.todoitem {
  text-align: center;
  z-index: 2;
  margin: 0 auto;
  margin-top: 1.3rem;
  width: 85%;
  height: 3.6rem;
  border-radius: 1rem;
  background-color: var(--color-white);
}
@media (min-width: 46rem) {
  .todoitem {
    margin-left: 4.8rem;
  }
}

.todoitem-content {
  margin: 0.35rem 0.35rem;
}
.todoitem__function__icon {
  z-index: 3;
  position: relative;
  top: -3.6rem;
  background-color: rgba(33, 33, 33, 0.8);
  height: 3.6rem;
  width: auto;
  line-height: 4rem;
  border-radius: 1rem;
  transition: all 500ms ease;
  color: rgb(220, 220, 220);
  cursor: pointer;
}
.todoitem__function__icon:hover {
  background-color: rgba(33, 33, 33, 0.15);
  color: transparent;
}
</style>
