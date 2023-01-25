<template>
  <div class="flex flex-col flex-grow">
    <div class="prompt">{{ question.getTitle() }}</div>

    <div v-if="question.getType() === 'TrueFalse'">
      <div class="flex justify-around">
        <button class="bigButton-red" @click="$emit('resolve', false)">NO</button>
        <button class="bigButton-green" @click="$emit('resolve', true)">SI</button>
      </div>
    </div>
    <div class="flex h-full justify-center" v-if="question.getType() === 'SimpleOperation'">
      <div class="w-8/12 flex flex-col justify-end h-full">
        <div class="flex justify-center mb-4 m-1">
          <div class="Question--custom-input">{{ value }}</div>
          <button class="btn" @click="doEmit">Enviar</button>
        </div>
        <Keyboard
          @key="onKeyPressed"
          @del="onDelPressed"
          :only-numbers="false">
        </Keyboard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Keyboard from '../components/keyboard/Keyboard.vue';
import { ref } from 'vue'
import { IQuestion } from '../core/questions/IQuestion';

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
  overflow-wrap: break-word;
  text-align: center;
}

.bigButton-green {
  @apply btn;
  min-width: 150px;
  min-height: 150px;
  /* background-color: limegreen; */
  /* font-size: xx-large; */
  /* margin-bottom: 0px; */
}

/* .bigButton-green {
  min-width: 150px;
  min-height: 150px;
  background-color: limegreen;
  font-size: xx-large;
  margin-bottom: 0px;
} */

.bigButton-red {
  @apply btn;
  min-width: 150px;
  min-height: 150px;
  /* min-width: 150px;
  min-height: 150px;
  background-color: darkred;
  font-size: xx-large;
  margin-bottom: 0px; */
}

.Question--custom-input {
  @apply input w-full max-w-xs;
  margin-right: 20px;
  text-align: right;
  font-size: x-large;
  font-family: monospace;
}

</style>