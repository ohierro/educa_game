import { defineStore } from 'pinia'
import { QuestionGenerator } from '../core/questions/QuestionGenerator'
import { IQuestion } from '../core/questions/IQuestion'
import { computed, reactive, ref } from 'vue'
import { AnsweredQuestions } from './AnsweredQuestions'

export const useQuestionStore = defineStore('questions', () => {
  const number = ref(0)
  const validated = ref(false)
  const validation = ref(false)
  const intializated = ref(false)

  let questions: AnsweredQuestions[] = reactive([])

  function increment() {
    number.value++
    validated.value = false
    validation.value = false
  }

  function init(totalQuestions: number = 10) {
    const generator = new QuestionGenerator()
    let answeredQuestions = generator.generate(totalQuestions).map(q => new AnsweredQuestions(q))
    questions.splice(0, questions.length)
    questions.push(...answeredQuestions)
    number.value = 0
    intializated.value = true
  }

  function validate(result: string | number | boolean) {
    let solution = questions[number.value].resolve(result)
    questions[number.value].answered = true
    questions[number.value].okAnswered = solution
  }

  const currentQuestion = computed(() => questions[number.value])
  const progress = computed(() => number.value * 100 / questions.length)
  const totalOk = computed(() => questions.filter(q => q.answered).reduce((pv, cv) => pv + 1, 0))

  return { questions, number, validated, validation, intializated, init, validate, increment, currentQuestion, progress, totalOk }
})
