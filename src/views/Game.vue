<template>
<div>
  <div>
    <ProgressBar :progress="store.progress"></ProgressBar>
  </div>
  <div class="message">
    <div v-if="store.validated">
      <div v-if="store.validation">Bien!!</div>
      <div v-if="!store.validation">Ohhh no</div>
    </div>
  </div>
  <Question
    :question="store.currentQuestion"
    @resolve="validate"
  ></Question>
</div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import ProgressBar from '../components/ProgressBar.vue';
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
  store.validate(option)

  setTimeout(() => {
    clean()
    store.increment()
  }, 2000)
}

</script>

<style scoped>
.message {
  min-height: 100px;
  font-size: xx-large;
  text-align: center;
}
</style>