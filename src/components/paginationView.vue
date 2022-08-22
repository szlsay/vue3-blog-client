<template>
  <a-pagination
    class="pagination"
    :total="total"
    :defaultPageSize="defaultPageSize"
    v-model:current="current"
    simple
    hideOnSinglePage
    @change="onCurrentPageNumChange"
  />
</template>

<script setup>
import { watchEffect } from 'vue'
import { useRouterParamChange } from '@/use/router'
import { usewindowScrollTo } from '@/use/scroll'
import { useLinkdRouteParam } from '@/use/route'

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  defaultPageSize: {
    type: Number,
    default: 5
  },
  hasScroll: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['change'])
const current = useLinkdRouteParam('pageNum')
watchEffect(() => {
  // 滚动效果平滑滚动上去
  if (props.hasScroll) {
    usewindowScrollTo({ top: 0 })
  }
  emit('change', current.value)
})
const pageNumParamChange = useRouterParamChange('pageNum')
const onCurrentPageNumChange = (pageNum) => pageNumParamChange(pageNum)
</script>

<style scoped>
.pagination {
  text-align: center;
}
</style>
