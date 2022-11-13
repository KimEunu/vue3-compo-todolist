<script setup>
import addlistVue from '../todolist/addlist.vue'
import { reactive } from 'vue'
import TodoitemVue from './todoitem.vue'

const error = reactive({ inputEmpty: false })
const todo = reactive([])
const formSubmitHandler = (time, body) => {
  if (!time || !body) {
    error.inputEmpty = true
    setTimeout(() => {
      error.inputEmpty = false
    }, 750)
  } else {
    todo.push({ time: time, content: body })
  }
}
</script>
<template>
  <addlistVue
    @form-submit-handler="formSubmitHandler"
    :inputerror="error.inputEmpty"
  />
  <section>
    <div v-for="(item, index) in todo" :key="index">
      <TodoitemVue :time="item.time" :content="item.content" />
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
