<script setup lang="ts">
import Footer from './components/ui/Footer.vue';
import Header from './components/ui/Header.vue';

</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
</style>
