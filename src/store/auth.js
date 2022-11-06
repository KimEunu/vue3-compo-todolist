import { reactive } from "vue";

export const auth = reactive({
  isLogin: false,
  loginLogout() {
    this.isLogin = !this.isLogin;
  },
});
