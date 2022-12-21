<template>
  Página principal
  <div>
    <h2>Selecciona de curso</h2>
    <ul>
      <li>
        <CButton
          title="1 infantil (proximamente)"
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
          @click="selectCourse(3)"
        ></CButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import CButton from '../components/ui/CButton.vue';
import { useInformationStore } from '../store/information';

const information = useInformationStore()
const router = useRouter()

function selectCourse(course: number) {
  information.setCourse(course)

  router.push('level')
}
</script>
