<script setup>
import addbuttonVue from "../ui/addbutton.vue";
import { reactive, watchEffect } from "vue";

const emits = defineEmits(["formSubmitHandler"]);
const props = defineProps(["inputerror", "editTime", "editText"]);
const userInputReactive = reactive({ time: "", text: "" });
watchEffect(() => {
  userInputReactive.time = props.editTime;
  userInputReactive.text = props.editText;
});
function formSubmitHandler() {
  emits("formSubmitHandler", userInputReactive.time, userInputReactive.text);
  userInputReactive.time = "";
  userInputReactive.text = "";
}
</script>

<template>
  <form
    id="add-form"
    :class="[props.inputerror ? 'error' : '']"
    @submit.prevent="formSubmitHandler"
  >
    <input
      class="user-input-time"
      type="time"
      required
      v-model="userInputReactive.time"
    />
    <input
      class="user-input"
      placeholder="목록 작성하기"
      required
      v-model="userInputReactive.text"
    />
    <addbuttonVue />
  </form>
</template>

<style scoped>
#add-form {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2rem;
  width: 95%;
  height: 3rem;
  background-color: var(--color-white);
  box-shadow: 3px 3px 2px var(--color-shadow-hard);
  padding: 0 0.35rem;
  align-items: center;
  border-radius: 0.6rem;
  padding-right: 0;
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
  outline: none;
  min-width: 7rem;
  background-color: var(--color-white);
  border-radius: 0.35rem 0 0 0.35rem;
}
.user-input {
  border: none;
  outline: none;
  background-color: var(--color-white);
  width: 100%;
  height: 60%;
}
</style>
