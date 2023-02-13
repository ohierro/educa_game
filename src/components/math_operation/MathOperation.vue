<template>
<div>
  <div class="flex flex-col">
    <div class="flex">
      <div class="flex flex-col justify-center align-middle h-full w-8">
        <div v-for="op in operations">{{ op }}</div>
        <!-- <div>+</div> -->
      </div>
      <div>
        <div v-for="(op, index) in ops" :key="index" class="flex">
          <div class="number">{{ op[0] }}</div>
          <div class="number">{{ op[1] }}</div>
          <div class="number">{{ op[2] }}</div>
        </div>
      </div>
    </div>
    <div class="cutom-input">
      <NumberInput :value="values[3]" :active="active === 3" />
      <NumberInput :value="values[2]" :active="active === 2" />
      <NumberInput :value="values[1]" :active="active === 1" />
      <NumberInput :value="values[0]" :active="active === 0" />
      <button class="btn grow">Enviar</button>
    </div>
  </div>
  <Keyboard
    @key="onKeyPressed"
    @del="onDelPressed"
    :only-numbers="true"
></Keyboard>
</div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import Keyboard from '../keyboard/Keyboard.vue';
import NumberInput from './NumberInput.vue';

const props = defineProps<{
  operators: Array<Number>,
  operations: Array<String>
}>()

const values: Array<Number> = reactive([0,0,0,0])
const active = ref(0)

const ops = computed( () => props.operators.map( op => op.toString().split('') ) )
const onKeyPressed = (key: Number) => {
  values[active.value] = key

  if (active.value < 3) {
    active.value++
  }
}

const onDelPressed = () => {
  if (active.value > 0) {
    active.value--
  }
}

</script>


<style>
.cutom-input {
  @apply w-full h-full flex justify-start;
  /* background-color: red; */
}

.number {
  @apply border border-solid border-gray-400 bg-neutral-content w-8 h-full rounded;
  font-size: xx-large;
  font-family: ui-monospace;
  text-align: center;
  color: hsl(var(--pc));
}
</style>