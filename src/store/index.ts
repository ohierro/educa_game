import { defineStore } from 'pinia'
import { QuestionGenerator } from '../core/QuestionGenerator'
import { IQuestion } from '../core/IQuestion'
import { ref } from 'vue'

export const useQuestionStore = defineStore('questions', () => {
  const number = ref(0)

  function increment() {
    number.value++
  }

  return { number, increment }
})
