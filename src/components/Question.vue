<template>
  {{ question.getTitle() }}

  <div v-if="question.getType() === 'TrueFalse'">
    <button @click="$emit('resolve', false)">Falso</button>
    <button @click="$emit('resolve', true)">Verdad</button>
  </div>
  <div v-if="question.getType() === 'SimpleOperation'">
    <label for="result">Resultado</label><input v-model="value" name="result" type="number" />
    <button @click="$emit('resolve', value)">Enviar</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { IQuestion } from '../core/IQuestion';

defineEmits(['resolve'])

defineProps<{
  question: IQuestion,
}>()

const value = ref(0)

</script>

<style>

</style>