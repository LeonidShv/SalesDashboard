import {
  salesListMockData,
  salesChartMockData,
  salesCardsMockData,
} from '@/pages/Dashboard/api/mockData.js'

function getMockData(page, limit) {
  const startIndex = (page - 1) * limit // початковий індекс
  const endIndex = startIndex + limit // кінцевий індекс

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          list: salesListMockData.slice(startIndex, endIndex),
        },
      })
    }, 300)
  })
}

function getMockDataForChart() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: salesChartMockData,
      })
    }, 300)
  })
}

function getMockDataForCards() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: salesCardsMockData,
      })
    }, 300)
  })
}

export async function readSalesData(page, limit) {
  return await getMockData(page, limit)
}

export async function readSalesDataForChart() {
  return await getMockDataForChart()
}

export async function readSalesDataForCards() {
  return await getMockDataForCards()
}
