<template>
  <el-date-picker
    v-model="model"
    type="daterange"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date"
  />
</template>

<script setup>
import { ElDatePicker } from 'element-plus'
import 'element-plus/es/components/date-picker/style/css'

const model = defineModel()
</script>
