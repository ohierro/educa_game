<template>

<div class="cutom-input">
  <div class="number">{{ fValue[3] }}</div>
  <div class="number">{{ fValue[2] }}</div>
  <div class="number">{{ fValue[1] }}</div>
  <div class="number">{{ fValue[0] }}</div>
</div>
</template>

<script setup lang="ts">import { computed } from 'vue';

const props = defineProps<{value:String}>()

const fValue = computed(() => props.value.split('').reverse())

</script>

<style>
.cutom-input {
  @apply w-full h-full flex justify-around;
  /* background-color: red; */
}

.number {
  @apply border border-solid border-gray-400 bg-neutral-content w-8 h-full rounded;
  font-size: xx-large;
  font-family: ui-monospace;
  text-align: center;
  color: hsl(var(--pc));
}
</style>

