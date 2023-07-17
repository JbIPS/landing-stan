<template>
  <div>
  <div :class="`text-blue-dark opacity-15 text-7xl font-extrabold translate-y-9 break-words hyphens-auto`" lang="fr-FR" aria-hidden="true">{{ shadow.toUpperCase() }}</div>
  <h2 :class="`text-${dark === true ?  'blue-dark' : 'white' } text-4xl font-extrabold relative z-10`">
    <slot />
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

