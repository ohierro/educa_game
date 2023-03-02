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
      <MathOperation :operators="members" :operations="operators" @resolve="doResolve"></MathOperation>
    </div>
  </div>
</template>

<script setup lang="ts">
import Keyboard from '../components/keyboard/Keyboard.vue';
import { computed, ref } from 'vue'
import { IQuestion } from '../core/questions/IQuestion';
import InputNumber from './keyboard/InputNumber.vue';
import MathOperation from './math_operation/MathOperation.vue';
import { SimpleOperationQuestion } from '../core/questions/SimpleOperationQuestion';
import { AnsweredQuestions } from '../store/AnsweredQuestions'

const value = ref(0)
const sValue = ref('')

const emit = defineEmits(['resolve'])

const props = defineProps<{
  question: IQuestion,
}>()

const operators = computed( () => {
  if (props.question.getType() === 'SimpleOperation') {
    return ((props.question as AnsweredQuestions).question as SimpleOperationQuestion).getOperators()
  } else {
    return []
  }
})

const members = computed( () => {
  if (props.question.getType() === 'SimpleOperation') {
    return ((props.question as AnsweredQuestions).question as SimpleOperationQuestion).getMembers()
  } else {
    return []
  }
})

// function onKeyPressed(key: number) {
//   // if (value.value.toString().length < 4)
//   //   value.value = parseInt(key + value.value.toString())
//   if (sValue.value.length < 4) {
//     sValue.value = key + sValue.value
//   }
// }

// function onDelPressed() {
//   // let sValue = value.value.toString()
//   // sValue = sValue.substring(1)
//   // value.value = sValue === '' ? 0 : parseInt(sValue)

//   if (sValue.value.length > 0)
//     sValue.value = sValue.value.substring(1)
// }

// function doEmit() {
//   emit('resolve', value.value)
//   value.value = 0
// }

const doResolve = (value: Number) => {
  emit('resolve', value)
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

button:hover {
  background-color: hsl(var(--n));
}

.bigButton-red:hover {
  background-color: hsl(var(--n));
}

.bigButton-green:hover {
  background-color: hsl(var(--n));
}


.Question--custom-input {
  @apply input w-full max-w-xs;
  margin-right: 20px;
  text-align: right;
  font-size: x-large;
  font-family: monospace;
}

</style>