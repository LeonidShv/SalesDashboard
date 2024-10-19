<template>
  <ElSwitch
    :value="value"
    @change="value => $emit('update:v-model', value)"
    :active-action-icon="activeIcon"
    :inactive-action-icon="inActiveIcon"
  />
</template>

<script setup>
import { ElSwitch } from 'element-plus'
import 'element-plus/es/components/switch/style/css'

defineEmits(['update:v-model'])

defineProps({
  activeIcon: {
    type: Object,
    default: () => {},
  },
  inActiveIcon: {
    type: Object,
    default: () => {},
  },
  value: {
    type: Boolean,
    default: false,
  },
})
</script>
