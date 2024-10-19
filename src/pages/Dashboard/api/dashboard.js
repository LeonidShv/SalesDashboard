function getMockData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          list: [1, 2, 3, 4, 5],
        },
      })
    }, 300)
  })
}

export async function readSalesData(page, limit) {
  return await getMockData(page, limit)
}
