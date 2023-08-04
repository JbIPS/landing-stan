<template>
  <div>
    <div :class="`text-blue-dark opacity-15 text-7xl font-extrabold translate-y-9 break-words hyphens-auto`" lang="fr-FR" aria-hidden="true">{{ shadow.toUpperCase() }}</div>
    <h2 :class="`text-${dark === true ?  'blue-dark' : 'white' } text-4xl font-extrabold relative z-10`">
      {{ title.toUpperCase() }}
    </h2>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  shadow: string
  dark?: boolean
}>() 
</script>
<style scoped>
h2 {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
div {
  font-size: 4.5rem;
  line-height: 1rem;
}

@media (min-width: 1024px) {
h2 {
  font-size: 3.25rem;
  line-height: 2.5rem;
}
div {
  font-size: 7rem;
  line-height: 5rem;
}
}
</style>
