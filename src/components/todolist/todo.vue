<script setup>
import addlistVue from "../todolist/addlist.vue";
import { reactive } from "vue";
import TodoitemVue from "./todoitem.vue";
import { useTodoStore } from "../../store/todoStore.mjs";

const todoStore = useTodoStore();
const error = reactive({ inputEmpty: false });

const formSubmitHandler = (time, body, weekday) => {
  if (!time || !body) {
    error.inputEmpty = true;
    setTimeout(() => {
      error.inputEmpty = false;
    }, 750);
  } else {
    todoStore.setTodo(time, body, weekday);
  }
};
</script>
<template>
  <addlistVue
    @form-submit-handler="formSubmitHandler"
    :inputerror="error.inputEmpty"
  />
  <section>
    <div v-for="(item, index) in todoStore.todo.list" :key="index">
      <TodoitemVue :date="item.date" :content="item.content" :day="item.day" />
    </div>
  </section>
</template>

<style scoped>
section {
  height: 95%;
  width: 100%;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
section::-webkit-scrollbar {
  display: none;
}
</style>
