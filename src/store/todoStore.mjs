import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todo = ref([]);
  const day = ref("ALL");

  function setTodo(time, content, day) {
    let date;
    if (day === "월") {
      date = new Date(
        2022,
        10,
        7,
        +time.split("").slice(0, 2).join(""),
        +time.split("").slice(3, 5).join(""),
        0
      );
    }
    todo.list.push({ date: date, content: content, day: day });
  }
  function setDay(dayOfWeek) {
    day.value = dayOfWeek;
  }
  function sortTodo() {
    const merge = (firstArray, secondArray) => {
      let firstArrayIndex = 0;
      let secondArrayIndex = 0;
      const tempArray = [];
      while (
        firstArrayIndex < firstArray.length &&
        secondArrayIndex < secondArray.length
      ) {
        if (
          firstArray[firstArrayIndex].date > secondArray[secondArrayIndex].date
        ) {
          tempArray.push(secondArray[secondArrayIndex]);
          secondArrayIndex++;
        } else if (
          firstArray[firstArrayIndex].date < secondArray[secondArrayIndex].date
        ) {
          tempArray.push(firstArray[firstArrayIndex]);
          firstArrayIndex++;
        }
        while (firstArrayIndex < firstArray.length) {
          tempArray.push(firstArray[firstArrayIndex]);
          firstArrayIndex++;
        }
        while (secondArrayIndex < secondArray.length) {
          tempArray.push(secondArray[secondArrayIndex]);
          secondArrayIndex++;
        }
        return tempArray;
      }
    };
    const mergeSort = (array) => {
      if (array.length <= 1) return array;
      let center = Math.floor(array.length / 2);
      let left = mergeSort(array.slice(0, center));
      let rigth = mergeSort(array.slice(center));
      return merge(left, rigth);
    };
    const temp = [...todo.list];
    console.log(todo.list);
  }
  function save() {
    console.log(todo.list);
  }
  return { todo, setTodo, day, setDay, sortTodo, save };
});
