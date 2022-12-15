<template>
<h1>Game</h1>
<main>Preguntas</main>
<div>Value: {{ store.number }}</div>
<button>Prev</button>
<div>{{ store.currentQuestion.getTitle() }}</div>
<div>{{ store.currentQuestion.getType() }} </div>
<button @click="store.increment()">Next</button>
<div>
  <h2>Game</h2>
  <Question
    :question="store.currentQuestion"
    @resolve="validate"
  ></Question>
  <div v-if="store.validated">
    <div v-if="store.validation">Bien!!</div>
    <div v-if="!store.validation">Ohhh no</div>
  </div>
  <Keyboard></Keyboard>
</div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import Keyboard from '../components/keyboard/Keyboard.vue';
import Question from '../components/Question.vue';
import { useQuestionStore } from '../store';

const store = useQuestionStore()
store.init()

const showResult = ref(false)
const resultOk = ref(false)
const resultKo = ref(false)

function clean() {

}

function validate(option: boolean) {
  // console.log(`option selected ${option}`);
  // let result = store.currentQuestion.resolve(option)
  store.validate(option)

  setTimeout(() => {
    clean()
    store.increment()
  }, 2000)
  // console.log(`es correcto? ${result}`);

  
}

</script>