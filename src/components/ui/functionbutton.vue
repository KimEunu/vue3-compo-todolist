<script setup>
import toolIconVue from "../icon/tool-icon.vue";
import filterIconVue from "../icon/filter-icon.vue";
import cloudUploadIconVue from "../icon/cloudupload-icon.vue";
import cloudDownloadIconVue from "../icon/clouddownload-icon.vue";
import { useTodoStore } from "../../store/todoStore.mjs";

const todoStore = useTodoStore();
</script>
<template>
  <div class="function-btn">
    <toolIconVue />
    <div class="function-bar">
      <div v-on:click="todoStore.sortTodo()">
        <filterIconVue />
      </div>
      <div v-on:click="todoStore.save()">
        <cloudUploadIconVue />
      </div>
      <div>
        <cloudDownloadIconVue />
      </div>
    </div>
  </div>
</template>
<style scoped>
.function-btn {
  position: fixed;
  z-index: 4;
  width: 3rem;
  height: 3rem;
  left: 90%;
  top: 92%;
  text-align: center;
  background-color: var(--color-highlight-hard);
  line-height: 3.6rem;
  border-radius: 50%;
  transition: all 1s ease;
  color: white;
}
.function-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: -1;
  width: 3rem;
  height: 8rem;
  top: calc((-18%) + (-11rem));
  background-color: var(--color-white);
  transition: all 1s ease;
  transform: scaleY(0);
  opacity: 0;
  border-radius: 0.35rem 0.35rem 50% 50%;
  transform-origin: 0% 100%;
  color: black;
}
.function-bar div {
  opacity: 0;
  transition: opacity 1s ease;
  height: 2.2rem;
}
.function-bar div:hover {
  color: var(--color-highlight-hard);
  cursor: pointer;
}
.function-btn:hover {
  border-radius: 0 0 50% 50%;
}
.function-btn:hover .function-bar {
  transform: scaleY(1);
  border-radius: 0.35rem 0.35rem 0 0;
  opacity: 1;
}
.function-btn:hover .function-bar div {
  opacity: 1;
}
@media (max-width: 46rem) {
  .function-btn {
    left: 85%;
  }
}
</style>
