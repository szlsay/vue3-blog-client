<template>
  <div class="components-page-header-demo-content">
    <a-page-header
      title="Title"
      class="site-page-header"
      sub-title="This is a subtitle"
      :avatar="avatar"
    >
    </a-page-header>
    <a-page-header>
      <template #title>
        <a-avatar :src="src" size="large" shape="square"></a-avatar>
      </template>
    </a-page-header>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const avatar = reactive({
  src: 'https://avatars.githubusercontent.com/u/13865738?s=96&v=4'
})
const src = ref('https://img1.baidu.com/it/u=668926479,2261779851&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661187600&t=51ff3acffb60dbe564c082edd3e1efc5')
</script>
<style scoped></style>
