<template>
  <!-- <div class="keyboard"> -->
<div class="flex w-full justify-center mb-4">
  <div class="flex w-full">
    <div class="flex flex-col h-full flex-grow justify-evenly">
      <div class="flex w-full h-14 items-center text-center">
        <div @click="$emit('key', 1)" class="btn shrink w-full m-1 sm:m-4">1</div>
        <div @click="$emit('key', 2)" class="btn shrink w-full m-1 sm:m-4">2</div>
        <div @click="$emit('key', 3)" class="btn shrink w-full m-1 sm:m-4">3</div>
      </div>
      <div class="flex w-full h-14 items-center text-center">
        <div @click="$emit('key', 4)" class="btn shrink w-full m-1 sm:m-4">4</div>
        <div @click="$emit('key', 5)" class="btn shrink w-full m-1 sm:m-4">5</div>
        <div @click="$emit('key', 6)" class="btn shrink w-full m-1 sm:m-4">6</div>
      </div>
      <div class="flex w-full h-14 items-center text-center">
        <div @click="$emit('key', 7)" class="btn shrink w-full m-1 sm:m-4">7</div>
        <div @click="$emit('key', 8)" class="btn shrink w-full m-1 sm:m-4">8</div>
        <div @click="$emit('key', 9)" class="btn shrink w-full m-1 sm:m-4">9</div>
      </div>
      <div class="flex w-full h-14 items-center text-center">
        <div @click="$emit('key', 0)" class="btn shrink w-full m-1 sm:m-4">0</div>
      </div>
    </div>
    <div class="h-full">
      <div v-if="onlyNumbers" class="flex w-full h-full items-center text-center pb-1 pt-1">
        <div @click="$emit('del')" class="btn shrink h-full w-full m-1 sm:m-4">Borrar</div>
      </div>
      <div v-else class="flex h-full">
        <div>
          <div @click="$emit('key', 7)" class="btn shrink w-full m-1 sm:m-4">+</div>
          <div @click="$emit('key', 8)" class="btn shrink w-full m-1 sm:m-4">-</div>
          <div @click="$emit('key', 9)" class="btn shrink w-full m-1 sm:m-4">x</div>
          <div @click="$emit('key', 9)" class="btn shrink w-full m-1 sm:m-4">÷</div>
        </div>
          <div class="ml-2 h-full pb-2">
          <div @click="$emit('del')" class="btn h-full w-full m-1 sm:m-4">
            <i class="mdi mdi-backspace"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <!-- <div class="column-75">
      <div>
        <button class="keyboard-button" @click="$emit('key', 1)">1</button>
        <button class="keyboard-button" @click="$emit('key', 2)">2</button>
        <button class="keyboard-button" @click="$emit('key', 3)">3</button>
      </div>
      <div>
        <button class="keyboard-button" @click="$emit('key', 4)">4</button>
        <button class="keyboard-button" @click="$emit('key', 5)">5</button>
        <button class="keyboard-button" @click="$emit('key', 6)">6</button>
      </div>
      <div>
        <button class="keyboard-button" @click="$emit('key', 7)">7</button>
        <button class="keyboard-button" @click="$emit('key', 8)">8</button>
        <button class="keyboard-button" @click="$emit('key', 9)">9</button>
      </div>
      <div class="flex">
        <button class="btn m-2 flex-grow" @click="$emit('key', 0)">0</button>
      </div>
    </div>
    <div v-if="onlyNumbers" class="column-25">
      <div class="operators h-full">
        <button class="keyboard--button__vertical" @click="$emit('del')">Borrar</button>
      </div>
    </div>
    <div v-if="!onlyNumbers" class="column-25">
      <div class="operators full-height">
        <button class="keyboard-button">+</button>
        <button class="keyboard-button">-</button>
        <button class="keyboard-button flex-grow" @click="$emit('del')">Borrar</button>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script setup lang="ts">

defineEmits(['key', 'del'])

defineProps<{
  onlyNumbers: boolean
}>()


</script>

<style scoped>
.keyboard {
  display: flex;
  padding: 0;
  width: 100%;
  @apply justify-center;
}

.keyboard-button {
  @apply btn btn-lg btn-square;
  @apply m-2;
}

.big-keyboard-button {
  @apply btn;
  @apply m-2;
  width: 100%;
}

.keyboard--button__vertical {
  @apply btn m-2 flex-grow;
}

.bigButton {
  width: 100%;
}

.operators {
  display: flex;
  flex-direction: column;
}
</style>