<template>
<div class="message-modal">
  <!-- <h1 class="animate__animated" :class="{ ok: positive, animate__swing: positive, nok: !positive, animate__hinge: !positive }">{{ msg }}</h1> -->
  <h1 class="animate__animated" :class="customClass">{{ msg }}</h1>
</div>
</template>

<script setup lang="ts">import { computed, onMounted, ref } from 'vue';

import party from "party-js";

const props = defineProps<{
  msg: string,
  positive: {
    type: boolean,
    default: true,
  }
}>()

const el = ref()

onMounted(() => {
  let element = document.getElementsByClassName('animate__animated')[0] as HTMLElement
  // el.value // <div>
  party.confetti(element)
})

let okAnimations = ['animate__bounce', 'animate__wobble', 'animate__bounceInLeft', 'animate__lightSpeedInRight', 'animate__zoomInLeft']
let koAnimations = ['animate__hinge', 'animate__rotateOutDownLeft', 'animate__rollOut']

const customClass = computed(() => {
  if (props.positive) {
    let result = {
      ok: true,
      animate__swing: true
    } as {[key: string]: any}

    let animation = okAnimations[Math.floor(Math.random() * koAnimations.length)]
    result[animation] = true

    return result
  } else {
    let result = {
      nok: true,
      'animate__delay-1s': true
    } as {[key: string]: any}

    // debugger
    let animation = koAnimations[Math.floor(Math.random() * koAnimations.length)]
    result[animation] = true

    return result
  }
})

</script>

<style scoped>
h1 {
  font-family: 'fredokaone';
  font-size: 60px;
  position: absolute;
  top: 25%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.message-modal {
  height: 100vh;
  position: absolute;
  background-color: #ffffff40;
  top: 0px;
  width: 100vw;
  z-index: 10;
}

.ok {
  text-shadow: 2px 2px #777777;
  color: hsl(var(--p));
}

.nok {
  text-shadow: 2px 2px #777777;
  color: hsl(var(--er));
  --animate-delay: 0.9s;
}
</style>