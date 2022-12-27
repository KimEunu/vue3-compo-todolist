<script setup>
import addlistVue from "../todolist/addlist.vue";
import { reactive, onMounted } from "vue";
import TodoitemVue from "./todoitem.vue";
import { useTodoStore } from "../../store/todoStore.mjs";
import Loadingspinner from "../ui/loadingspinner.vue";

const todoStore = useTodoStore();
const error = reactive({ inputEmpty: false });
const editTemp = reactive({ text: "", time: "", id: "" });

const formSubmitHandler = (time, body) => {
  editTemp.text = body;
  editTemp.time = time;
  if (!time || !body) {
    error.inputEmpty = true;
    setTimeout(() => {
      error.inputEmpty = false;
    }, 750);
    return;
  }
  todoStore.setTodo(editTemp.time, editTemp.text, editTemp.id);
  editTemp.id = "";
  editTemp.time = "";
  editTemp.text = "";
  return;
};
const editHandler = (id) => {
  const todoTemp = todoStore.todo.find((todo) => {
    return todo.id === id;
  });
  editTemp.text = todoTemp.text;
  editTemp.time = todoTemp.time;
  editTemp.id = id;
  if (!editTemp.time || !editTemp.text) {
    error.inputEmpty = true;
    setTimeout(() => {
      error.inputEmpty = false;
    }, 750);
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
    :editTime="editTemp.time"
    :editText="editTemp.text"
  />
  <section>
    <div
      v-if="!todoStore.loading"
      v-for="item in todoStore.todo"
      :key="item.id"
    >
      <TodoitemVue
        :time="item.time"
        :content="item.text"
        :id="item.id"
        @edit-Handler="editHandler"
        @delete-Handler="deleteHandler"
      />
    </div>
    <div v-if="todoStore.loading"><Loadingspinner /></div>
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
