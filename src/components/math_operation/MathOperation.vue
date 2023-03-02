<template>
<div>
  <div class="flex justify-around mb-4">
    <div class="flex flex-col">
      <div class="flex">
        <div class="flex flex-col justify-center align-middle h-full w-8">
          <div v-for="op in operations" class="text-4xl">
            {{ op }}
          </div>
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
      </div>
    </div>
    <div>
      <button @click="doEmit" class="btn btn-primary grow h-full">Enviar</button>
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
import { computed, onMounted, onUpdated, reactive, ref, watch } from 'vue';
import Keyboard from '../keyboard/Keyboard.vue';
import NumberInput from './NumberInput.vue';

const props = defineProps<{
  operators: Array<Number>,
  operations: Array<String>
}>()

const values: Array<Number> = reactive([0,0,0,0])
const active = ref(0)

const ops = computed( () => props.operators.map( op => fill(op.toString().split(''), 3) ) )
const onKeyPressed = (key: Number) => {
  values[active.value] = key

  if (active.value < 3) {
    active.value++
  }
}

const onDelPressed = () => {
  values[active.value] = 0

  if (active.value > 0) {
    active.value--
  }
}

const emit = defineEmits(['resolve'])

const doEmit = () => {
  // const valueAsNumber = Number.parseInt(values.join(''), 10)
  const copyValues = [...values]
  const valueAsNumber = parseInt(copyValues.reverse().join(''))
  emit('resolve', valueAsNumber)
}

const fill = function(array: string[], size: number): string[] {
  if (array.length < size) {
    const fill = Array(size - array.length).fill('0')
    return [...fill, ...array]
  }

  return array
}

watch(() => props.operators, (newValue, oldValue) => {
  console.log('clearing values...')
  values.fill(0)
  active.value = 0
})
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