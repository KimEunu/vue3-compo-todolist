<script setup>
import loginbutton from '../ui/loginbutton.vue'
import selectbox from '../ui/selectbox.vue'
</script>

<template>
  <header id="main_header">
    <h1 class="main_header_logo">
      W
    </h1>
    <nav>
      <selectbox />
    </nav>
    <loginbutton />
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@300&display=swap');
#main_header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding: 0.5rem 0.15rem;
  width: 3.4rem;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    var(--color-main-orange-harder),
    var(--color-main-orange),
    var(--color-main-orange-harder)
  );
  box-shadow: 0.25rem 0rem 1rem var(--color-shadow-hard);
}
.main_header_logo {
  text-align: center;
  margin: 0rem auto;
  width: 3rem;
  height: 3rem;
  color: white;
  line-height: 3.2rem;
  font-size: 3rem;
  border-radius: 0.35rem;
  font-family: 'Stick No Bills', sans-serif;
  transition: all 200ms;
}
.main_header_logo:active,
.main_header_logo:hover {
  text-shadow: 0.12rem 0.12rem 0rem var(--color-shadow-hard);
  transform: translate(-0.08rem, -0.08rem);
  cursor: pointer;
}

@media (max-width: 46rem) {
  #main_header {
    width: 100vw;
    height: 2.4rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background: linear-gradient(
      to right,
      var(--color-main-orange-harder),
      var(--color-main-orange),
      var(--color-main-orange-harder)
    );
  }
  .main_header_logo {
    line-height: 2.6rem;
    margin: 0rem;
  }
}
</style>
