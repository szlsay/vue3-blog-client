<template>
  <a-page-header :title="title" :sub-title="subTitle" :avatar="avatar">
    <template #extra>
      <transition name="fade" mode="out-in">
      <a-button type="primary" v-if="backShowStatus" @click="backHomePage">
        <LeftSquareOutlined />返回首页
      </a-button>
      </transition>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </a-page-header>
</template>

<script>
import { useRoutePathToPage } from '../use/router'
import { useNotOnRouteWhiteListStatus } from '../use/route'

export default {
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  /**
   * 导入props中config中对象
   */
  setup(props) {
    const { avatar = {}, title, subTitle, unwantedBackWhiteList, homePath } =
      props.config || {}

    avatar.size = avatar.size || 'large' // 给默认值
    avatar.shape = avatar.shape || 'square' // 默认值

    const backHomePage = useRoutePathToPage(homePath) // 返回首页

    const backShowStatus = useNotOnRouteWhiteListStatus(unwantedBackWhiteList) // 不需要渲染返回首页的白名单
    return {
      avatar,
      title,
      subTitle,
      backHomePage,
      backShowStatus
    }
  }
}
</script>

<style>
</style>
