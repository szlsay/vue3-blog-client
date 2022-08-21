<template>
  <main>
    <b-card-list :cardRecords="cardRecords" />
  </main>
</template>

<script setup>
import BCardList from '@/blocks/CardList.vue'
import { blogViewConfig } from '@/view-provider/show/blog'
const { cardRecords } = blogViewConfig
</script>

<style scoped>

</style>
