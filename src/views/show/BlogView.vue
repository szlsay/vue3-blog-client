<template>
  <main>
    <b-card-list :cardRecords="cardRecords" />
    <pagination-view :total='500'/>
  </main>
</template>

<script setup>
import BCardList from '@/blocks/CardList.vue'
import { blogViewConfig } from '@/view-provider/show/blog'
import PaginationView from '@/components/paginationView.vue'
const { cardRecords } = blogViewConfig
</script>

<style scoped>

</style>
