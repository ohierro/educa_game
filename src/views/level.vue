<template>
Selección de la dificultad
<ul>
  <li>
    <CButton
      title="1er trimestre"
      path="game"
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
import CButton from "../components/ui/CButton.vue"

</script>