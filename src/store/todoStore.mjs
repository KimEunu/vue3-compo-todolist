import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todo = ref([]);
  const pageMode = ref("normal");
  async function setTodo(time, content, id) {
    let response;
    try {
      response = await fetch("https://xn--3h3bz1pi5a.me/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time: time, text: content }),
      });
    } catch (error) {
      throw error;
    }
    if (!response.ok) {
      console.log("Response Not Ok!");
      return;
    } else {
      const responseData = await response.json();
      todo.value.push({ time: time, text: content, id: responseData.savedId });
    }
  }
  async function getAlltodos() {
    try {
      const response = await fetch("https://xn--3h3bz1pi5a.me/api");
      const responseData = await response.json();
      todo.value = [...responseData.todos];
    } catch (error) {
      throw error;
    }
  }

  async function deleteTodos(id) {
    let response;
    try {
      response = await fetch("https://xn--3h3bz1pi5a.me/api" + id, {
        method: "DELETE",
      });
    } catch (error) {
      throw error;
    }
    if (!response.ok) {
      console.log("Response Not Ok!");
    } else {
      const temp = todo.value.filter((todo) => {
        return todo.id !== id;
      });
      todo.value = [...temp];
    }
  }
  return { todo, pageMode, setTodo, getAlltodos, deleteTodos };
});
