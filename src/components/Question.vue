<template>
  {{ question.getTitle() }}

  <div v-if="question.getType() === 'TrueFalse'">
    <button @click="$emit('resolve', false)">Falso</button>
    <button @click="$emit('resolve', true)">Verdad</button>
  </div>
  <div v-if="question.getType() === 'SimpleOperation'">
    <div class="flex">
      <input v-model="value" name="result" type="number" /><button @click="doEmit">Enviar</button>
    </div>
    <Keyboard @key="onKeyPressed"></Keyboard>
  </div>
</template>

<script setup lang="ts">
import Keyboard from '../components/keyboard/Keyboard.vue';
import { ref } from 'vue'
import { IQuestion } from '../core/IQuestion';

const value = ref(0)

const emit = defineEmits(['resolve'])

const props = defineProps<{
  question: IQuestion,
}>()

function onKeyPressed(key: number) {
  value.value = parseInt(value.value.toString() + key)
}

function doEmit() {
  emit('resolve', value.value)
  value.value = 0
}

</script>

<style scoped>
.flex {
  display: flex;
}
</style>