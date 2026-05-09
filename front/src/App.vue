<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">レース糸管理</h1>
    <KnittingCounter />
    <hr class="my-6" />
    <AddYarn @yarn-added="refreshYarns" />
    <Home ref="homeRef" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddYarn from "./components/AddYarn.vue";
import Home from "./components/Home.vue";
import KnittingCounter from "./components/KnittingCounter.vue";

const homeRef = ref(null);

const refreshYarns = () => {
  homeRef.value?.fetchYarns();
};
</script>
