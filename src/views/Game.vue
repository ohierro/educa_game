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
</div>
</template>

<script setup lang="ts">

import Question from '../components/Question.vue';
import { useQuestionStore } from '../store';

const store = useQuestionStore()
store.init()

function validate(option: boolean) {
  console.log(`option selected ${option}`);
  let result = store.currentQuestion.resolve(option)
  console.log(`es correcto? ${result}`);
  
}

</script>