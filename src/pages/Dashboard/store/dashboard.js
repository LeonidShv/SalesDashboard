import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  readSalesData,
  readSalesDataForChart,
  readSalesDataForCards,
} from '@/pages/Dashboard/api/dashboard'

export const useSalesStore = defineStore('sales', () => {
  const salesList = ref([])

  async function getSalesList(page, limit) {
    const response = await readSalesData(page, limit)
    salesList.value = response.data.list
  }

  const salesDataForChart = ref({
    datasets: [],
    labels: [],
  })

  async function getSalesDataForChart() {
    const response = await readSalesDataForChart()
    salesDataForChart.value = response.data
  }

  const salesDataForCards = ref([])

  async function getSalesDataForCards() {
    const response = await readSalesDataForCards()
    console.log('response.data', response.data)
    salesDataForCards.value = response.data
  }

  return {
    getSalesList,
    salesList,

    getSalesDataForChart,
    salesDataForChart,

    getSalesDataForCards,
    salesDataForCards,
  }
})
