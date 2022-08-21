/**
 * 插件集
 * @type {import('vue').Plugin[]}
*/
import router from '@/router'
import store from '@/store'
import Antd from 'ant-design-vue'
const plugins = [router, store, Antd]
export const usePlugins = app => plugins.forEach(app.use, app)
