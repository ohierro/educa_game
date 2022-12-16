<template>
<h1 @click="router.push('/')">Educa game</h1>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
</script>