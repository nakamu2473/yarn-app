<script setup>
import { ref } from 'vue'

const brand = ref('')
const colorCode = ref('')
const thickness = ref('')
const remaining = ref('')
const notes = ref('')

const handleSubmit = async () => {
  const newYarn = {
    brand: brand.value,
    colorCode: colorCode.value,
    thickness: thickness.value,
    remaining: remaining.value,
    notes: notes.value,
  }

  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/yarns`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newYarn),
  })

  if (!res.ok) {
    console.error('保存失敗:', await res.text())
    return
  }

  const data = await res.json()
  console.log('保存成功:', data)
  alert('登録完了だっちゃ🧶')
}
</script>

<template>
  <div class="form">
    <h2>🪡 新しい Yarn を登録</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="brand" placeholder="ブランド" />
      <input v-model="colorCode" placeholder="色番号" />
      <input v-model="thickness" placeholder="太さ" />
      <input v-model="remaining" placeholder="残量" />
      <textarea v-model="notes" placeholder="メモ"></textarea>
      <button type="submit">登録</button>
    </form>
  </div>
</template>
