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
    try {
      const response = await readSalesData(page, limit)
      salesList.value = response.data.list
    } catch (e) {
      console.warn(e);
    }
  }

  const salesDataForChart = ref({
    datasets: [],
    labels: [],
  })

  async function getSalesDataForChart() {
    try {
      const response = await readSalesDataForChart()
      salesDataForChart.value = response.data
    } catch (e) {
      console.warn(e);
    }
  }

  const salesDataForCards = ref([])

  async function getSalesDataForCards() {
    try {
      const response = await readSalesDataForCards()
      salesDataForCards.value = response.data
    } catch (e) {
      console.warn(e);
    }
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
