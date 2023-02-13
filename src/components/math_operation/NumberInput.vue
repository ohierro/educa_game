<template>
  <div :class="['number', active ?  'isActive': '']">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineProps<{
  active?: Boolean,
  value: Number
}>()



</script>

<style scoped>
.number {
  @apply border border-solid border-gray-400 bg-neutral-content w-8 h-full rounded;
  font-size: xx-large;
  font-family: ui-monospace;
  text-align: center;
  color: hsl(var(--pc));
}

.isActive {
  background-color: hsl(var(--s));
  color: hsl(var(--c));
  /* animation: blinker 1s linear infinite; */
}

/* @keyframes blinker {
  50% {
    opacity: 0;
  }
} */
</style>