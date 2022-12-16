<template>
  <div class="prompt">{{ question.getTitle() }}</div>

  <div v-if="question.getType() === 'TrueFalse'">
    <button class="bigButton-red" @click="$emit('resolve', false)">NO</button>
    <button class="bigButton-green" @click="$emit('resolve', true)">SI</button>
  </div>
  <div v-if="question.getType() === 'SimpleOperation'">
    <div class="flex">
      <span class="input grow">{{ value }}</span>
      <button @click="doEmit">Enviar</button>
    </div>
    <Keyboard
      @key="onKeyPressed"
      @del="onDelPressed">
    </Keyboard>
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

function onDelPressed() {
  let sValue = value.value.toString()
  sValue = sValue.substring(0, sValue.length - 1)
  value.value = sValue === '' ? 0 : parseInt(sValue)
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

.input {
  border-color: gray;
  border-style: solid;
  border-width: 1px;
}

.prompt {
  font-size: xx-large;
}

.bigButton-green {
  min-width: 150px;
  min-height: 150px;
  background-color: limegreen;
  font-size: xx-large;
  margin-bottom: 0px;
}

.bigButton-red {
  min-width: 150px;
  min-height: 150px;
  background-color: darkred;
  font-size: xx-large;
  margin-bottom: 0px;
}

</style>