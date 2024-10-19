<template>
  <SkeletonDefault :loading="loading" :styleConfig="styleConfig" />
</template>

<script setup>
import SkeletonDefault from '@/components/Skeleton/SkeletonDefault.vue'

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  styleConfig: {
    type: Object,
    default: () => {},
  },
})
</script>
