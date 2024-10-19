<template>
  <h1>Dashboard</h1>
  <p>{{ salesList }}</p>
</template>

<script setup>
import { useSalesStore } from '@/pages/Dashboard/store/dashboard.js'
import { storeToRefs } from 'pinia'

const store = useSalesStore()
const { salesList } = storeToRefs(store)

const { getSalesData } = store

getSalesData()
</script>
