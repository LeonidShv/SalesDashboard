import { ref } from 'vue'
import { defineStore } from 'pinia'
import { readSalesData } from '@/pages/Dashboard/api/dashboard'

export const useSalesStore = defineStore('sales', () => {
  const salesList = ref({})

  async function getSalesData() {
    const response = await readSalesData()

    salesList.value = response.data
  }

  return {
    getSalesData,
    salesList,
  }
})
