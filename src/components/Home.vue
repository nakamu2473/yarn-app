<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import YarnCard from "./YarnCard.vue";

const yarns = ref([]);

const fetchYarns = async () => {
  const querySnapshot = await getDocs(collection(db, "yarns"));
  yarns.value = querySnapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
};

const deleteYarn = async (id) => {
  await deleteDoc(doc(db, "yarns", id));
  fetchYarns();
};

onMounted(fetchYarns);

defineExpose({ fetchYarns });
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold mb-2">在庫一覧</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <YarnCard
        v-for="yarn in yarns"
        :key="yarn.id"
        :yarn="yarn"
        @delete="deleteYarn"
      />
    </div>
  </div>
</template>
