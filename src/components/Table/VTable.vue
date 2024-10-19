<template>
  <el-table :data="tableData" @row-click="handleRowClick">
    <el-table-column
      v-for="{ name, label, fixed, width } in configuration"
      :key="name"
      :prop="name"
      :label="label"
      :fixed="fixed"
      :width="width || 180"
      @click="emit('handleClick', scope.$index, scope.row)"
    />
  </el-table>
</template>

<script setup>
import { ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'

const emit = defineEmits(['rowClick'])

function handleRowClick(item) {
  emit('rowClick', item)
}

defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  configuration: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
:deep(tr) {
  cursor: pointer;
}
</style>
