<script setup lang="ts">
import addbuttonVue from '../ui/addbutton.vue'
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'formSubmitHandler', time: string, body: string): void
}>()
const props = defineProps<{ inputerror: boolean }>()
function formSubmitHandler() {
  emit(
    'formSubmitHandler',
    userInputTime.value.value,
    userInputBody.value.value,
  )
}

const userInputTime = ref()
const userInputBody = ref()
</script>

<template>
  <form id="add-form" :class="[props.inputerror ? 'error' : '']">
    <input class="user-input-time" type="time" required ref="userInputTime" />
    <input
      class="user-input"
      placeholder="목록 작성하기"
      required
      ref="userInputBody"
    />
    <addbuttonVue @form-submit-handler="formSubmitHandler" />
  </form>
</template>

<style scoped>
#add-form {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  background-color: white;
  box-shadow: 3px 3px 2px var(--color-shadow-hard);
  padding: 0 0.35rem;
  align-items: center;
  border-radius: 0.6rem;
}
@media (min-width: 46rem) {
  #add-form {
    margin-left: 1.6rem;
    margin-top: 0;
  }
}
#add-form > input {
  height: 60%;
}
#add-form > textarea {
  resize: none;
  height: 60%;
}
.error {
  animation: shake 750ms ease-in-out both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(0, -1px, 0);
  }
  20%,
  80% {
    transform: translate3d(0, 2px, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(0, -4px, 0);
  }
  40%,
  60% {
    transform: translate3d(0, 4px, 0);
  }
}
.user-input-time {
  height: 60%;
  border: none;
  border-top: 1px;
  outline: 1px solid white;
  min-width: 7rem;
  border-radius: 0.35rem 0 0 0.35rem;
}
.user-input {
  border: none;
  outline: none;
  width: 100%;
  height: 60%;
}
</style>
