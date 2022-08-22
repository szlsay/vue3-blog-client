<template>
  <main>
    <a-card title="开源">
      <a-timeline>
        <a-timeline-item
          v-for="record of cardRecords"
          :key="record.id"
          :color="useRandomColor()"
        >
          <a-button @click="record.handle">
            {{ record.content }}
          </a-button>
        </a-timeline-item>
      </a-timeline>
    </a-card>
  </main>
</template>

<script setup>
import { projectViewConfig } from '@/view-provider/show/project'
import { useRandomColor } from '@/use/color'
const { cardRecords } = projectViewConfig
</script>

<style></style>
