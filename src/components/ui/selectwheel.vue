<script setup>
import { useTodoStore } from "../../store/todoStore.mjs";
import arrowcounterIconVue from "../icon/arrowcounter-icon.vue";
import trashcanIconVue from "../icon/trashcan-icon.vue";
import pencilIconVue from "../icon/pencil-icon.vue";
const todoStore = useTodoStore();
const props = defineProps(["isGrabbing"]);
const emit = defineEmits(["classOut"]);
const selected = (event) => {
  const mode = event.currentTarget.id;
  if (mode === "normal") {
    todoStore.refresh();
  } else {
    todoStore.pageMode = mode;
  }
  emit("classOut");
};
const canSelected = (event) => {
  event.preventDefault();
  todoStore.pageMode = "normal";
  // event.target.style.
};
const leaveSelected = (event) => {
  event.preventDefault();
  // event.target.style.
};
// const weekday = '월화수목금토일'
// const week = [...weekday.split('')]
</script>
<template>
  <div v-if="props.isGrabbing" class="select_button_wheel">
    <!-- <h2
      v-for="(day, index) in icons"
      :key="index"
      @drop="selected"
      @dragover="canSelected"
      @dragleave="leaveSelected"
      @click="selected"
    >
      {{ day }}
    </h2> -->
    <h2
      id="normal"
      @drop="selected"
      @dragover="canSelected"
      @dragleave="leaveSelected"
      @click="selected"
    >
      <arrowcounterIconVue />
    </h2>
    <h2
      id="edit"
      @drop="selected"
      @dragover="canSelected"
      @dragleave="leaveSelected"
      @click="selected"
    >
      <pencilIconVue />
    </h2>
    <h2
      id="delete"
      @drop="selected"
      @dragover="canSelected"
      @dragleave="leaveSelected"
      @click="selected"
    >
      <trashcanIconVue />
    </h2>
  </div>
</template>
<style scoped>
.select_button_wheel {
  z-index: 4;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: calc(50% - 8rem);
  left: -8rem;
  width: 16rem;
  height: 16rem;
  background: var(--color-white);
  user-select: none;
  border-radius: 0 50% 50% 0;
  animation: wheel 500ms forwards;
  box-shadow: 0 0 10px 0px var(--color-shadow-hard);
}

.select_button_wheel h2 {
  font-size: 1.3rem;
  user-select: none;
  position: relative;
  top: calc(50% - 8rem);
  z-index: 2;
  color: var(--color-main-bri);
  text-align: center;
  margin: 0 auto;
  height: 1.3rem;
  width: 1.3rem;
  line-height: 1.3rem;
  cursor: pointer;
}
.select_button_wheel h2:hover {
  text-shadow: 0 0 px var(--color-shadow-soft);
}
.select_button_wheel h2:first-child,
.select_button_wheel h2:last-child {
  left: 4rem;
}
.select_button_wheel h2:nth-child(2) {
  left: 6rem;
}
@keyframes wheel {
  0% {
    visibility: hidden;
    transform: scale(0);
  }
  100% {
    visibility: visible;
    transform: scale(1);
  }
}
@keyframes sWheel {
  0% {
    visibility: hidden;
    transform: scale(0);
  }
  100% {
    visibility: visible;
    transform: scaleX(-1) scaleY(1) rotate(90deg);
  }
}
@media (max-width: 46rem) {
  .select_button_wheel {
    top: -8rem;
    left: calc(50% - 8rem);
    transform: rotate(90deg);
    animation: sWheel 500ms forwards;
  }

  .select_button_wheel h2 {
    transform: scaleY(-1) rotate(-90deg);
  }
}
</style>
