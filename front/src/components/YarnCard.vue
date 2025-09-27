<script setup>
const props = defineProps({
  yarn: Object
});
const emit = defineEmits(["delete"]);
</script>

<template>
  <div class="border rounded p-3 shadow">
    <img v-if="yarn.imageUrl" :src="yarn.imageUrl" alt="yarn" class="w-full h-32 object-cover mb-2" />
    <h3 class="font-bold">{{ yarn.brand }} - {{ yarn.colorCode }}</h3>
    <p>太さ: {{ yarn.thickness }}</p>
    <p>残量: {{ yarn.remaining }}</p>
    <p class="text-sm text-gray-600">{{ yarn.notes }}</p>
    <button @click="emit('delete', yarn.id)" class="bg-red-500 text-white px-2 py-1 rounded mt-2">削除</button>
  </div>
</template>
