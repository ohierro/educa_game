import { defineStore } from 'pinia'
import { QuestionGenerator } from '../core/QuestionGenerator'
import { IQuestion } from '../core/IQuestion'
import { computed, reactive, ref } from 'vue'

export const useQuestionStore = defineStore('questions', () => {
  const number = ref(0)
  let questions: IQuestion[] = reactive([])

  function increment() {
    number.value++
  }

  function init() {
    const generator = new QuestionGenerator()
    questions = generator.generate(2)
  }

  const currentQuestion = computed(() => questions[number.value])
  // function currentQuestion(): IQuestion {
  //   return questions[number.value]
  // }

  return { questions, number, init, currentQuestion, increment }
})
