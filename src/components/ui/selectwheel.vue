<script setup>
const props = defineProps(['isGrabbing'])
const emit = defineEmits(['classOut'])
const selected = (event) => {
  console.log(event.target.textContent)
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
const week = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
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
  z-index: -1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: calc(50% - 12rem);
  left: -13.8rem;
  width: 24rem;
  height: 24rem;
  background: radial-gradient(
    var(--color-main-orange-softer),
    var(--color-main-orange-hard)
  );
  user-select: none;
  border-radius: 0 50% 50% 0;
  animation: wheel 500ms forwards;
  padding: 0.25rem 0;
  box-shadow: 0 0 10px 0px var(--color-shadow-hard);
}

.select_button_wheel h2 {
  user-select: none;
  position: relative;
  top: calc(50% - 12rem);
  z-index: 2;
  color: rgb(255, 235, 215);
  text-align: center;
  margin: 0 auto;
  height: 3rem;
  width: 14rem;
  line-height: 3rem;
}
.select_button_wheel h2:hover {
  text-shadow: 0 0 7px var(--color-shadow-soft);
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
    transform: scaleX(-0.8) scaleY(0.8) rotate(90deg);
  }
}
@media (max-width: 46rem) {
  .select_button_wheel {
    top: -13rem;
    left: calc(50% - 12rem);
    transform: rotate(90deg);
    animation: sWheel 500ms forwards;
  }

  .select_button_wheel h2 {
    transform: scaleY(-1) rotate(180deg);
  }
}
</style>
