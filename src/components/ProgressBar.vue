<template>
<div id="container">
  <div id="slider">
    <div id="box" :style="boxStyle">
      {{ progress }}
    </div>
  </div>
  <div id="row">

  </div>
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

const boxStyle = computed(() => ({ left: `calc(${props.progress}% - 50px)` }))

</script>


<style scoped>

#container {
  height: 100px;
  left: 10px;
  margin: auto;
  width: 80%;
  @apply shadow-inner;
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
  @apply flex justify-center items-center text-xl;
}

#row {
  width: 80%;
  background-color: hsl(var(--bc));
  height: 10px;
  position: absolute;
    margin-top: 20px;
    text-align: center;
}
</style>