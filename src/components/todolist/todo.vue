<script setup>
import addlistVue from "../todolist/addlist.vue";
import { reactive, onMounted } from "vue";
import TodoitemVue from "./todoitem.vue";
import { useTodoStore } from "../../store/todoStore.mjs";

const todoStore = useTodoStore();
const error = reactive({ inputEmpty: false });

const formSubmitHandler = (time, body) => {
  if (!time || !body) {
    error.inputEmpty = true;
    setTimeout(() => {
      error.inputEmpty = false;
    }, 750);
  } else {
    todoStore.setTodo(time, body);
  }
};

const deleteHandler = (id) => {
  todoStore.deleteTodos(id);
};
onMounted(() => {
  todoStore.getAlltodos();
});
</script>
<template>
  <addlistVue
    @form-submit-handler="formSubmitHandler"
    :inputerror="error.inputEmpty"
  />
  <section>
    <div v-for="(item, index) in todoStore.todo" :key="index">
      <TodoitemVue
        :time="item.time"
        :content="item.text"
        :id="item.id"
        @delete-Handler="deleteHandler"
      />
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
