<script setup>
import { auth } from '../../store/auth'
import LockIcon from '../icon/lock-icon.vue'
import UnlockIcon from '../icon/unlock-icon.vue'
</script>
<template>
  <div :class="auth.isLogin ? 'logout' : 'login'" @click="auth.loginLogout()">
    <LockIcon v-if="auth.isLogin" />
    <UnlockIcon v-else />
  </div>
</template>

<style scoped>
.login {
  color: black;
  width: 2.75rem;
  height: 2.75rem;
  line-height: 3.2rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  transition: all 300ms ease-in-out;
}
.logout {
  color: white;
  width: 2.75rem;
  height: 2.75rem;
  line-height: 3.2rem;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5);
  transition: all 300ms ease-in-out;
}

.login:active,
.logout:active {
  transform: scale(0.9);
}
@media (max-width: 46rem) {
  .login {
    margin: 0;
    margin-right: 1rem;
    align-self: center;
  }
  .logout {
    margin: 0;
    margin-right: 1rem;
    align-self: center;
  }
}
</style>
