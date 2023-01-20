<template>
<div v-if="store.intializated" class="flex flex-col h-full">
  <div>
    <ProgressBar :progress="store.progress"></ProgressBar>
  </div>
  <div class="message">
    <div v-if="store.currentQuestion.answered">
      <Message :positive="true" v-if="store.currentQuestion.okAnswered" msg="Bien!!!"></Message>
      <Message :positive="false" v-if="!store.currentQuestion.okAnswered" msg="Oh no!!!"></Message>
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
import Modal from '../components/ui/Modal.vue';
import Message from '../components/ui/Message.vue';
import { useQuestionStore } from '../store';
import { useInformationStore } from '../store/information';
import party from "party-js";

const information = useInformationStore()
const store = useQuestionStore()
const router = useRouter()

if (!store.intializated) {
  router.push('/')
}

const showResult = ref(false)
const resultOk = ref(false)
const resultKo = ref(false)

// watch(() => store.currentQuestion.answered, (newVal, oldVal) => {
  // if (newVal && store.currentQuestion.okAnswered) {
  //   console.log('lauch');
  //   let element = document.getElementsByClassName('message')[0] as HTMLElement
  //   party.confetti(element)
  // }
// })
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
/* .message {
  min-height: 100px;
  font-size: xx-large;
  text-align: center;
} */
</style>