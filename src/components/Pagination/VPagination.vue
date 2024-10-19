<template>
  <el-pagination
    :current-page="currentPage"
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="10"
    @update:current-page="update"
    hide-on-single-page
  />
</template>

<script setup>
import { ElPagination } from 'element-plus'
import 'element-plus/es/components/pagination/style/css'
const emit = defineEmits(['update:v-model'])

function update(e) {
  emit('update', e)
}
defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 1,
  },
  configuration: {
    type: Array,
    default: () => [],
  },
})
</script>
