<template>
 <a-config-provider :locale="locale">
  <b-header :config="appViewConfig" />
  <router-view />
  <a-back-top />
  </a-config-provider>
</template>

<script setup>
import BHeader from '@/blocks/headerView.vue'
import { appViewConfig } from '@/view-provider/app.js'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
const locale = zhCN
// import { ConfigProvider, BackTop } from 'ant-design-vue'

// export default {
//   components: {
//     BHeader,
//     AConfigProvider: ConfigProvider,
//     ABackTop: BackTop
//   },
//   setup() {
//     return {
//       appViewConfig, locale: zhCN
//     }
//   }
// }
</script>

<style>
@import url("./style.css");
</style>
