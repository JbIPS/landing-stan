<template>
  <div :class="`mb-8${dark ? ' dark' : ''}`">
    <div class="flex mb-6">
      <div v-for="tab in tabs" :key="tab.id">
        <input type="radio" :name="`navtab_${id}`" :id="tab.id" class="hidden" :value="tab" v-model="currentTab">
        <label :for="tab.id">{{ tab.label }}</label>
      </div>
    </div>
    <div>
      <slot :name="currentTab.id"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  id: string
  tabs:  Array<{
    id: string
    label: string
  }>
  dark?: boolean
}>();
const currentTab = ref(props.tabs[0])
</script>
<style scoped>
.dark input + label {
  background: rgb(var(--blue));
  color: rgb(var(--white));
  border-color: rgb(var(--white));
}
input + label {
  background: rgb(var(--white));
  color: rgb(var(--blue));
  border-color: rgb(var(--blue));
}

input:checked + label {
  background: rgb(var(--blue));
  color: rgb(var(--white));
  border-color: rgb(var(--blue));
}

label {
  text-decoration: none;
  border: 1px solid;
  font-weight: 900;
  text-transform: uppercase;
  padding: .3rem 0.5rem;
  font-size: .7rem;
  flex-grow: 1;
}

.dark input:checked + label {
  background: rgb(var(--white));
  color: rgb(var(--blue));
  border-color: rgb(var(--white));
}
label {
  text-decoration: none;
  border: 1px solid;
  font-weight: 900;
  text-transform: uppercase;
  padding: .3rem 0.5rem;
  font-size: .7rem;
  flex-grow: 1;
}

.dark :deep(p) {
  color: rgb(var(--white));
}

:deep(p) {
  margin-bottom: 1rem;
  color: rgb(var(--blue));
}

:deep(a) {
  text-decoration: underline;
}
</style>
