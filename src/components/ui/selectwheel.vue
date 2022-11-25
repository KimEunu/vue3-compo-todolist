<script setup>
import { useTodoStore } from '../../store/todoStore'
const todo = useTodoStore()
const props = defineProps(['isGrabbing'])
const emit = defineEmits(['classOut'])
const selected = (event) => {
  todo.setDay(event.target.textContent)
  emit('classOut')
}
const canSelected = (event) => {
  event.preventDefault()
  // event.target.style.
}
const leaveSelected = (event) => {
  event.preventDefault()
  // event.target.style.
}
const weekday = '월화수목금토일'
const week = [...weekday.split('')]
</script>
<template>
  <div v-if="props.isGrabbing" class="select_button_wheel">
    <h2
      v-for="(day, index) in week"
      :key="index"
      @drop="selected"
      @dragover="canSelected"
      @dragleave="leaveSelected"
      @click="selected"
    >
      {{ day }}
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
  width: 12rem;
  line-height: 1.3rem;
}
.select_button_wheel h2:hover {
  text-shadow: 0 0 px var(--color-shadow-soft);
}
.select_button_wheel h2:first-child,
.select_button_wheel h2:last-child {
  left: 1.8rem;
}
.select_button_wheel h2:nth-child(2),
.select_button_wheel h2:nth-child(6) {
  left: 4rem;
}
.select_button_wheel h2:nth-child(3),
.select_button_wheel h2:nth-child(5) {
  left: 5rem;
}
.select_button_wheel h2:nth-child(4) {
  left: 5.4rem;
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
    transform: scaleY(-1) rotate(180deg);
  }
}
</style>
