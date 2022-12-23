<template>
  <h2>Fin del juego</h2>
  <div class="flex">
    <div class="flex column">
      Total preguntas
      <div>{{ information.gameInformation.totalQuestions }}</div>
    </div>
    <div class="flex column">
      Total respuesta OK
      <div>{{ store.totalOk }}</div>
    </div>
  </div>
  <div>
    <CButton
      title="Volver a jugar"
      @click="playAgain"
    ></CButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CButton from "../components/ui/CButton.vue"
import { useQuestionStore } from "../store/index"
import { useInformationStore } from "../store/information";

const information = useInformationStore()
const store = useQuestionStore()
const router = useRouter()

function playAgain() {
  store.init(information.gameInformation.totalQuestions)
  router.push('game')
}
</script>

<style>
.flex {
  display: flex;
}

.column {
  flex-direction: column;
}

</style>