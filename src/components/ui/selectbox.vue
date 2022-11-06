<script setup>
import { reactive, watchEffect } from 'vue'
const selectButton = reactive({ isGrabbing: false })
const classOut = () => {
  setTimeout(() => {
    selectButton.isGrabbing = false
  }, 99)
}
const selected = (event) => {
  console.log(event.target.textContent)
}
const canSelected = (event) => {
  event.preventDefault()
  event.target.style.color = 'red'
}
const leaveSelected = (event) => {
  event.preventDefault()
  event.target.style.color = 'black'
}
const week = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
</script>
<template>
  <div class="select_button_background">
    <div
      class="select_button_foreground"
      draggable="true"
      @dragstart="
        () => {
          selectButton.isGrabbing = true
        }
      "
      @dragend="classOut"
    />
    <div v-if="selectButton.isGrabbing" class="select_button_wheel">
      <h2
        v-for="(day, index) in week"
        :key="index"
        @drop="selected"
        @dragover="canSelected"
        @dragleave="leaveSelected"
      >
        {{ day }}
      </h2>
    </div>
  </div>
</template>
<style scoped>
.select_button_background {
  position: absolute;
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  border-radius: 50%;
  background-color: var(--color-main-orange-softer);
}
.select_button_foreground {
  box-sizing: border-box;
  background: conic-gradient(
    var(--color-main-orange-hard),
    var(--color-main-orange-soft),
    var(--color-main-orange-harder),
    var(--color-main-orange-soft),
    var(--color-main-orange-hard)
  );
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  border-radius: 50%;
  box-shadow: 0 0 2px var(--color-shadow-hard);
  cursor: grab;
}

.select_button_foreground:focus {
  cursor: grabbing;
}
.select_button_wheel {
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: calc(50% - 12rem);
  left: -13rem;
  width: 24rem;
  height: 24rem;
  background: white;
  border-radius: 0 50% 50% 0;
  animation: wheel 500ms forwards;
  padding: 0.25rem 0;
}

.select_button_wheel h2 {
  position: relative;
  top: calc(50% - 12rem);
  z-index: 2;
  color: black;
  text-align: center;
  margin: 0 auto;
  height: 3rem;
  width: 14rem;
  line-height: 3rem;
}
.select_button_wheel h2:hover {
  color: aqua;
}
.select_button_wheel h2:first-child,
.select_button_wheel h2:last-child {
  left: 3.2rem;
}
.select_button_wheel h2:nth-child(2),
.select_button_wheel h2:nth-child(6) {
  left: 5.6rem;
}
.select_button_wheel h2:nth-child(3),
.select_button_wheel h2:nth-child(5) {
  left: 7.6rem;
}
.select_button_wheel h2:nth-child(4) {
  left: 8.2rem;
}
@keyframes wheel {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>
