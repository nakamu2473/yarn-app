<script setup>
import { ref, onMounted } from 'vue'

const yarns = ref([])

onMounted(async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/yarns`)
    if (!res.ok) throw new Error(`HTTP error! ${res.status}`)
    yarns.value = await res.json()
  } catch (err) {
    console.error('Fetch error:', err)
  }
})
</script>

<template>
  <div class="yarn-list">
    <h2>🧶 Yarn 在庫一覧</h2>
    <ul>
      <li v-for="y in yarns" :key="y.id">
        <strong>{{ y.brand }}</strong> — {{ y.colorCode }} / {{ y.remaining }}
      </li>
    </ul>
  </div>
</template>
