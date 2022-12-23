<template>
<div v-if="store.intializated">
  <div>
    <ProgressBar :progress="store.progress"></ProgressBar>
  </div>
  <div class="message">
    <div v-if="store.currentQuestion.answered">
      <div v-if="store.currentQuestion.okAnswered">Bien!!</div>
      <div v-if="!store.currentQuestion.okAnswered">Ohhh no</div>
    </div>
  </div>
  <Question
    :question="store.currentQuestion"
    @resolve="validate"
  ></Question>
</div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ProgressBar from '../components/ProgressBar.vue';
import Question from '../components/Question.vue';
import { useQuestionStore } from '../store';
import { useInformationStore } from '../store/information';

const information = useInformationStore()
const store = useQuestionStore()
const router = useRouter()

if (!store.intializated) {
  router.push('/')
}

const showResult = ref(false)
const resultOk = ref(false)
const resultKo = ref(false)

watch(() => store.number, (newVal, oldVal)=> {
  if (newVal === information.gameInformation.totalQuestions) {
    router.push('end')
  }
})

function validate(option: boolean) {
  store.validate(option)

  setTimeout(() => {
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