import { defineStore } from "pinia";
import { reactive } from "vue";

export const useInformationStore = defineStore('information', () => {
  const gameInformation = reactive({
    course: 0,
    level: 0,
    totalQuestions: 20
  })

  function setCourse(course: number) {
    gameInformation.course = course
  }

  function setLevel(level: number) {
    gameInformation.level = level
  }

  function setTotalQuestions(number: number) {
    gameInformation.totalQuestions = number
  }

  return { gameInformation, setCourse, setLevel, setTotalQuestions }
})