<template>
  <main>
    <a-card title="赞助列表">
      <a-timeline mode="alternate">
        <a-timeline-item
          v-for="record of cardRecords"
          :key="record.id"
          :color="useRandomColor()">
          <a-button @click="record.handle">
            {{ record.content }}——————{{ record.time }}
          </a-button>
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </main>
</template>

<script setup>
import { listViewConfig } from '@/view-provider/show/list.js'
import { useRandomColor } from '@/use/color'
const { cardRecords } = listViewConfig
</script>

<style></style>
