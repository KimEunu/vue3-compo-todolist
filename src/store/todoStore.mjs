import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todo = ref([]);
  const updateReactive = reactive({ time: "", text: "", id: "" });
  const pageMode = ref("normal");
  const loading = ref(false);
  async function getAlltodos() {
    try {
      loading.value = true;
      const response = await fetch("https://xn--3h3bz1pi5a.me/api");
      const responseData = await response.json();
      todo.value = [...responseData.todos];
    } catch (error) {
      throw error;
    }
    loading.value = false;
  }
  async function setTodo(time, content, id) {
    let response;
    updateReactive.time = time;
    updateReactive.text = content;
    updateReactive.id = id;
    try {
      if (updateReactive.id) {
        response = await fetch("https://xn--3h3bz1pi5a.me/api" + id, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ time: time, text: content }),
        });
        if (!response.ok) {
          console.log("Response Not Ok!");
          return;
        }
        const updateIndex = todo.value.findIndex((todo) => {
          return todo.id === updateReactive.id;
        });
        todo.value[updateIndex].time = updateReactive.time;
        todo.value[updateIndex].content = updateReactive.text;
        getAlltodos();
        pageMode.value = "normal";
      }
      if ((updateReactive.id === "") | !id) {
        response = await fetch("https://xn--3h3bz1pi5a.me/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ time: time, text: content }),
        });
        if (!response.ok) {
          console.log("Response Not Ok!");
          return;
        }
        const responseData = await response.json();
        todo.value.push({
          time: time,
          text: content,
          id: responseData.savedId,
        });
      }
      updateReactive.time = "";
      updateReactive.text = "";
      updateReactive.id = "";
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
    updateReactive.time = "";
    updateReactive.text = "";
    updateReactive.id = "";
  }

  function refresh() {
    pageMode.value = "normal";
    getAlltodos();
    updateReactive.time = "";
    updateReactive.text = "";
    updateReactive.id = "";
  }
  return {
    todo,
    pageMode,
    setTodo,
    getAlltodos,
    deleteTodos,
    refresh,
    loading,
  };
});
