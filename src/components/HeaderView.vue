<template>
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
    <template #tags>
      <a-tag color="success">Tag 1</a-tag>
      <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
      <a-tag closable @close="log">Tag 2</a-tag>
      <a-tag closable @close.prevent>Prevent Default</a-tag>
    </template>
    <template #extra>
      <a-button type="primary">首页</a-button>
      <a-button type="primary">归档</a-button>
      <a-button type="primary">关于</a-button>
    </template>
  </a-page-header>
</template>
<script setup>
import { reactive, ref } from 'vue'
const log = (e) => {
  alert(e)
}
const avatar = reactive({
  src: 'https://avatars.githubusercontent.com/u/13865738?s=96&v=4'
})
const src = ref(
  'https://img1.baidu.com/it/u=668926479,2261779851&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661187600&t=51ff3acffb60dbe564c082edd3e1efc5'
)
</script>
<style scoped></style>
