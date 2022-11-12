import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLogin = ref(false);
  function loginLogout() {
    isLogin.value = !isLogin.value;
  }
  return { isLogin, loginLogout };
});
