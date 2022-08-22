<template>
  <main>
    <b-card-list :cardRecords="cardRecords" />
    <pagination-view :total="500" />
  </main>
</template>

<script setup>
import BCardList from '@/blocks/CardList.vue'
import { bookViewConfig } from '@/view-provider/show/book.js'
import PaginationView from '@/components/paginationView.vue'
const { cardRecords } = bookViewConfig
</script>

<style scoped></style>
