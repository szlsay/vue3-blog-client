<template>
  <main>
    <b-card-list :cardRecords="cardRecords" />
  </main>
</template>

<script>

import BCardList from '../../blocks/CardList.vue'
import { blogViewConfig } from '../../view-provider/show/blog'

export default {
  components: {
    BCardList
  },
  setup() {
    const { cardRecords } = blogViewConfig

    return {
      cardRecords
    }
  }
}
</script>

<style scoped>

</style>
