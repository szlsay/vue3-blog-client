<!-- eslint-disable vue/no-useless-template-attributes -->
<template>
  <main class="about">
    <a-card hoverable>
      <template #cover>
        <a-image alt="cover" :src="cover" />
      </template>
      <template class="ant-card-actions" #actions>
        <section v-for="action of actions" :key="action.text">
          {{ action.text }}
        </section>
      </template>
      <a-card-meta :title="title" :description="description">
        <template #avatar>
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </template>
      </a-card-meta>
    </a-card>
  </main>
</template>
<script setup>
import { aboutViewConfig } from '@/view-provider/show/about'
const { cover, title, description, actions } = aboutViewConfig
</script>

<style scoped>
.about {
  padding: 10px 50px;
  text-align: center;
}
</style>
