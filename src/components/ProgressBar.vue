<template>
<div id="container">
  <div class="text-center">Progreso</div>
  <progress class="progress progress-secondary" :value="progress" max="100"></progress>
  <!-- <div id="slider">
    <div class="pacman">
      <div class="pacman-top"></div>
      <div class="pacman-bottom"></div>
    </div>
    <div class="dots-list">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div> -->

  

  <!-- <div id="slider">
    <div class="pacman">
      <div class="pacman-top"></div>
      <div class="pacman-bottom"></div>
    </div>
    <div id="box" :style="boxStyle">
      {{ progress }}
    </div>
  </div>
  <div class="dots-list">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  <div id="row">

  </div> -->
</div> 
<!-- <div class="meter animate">
  <span :style="{ width: store.progress + '%' }"></span>
</div> -->
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import { useQuestionStore } from '../store';

const store = useQuestionStore()

const props = defineProps<{
  progress: number
}>()

const fakeProgress = ref(0)

// let progressString = computed(() => `${fakeProgress.value} %`)

// setInterval(() => {
//   console.log(`progress ${fakeProgress.value}`)
//   fakeProgress.value++

//   if (fakeProgress.value > 100) fakeProgress.value = 0
// }, 100)

// const boxStyle = computed(() => ({ left: `calc(${props.progress}% - 50px)` }))

const boxStyle = computed(() => ({ left: `calc(50% - 50px)` }))

</script>


<style scoped>

#container {
  height: 100px;
  left: 10px;
  margin: auto;
  width: 80%;
  /* @apply shadow-inner; */
}

#slider {
  min-width: 100%;
  position: relative;
}

#box {
  width: 50px;
  height: 50px;
  background-color: hsl(var(--n));
  position: absolute;
  z-index: 1;
  /* border-radius: 50px; */
  shape-outside: circle(50% at 30%);
  clip-path: circle(70% at 0%);
  
  @apply flex justify-center items-center text-xl;
}

#row {
  width: 80%;
  background-color: hsl(var(--bc));
  height: 20px;
  position: absolute;
  margin-top: 20px;
  text-align: center;
  border-radius: 50px;
}

.pacman {
  height: 40px;
}
.pacman > div {
  background-color: #ff0;
  height: 50%;
  width: 40px;
  position: absolute;
}

.pacman-top {
  top: 0;
  border-radius: 100px 100px 0 0;
  transform: rotate(-15deg);
}

.pacman-bottom {
  bottom: 0;
  border-radius: 0 0 100px 100px;
  transform: rotate(15deg);
}
.dot {
    width: 30px;
    height: 30px;
    background-color: #FFF;
    border-radius: 30%;
    right: -30px;
    animation: feed 8s infinite linear;
}

@keyframes feed {
  0% {
    right: 0%;
  }
  90% {
    opacity: 1;
  }
  91% {
    opacity: 0;
  }
  100% {
    right: 100%;
    opacity: 0;
  }
}

.dot:nth-child(2) {
  animation-delay: 1s; /* 1 second for second, 2 seconds for third, etc */
}
</style>