<template>
  <div class="w-full sm:w-1/2 lg:w-1/4 pb-2 sm:p-2 sm:pb-0">
    <div class="p-4 rounded border border-slate-400 bg-slate-50">
      <p class="mb-1 text-base">{{ title }}</p>
      <p class="text-2xl">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>
