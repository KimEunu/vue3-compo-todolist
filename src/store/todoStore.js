import { defineStore } from "pinia";
import { ref } from "vue";
export const useTodoStore = defineStore("todo", () => {
  const day = ref("ALL");
  function setDay(dayOfWeek) {
    day.value = dayOfWeek;
  }
  return { day, setDay };
});
