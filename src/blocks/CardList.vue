<template>
  <!-- 内容里的卡片区域 -->
  <section class="card-list">
    <a-card
      v-for="record of cardRecords"
      :key="record.id"
      :title="record.title"
      :extra="record.time"
      class="card"
      hoverable
    >
      {{ record.content }}
    </a-card>
  </section>
</template>
<script setup>
const props = defineProps({
  cardRecords: {
    type: Array,
    default: () => []
  }
})
const cardRecords = props.cardRecords || []
</script>

<style scoped>
.card {
  margin: 20px 0;
}
.card-list {
  padding-bottom: 15px;
}
</style>
