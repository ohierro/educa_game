<template>
Selección de la dificultad
<ul>
  <li>
    <CButton
      title="1er trimestre"
      path="game"
      @click="selectLevel(1)"
    ></CButton>
  </li>
  <li>
    <CButton
      title="2o trimestre"
      disabled
      path="game"
    ></CButton>
  </li>
  <li>
    <CButton
      title="Curso completo"
      disabled
      path="game"
    ></CButton>
  </li>
</ul>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import CButton from "../components/ui/CButton.vue"
import { useQuestionStore } from "../store";
import { useInformationStore } from "../store/information";

const informationStore = useInformationStore()
const store = useQuestionStore()
const router = useRouter()

function selectLevel(level: number) {
  informationStore.setLevel(level)
  store.init(informationStore.gameInformation.totalQuestions)

  router.push('game')
}

</script>