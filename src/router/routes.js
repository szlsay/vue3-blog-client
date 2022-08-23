/**
 * 添加类型提示
 * @type {import ('vue-router').RouteRecordRaw[]}
 */

export const routes = [
  {
    path: '/:pathMatch(.*)*', // 404页面
    name: 'NotFound',
    component: () => import('../views/common/NotFound.vue')
  },
  {
    path: '/',
    redirect: '/show'
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import('../views/show/IndexView.vue'),
    children: [
      {
        path: '',
        redirect: '/show/blogs/1'
      },
      {
        path: 'blogs/:pageNum',
        name: 'ShowBlog',
        component: () => import('../views/show/BlogView.vue')
      },
      {
        path: 'books/:pageNum',
        name: 'ShowBook',
        component: () => import('../views/show/BookView.vue')
      },
      {
        path: 'projects',
        name: 'ShowProject',
        component: () => import('../views/show/ProjectView.vue')
      },
      {
        path: 'files',
        name: 'ShowFile',
        component: () => import('../views/show/FileView.vue')
      },
      {
        path: 'list',
        name: 'ShowList',
        component: () => import('../views/show/ListView.vue')
      },
      {
        path: 'about',
        name: 'ShowAbout',
        component: () => import('../views/show/AboutView.vue')
      }
    ]
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/manage/IndexView.vue'),
    children: [
      {
        path: '',
        redirect: '/manage/login'
      },
      {
        path: 'login',
        name: 'ManageLogin',
        component: () => import('../views/manage/LoginView.vue')
      },
      {
        path: 'editor',
        name: 'ManageEditor',
        component: () => import('../views/manage/EditorView.vue')
      },
      {
        path: 'articles/:pageNum',
        name: 'ManageArticle',
        component: () => import('../views/manage/ArticlesView.vue')
      }
    ]
  }
]
