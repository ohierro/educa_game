<template>
  <div id="home-view">
    <h2>Selección de curso</h2>
    <div class="list">
      <CButton
        title="1 infantil (proximamente)"
        disabled
        path="course"
      ></CButton>
    <CButton
        title="2 infantil (proximamente)"
        disabled
        path="course"
      ></CButton>
      <CButton
        title="3 infantil"
        path="course"
        @click="selectCourse(3)"
      ></CButton>
    </div>
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

<style>
#home-view {
  @apply h-full;
}
</style>