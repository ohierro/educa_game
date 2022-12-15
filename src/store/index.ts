import { defineStore } from 'pinia'
import { QuestionGenerator } from '../core/QuestionGenerator'
import { IQuestion } from '../core/IQuestion'
import { computed, reactive, ref } from 'vue'

export const useQuestionStore = defineStore('questions', () => {
  const number = ref(0)
  const validated = ref(false)
  const validation = ref(false)

  let questions: IQuestion[] = reactive([])
  // let solutions: string | number | boolean []
  // let validations: boolean[] = reactive([])

  function increment() {
    number.value++
    validated.value = false
    validation.value = false
  }

  function init() {
    const generator = new QuestionGenerator()
    questions = generator.generate(2)
  }

  function validate(result: string | number | boolean) {
    validation.value = questions[number.value].resolve(result)
    validated.value = true
  }

  const currentQuestion = computed(() => questions[number.value])
  // function currentQuestion(): IQuestion {
  //   return questions[number.value]
  // }

  return { questions, number, validated, validation, init, validate, increment, currentQuestion }
})
