<template>
  <el-pagination
    :current-page="currentPage"
    background
    layout="prev, pager, next"
    :total="amount"
    :page-size="10"
    @update:current-page="update"
    hide-on-single-page
  />
</template>

<script setup>
import { ElPagination } from 'element-plus'
import 'element-plus/es/components/pagination/style/css'
// TODO: amount need to get from the server, need for pagination
const amount = 1000
const emit = defineEmits(['update:v-model'])

function update(e) {
  emit('update', e)
}
defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  configuration: {
    type: Array,
    default: () => [],
  },
})
</script>
