<script setup>
import { ref, watch } from 'vue'

const STORAGE_KEY = 'knitting-counters'

const loadCounters = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : [{ id: 1, label: '段数', count: 0 }]
  } catch {
    return [{ id: 1, label: '段数', count: 0 }]
  }
}

const counters = ref(loadCounters())
let nextId = Math.max(...counters.value.map(c => c.id)) + 1

watch(counters, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

const increment = (counter) => counter.count++
const decrement = (counter) => { if (counter.count > 0) counter.count-- }
const reset = (counter) => { counter.count = 0 }

const addCounter = () => {
  counters.value.push({ id: nextId++, label: `カウンター${counters.value.length + 1}`, count: 0 })
}

const removeCounter = (id) => {
  if (counters.value.length === 1) return
  counters.value = counters.value.filter(c => c.id !== id)
}
</script>

<template>
  <div class="p-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold">🧶 編み物カウンター</h2>
      <button
        @click="addCounter"
        class="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        ＋ カウンター追加
      </button>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="counter in counters"
        :key="counter.id"
        class="border rounded-lg p-4 shadow text-center bg-white"
      >
        <div class="flex items-center justify-between mb-2">
          <input
            v-model="counter.label"
            class="font-semibold text-gray-700 border-b border-transparent hover:border-gray-300 focus:border-blue-400 outline-none bg-transparent w-full text-left"
          />
          <button
            v-if="counters.length > 1"
            @click="removeCounter(counter.id)"
            class="text-gray-400 hover:text-red-500 text-sm ml-2 flex-shrink-0"
          >✕</button>
        </div>

        <div class="text-6xl font-bold my-4 text-gray-800">{{ counter.count }}</div>

        <div class="flex justify-center gap-3">
          <button
            @click="decrement(counter)"
            class="w-14 h-14 rounded-full bg-gray-200 text-2xl font-bold hover:bg-gray-300 active:scale-95 transition-transform"
          >－</button>
          <button
            @click="increment(counter)"
            class="w-14 h-14 rounded-full bg-blue-500 text-white text-2xl font-bold hover:bg-blue-600 active:scale-95 transition-transform"
          >＋</button>
        </div>

        <button
          @click="reset(counter)"
          class="mt-3 text-sm text-gray-500 hover:text-red-500 underline"
        >リセット</button>
      </div>
    </div>
  </div>
</template>
