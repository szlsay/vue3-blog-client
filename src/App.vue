<template>
<b-header :config="appViewConfig" />
<router-view />
 <!-- <a-config-provider :locale="locale">
  <b-header :config="appViewConfig" />
  <router-view />
  <a-back-top/>
  </a-config-provider> -->
</template>

<script>
import BHeader from './blocks/headerView.vue'
import { appViewConfig } from '../src/view-provider/app.js'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default {
  components: {
    BHeader
  },
  setup() {
    return {
      appViewConfig, locale: zhCN
    }
  }
}
</script>

<style>
@import url("./style.css");
</style>
