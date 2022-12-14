<template>
<h1>Game</h1>
<main>Preguntas</main>
<div>Value: {{ store.number }}</div>
<button>Prev</button>
<button @click="store.increment()">Next</button>
</template>

<script setup lang="ts">import { useQuestionStore } from '../store';

const store = useQuestionStore()


</script>