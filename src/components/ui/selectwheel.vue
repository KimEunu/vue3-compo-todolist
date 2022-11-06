<script setup>
defineProps(['isGrabbing'])

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
  <div v-if="isGrabbing" class="select_button_wheel">
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
</template>
<style scoped>
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

@media (max-width: 46rem) {
  .select_button_wheel {
    transform: scaleX(-1) rotate(90deg);
  }

  .select_button_wheel h2 {
    transform: scaleY(-1) rotate(180deg);
  }
}
</style>
