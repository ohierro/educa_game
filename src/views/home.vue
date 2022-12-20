<template>
  Página principal
  <div>
    <h2>Selecciona de curso</h2>
    <ul>
      <li>
        <CButton
          title="3 infantil"
          disabled
          path="course"
        ></CButton>
      </li>
      <li><CButton
          title="2 infantil (proximamente)"
          disabled
          path="course"
        ></CButton>
      </li>
      <li>
        <CButton
          title="3 infantil"
          path="course"
        ></CButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import CButton from '../components/ui/CButton.vue';
</script>
