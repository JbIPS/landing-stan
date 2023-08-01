<template>
  <a :href="href">{{ text }}</a>
</template>
<script setup lang="ts">
defineProps<{
  text: string
  href: string
}>()  
</script>
<style scoped>
a {
  text-decoration: none;
  border: 3px solid;
  font-weight: 900;
  text-transform: uppercase;
  padding: 0.5rem;
  text-align: center;
}
</style>
