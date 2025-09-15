<script setup>
import { ref } from "vue";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const brand = ref("");
const colorCode = ref("");
const thickness = ref("");
const remaining = ref("");
const notes = ref("");
const imageUrl = ref("");

const emit = defineEmits(["yarn-added"]);

const addYarn = async () => {
  if (!brand.value || !colorCode.value) return;
  await addDoc(collection(db, "yarns"), {
    brand: brand.value,
    colorCode: colorCode.value,
    thickness: thickness.value,
    remaining: remaining.value,
    notes: notes.value,
    imageUrl: imageUrl.value || ""
  });
  brand.value = colorCode.value = thickness.value = remaining.value = notes.value = imageUrl.value = "";
  emit("yarn-added");
};
</script>

<template>
  <div class="mb-6">
    <h2 class="text-lg font-semibold">新規登録</h2>
    <div class="space-y-2">
      <input v-model="brand" placeholder="ブランド" class="border p-1 w-full" />
      <input v-model="colorCode" placeholder="色番" class="border p-1 w-full" />
      <input v-model="thickness" placeholder="太さ (#20, #40...)" class="border p-1 w-full" />
      <input v-model="remaining" placeholder="残量 (10g, 中...)" class="border p-1 w-full" />
      <input v-model="notes" placeholder="メモ" class="border p-1 w-full" />
      <input v-model="imageUrl" placeholder="画像URL (任意)" class="border p-1 w-full" />
      <button @click="addYarn" class="bg-blue-500 text-white px-3 py-1 rounded">追加</button>
    </div>
  </div>
</template>
