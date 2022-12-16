<template>
  <div class="keyboard">
    <div class="column-75">
      <div>
        <button @click="$emit('key', 1)">1</button>
        <button @click="$emit('key', 2)">2</button>
        <button @click="$emit('key', 3)">3</button>
      </div>
      <div>
        <button @click="$emit('key', 4)">4</button>
        <button @click="$emit('key', 5)">5</button>
        <button @click="$emit('key', 6)">6</button>
      </div>
      <div>
        <button @click="$emit('key', 7)">7</button>
        <button @click="$emit('key', 8)">8</button>
        <button @click="$emit('key', 9)">9</button>
      </div>
      <div>
        <button class="bigButton" @click="$emit('key', 0)">0</button>
      </div>
    </div>
    <div class="column-25">
      <div class="operators full-height">
        <button>+</button>
        <button>-</button>
        <button class="grow" @click="$emit('del')">Borrar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineEmits(['key', 'del'])


</script>

<style scoped>
.keyboard {
  display: flex;
  padding: 0;
  width: 100%;
}

.bigButton {
  width: 100%;
}

.operators {
  display: flex;
  flex-direction: column;
}
</style>