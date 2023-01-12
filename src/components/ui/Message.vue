<template>
<div class="message-modal">
  <h1 class="animate__animated animate__swing">{{ msg }}</h1>
</div>
</template>

<script setup lang="ts">import { onMounted, ref } from 'vue';

import party from "party-js";

defineProps<{
  msg: string
}>()

const el = ref()

onMounted(() => {
  let element = document.getElementsByClassName('animate__animated')[0] as HTMLElement
  // el.value // <div>
  party.confetti(element)
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
</style>