<template>
  <el-select
    @update:model-value="value => $emit('update:v-model', value)"
    :placeholder="placeholder"
    class="w-full md:!w-40"
  >
    <el-option
      v-for="{ value, label, disabled } in options"
      :key="value"
      :label="label"
      :value="value"
      :disabled="disabled"
    />
  </el-select>
</template>

<script setup>
import { ElSelect, ElOption } from 'element-plus'
import 'element-plus/es/components/select/style/css'

defineEmits(['update:v-model'])

defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>
