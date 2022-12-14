<template>
  Esto sería un mensaje {{ msg }} {{ counter }} {{ computedValue }}
  <button @click="counter++">Click me</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{
  msg: string,
  counter?: number
}>()

const computedValue = computed(() => counter.value > 5 ? 'Greater than' : 'Less than')

let counter = ref(0)


let x: string | number = 1
</script>

<style>

</style>