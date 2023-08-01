<template>
  <div class="bg-white">
    <img :src="img" alt="" class="w-1/5 my-4">
    <h3 class="font-extrabold text-xl">{{ title.toUpperCase() }}</h3>
    <h4 class="italic text-xl">{{ subtitle }}</h4>
    <p class="text-center px-4 my-4">{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
  img: string
  text: string
}>()
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 5px;
  align-items: center;
  margin-bottom: 2rem;
}

div > * {
  color: rgb(var(--blue-dark));
}
</style>
