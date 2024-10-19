<template>
  <section class="router-view">
    <h2 class="leading-10 mb-2">Dashboard</h2>
    <div class="flex flex-wrap gap-4 mb-6">
      <VSelect
        v-model="salesRegionSelected"
        :options="salesRegionOptions"
        placeholder="Placeholder"
        @change="changeCasesConfigurator"
      />
      <VDatePicker v-model="dateRange" />
      <VButton class="min-w-24" @click="resetTableConfiguration">
        Reset
      </VButton>
    </div>
    <div class="flex flex-wrap justify-center mb-6" v-show="!isLoadingCards">
      <VCard
        v-for="{ title, text, id } in salesDataForCards"
        :title="title"
        :text="text"
        :key="id"
      />
    </div>
    <div class="mb-16">
      <h2>Sales Over Time</h2>
      <VChart
        v-show="!isLoadingChart"
        :data="salesDataForChart"
        type="Line"
        :isLoading="isLoadingChart"
      />
    </div>
    <VTable
      :tableData="tableDataSalesList"
      :configuration="configuredSalesList"
      v-show="!isLoadingTable"
      @rowClick="handleRowClick"
    />
    <VPagination
      @update="changePageNumber"
      :total="69"
      :currentPage="currentPage"
      class="m-t-16"
    />
    <VSkeleton
      :loading="isLoadingChart || isLoadingTable || isLoadingCards"
      class="loader"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSalesStore } from '@/pages/Dashboard/store/dashboard.js'
import {
  salesTableConfigurator,
  salesRegionOptions,
} from '@/pages/Dashboard/constants.js'
import VSkeleton from '@/components/Skeleton/VSkeleton.vue'
import VTable from '@/components/Table/VTable.vue'
import VSelect from '@/components/Select/VSelect.vue'
import VButton from '@/components/Button/VButton.vue'
import VPagination from '@/components/Pagination/VPagination.vue'
import VDatePicker from '@/components/DatePicker/VDatePicker.vue'
import VCard from '@/components/Card/VCard.vue'
import VChart from '@/components/Chart/VChart.vue'

const router = useRouter()
const route = useRoute()
const store = useSalesStore()

const currentPage = ref(Number(route.query.page) || 1)
const limit = 10

async function changePageNumber(pageNumber) {
  currentPage.value = pageNumber
  router.push({ name: 'Dashboard', query: { page: pageNumber } })
  await getSalesList(pageNumber, limit)
}

onMounted(async () => {
  getSalesList(currentPage.value, limit)
  getSalesDataForChart()
  getSalesDataForCards()
})

const isLoadingChart = ref(true)
async function getSalesDataForChart() {
  isLoadingChart.value = true
  await store.getSalesDataForChart()
  isLoadingChart.value = false
}

const isLoadingTable = ref(false)
async function getSalesList(pageNumber, limit) {
  isLoadingTable.value = true
  await store.getSalesList(pageNumber, limit)
  isLoadingTable.value = false
}

const isLoadingCards = ref(false)
async function getSalesDataForCards() {
  isLoadingCards.value = true
  await store.getSalesDataForCards()
  isLoadingCards.value = false
}

const salesRegionSelected = ref('Option1')
const dateRange = ref()

const configuredSalesList = computed(() => salesTableConfigurator)
const tableDataSalesList = computed(() => store.salesList)
const salesDataForChart = computed(() => store.salesDataForChart)
const salesDataForCards = computed(() => store.salesDataForCards)
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #fff;
}
</style>
