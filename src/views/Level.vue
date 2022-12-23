<template>
<h2>Selección de dificultad</h2>
<div class="list">
  <CButton
    title="1er trimestre"
    path="game"
    @click="selectLevel(1)"
  ></CButton>
  <CButton
    title="2o trimestre"
    disabled
    path="game"
  ></CButton>
  <CButton
    title="Curso completo"
    disabled
    path="game"
  ></CButton>
</div>
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