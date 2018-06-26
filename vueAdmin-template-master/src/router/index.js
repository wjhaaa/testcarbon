import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '基本信息', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '机场简介', icon: 'table' }
      },
      {
        path: 'tree',
        name: '排放报送年信息',
        component: () => import('@/views/tree/index'),
        meta: { title: '排放报送年信息', icon: 'tree' }
      },
      {
        path: 'password',
        name: '密码修改',
        component: () => import('@/views/password/index'),
        meta: { title: '密码修改', icon: 'tree' }
      }

    ]
  },

  {
    path: '/form',
    component: Layout,
    name: '年度排放报告',
    alwaysShow: true,
    meta: { title: '年度排放报告', icon: 'example' },
    children: [
      {
        path: 'index7',
        name: 'Form1',
        component: () => import('@/views/form/index'),
        meta: { title: '创建报告', icon: 'form' }
      },
      {
        path: 'index6',
        name: '边界管理',
        component: () => import('@/views/form/index'),
        meta: { title: '边界管理', icon: 'form' },
        children: [
          {
            path: 'index',
            name: '组织边界',
            meta: { title: '组织边界', icon: 'form' }
          },
          {
            path: 'index',
            name: '运营边界',
            meta: { title: '运营边界', icon: 'form' }
          }
        ]
      },
      {
        path: 'index5',
        name: '排放源及排放数据',
        component: () => import('@/views/form/index'),
        meta: { title: '排放源及排放数据', icon: 'form' },
        children: [
          {
            path: 'index',
            name: '范畴1 排放',
            meta: { title: '范畴1 排放', icon: 'form' }
          },
          {
            path: 'index',
            name: '范畴2 排放',
            meta: { title: '范畴2 排放', icon: 'form' }
          }
        ]
      },
      {
        path: 'index4',
        name: '年度碳排放汇总',
        component: () => import('@/views/form/index'),
        meta: { title: '年度碳排放汇总', icon: 'form' }
      },
      {
        path: 'index3',
        name: '碳排放报告下载',
        component: () => import('@/views/form/index'),
        meta: { title: '碳排放报告下载', icon: 'form' }
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    name: '碳排放数据统计与分析',
    meta: { title: '碳排放数据统计与分析', icon: 'example' },
    children: [
      {
        path: 'index2',
        name: '数据统计与分析',
        meta: { title: '数据统计与分析', icon: 'form' },
        children: [
          {
            path: 'index',
            name: '统计分析',
            meta: { title: '统计分析', icon: 'form' }
          },
          {
            path: 'index',
            name: '对比分析',
            meta: { title: '对比分析', icon: 'form' }
          }
        ]
      },
      {
        path: 'index1',
        name: '补充数据',
        meta: { title: '补充数据', icon: 'form' },
        children: [
          {
            path: 'index',
            name: '航空公司',
            meta: { title: '航空公司', icon: 'form' }
          },
          {
            path: 'index',
            name: '机场',
            meta: { title: '机场', icon: 'form' }
          }
        ]
      }
    ]
  },
  {
    path: '/news',
    component: Layout,
    name: '碳排放资讯浏览',
    alwaysShow: true,
    meta: { title: '碳排放资讯浏览', icon: 'example' },
    children: [
      {
        path: '资讯浏览',
        name: 'Form2',
        component: () => import('@/views/form/index'),
        meta: { title: '资讯浏览', icon: 'form' }
      }
    ]
  },
  {
    path: '/news',
    component: Layout,
    name: ' 碳配额分配预测及管理 ',
    alwaysShow: true,
    meta: { title: ' 碳配额分配预测及管理 ', icon: 'example' },
    children: [
      {
        path: ' 配额分配预测 ',
        name: 'Form3',
        component: () => import('@/views/form/index'),
        meta: { title: ' 配额分配预测 ', icon: 'form' }
      },
      {
        path: ' 配额管理 ',
        name: 'Form4',
        component: () => import('@/views/form/index'),
        meta: { title: ' 配额管理 ', icon: 'form' }
      }
    ]
  },
  {
    path: '/formula_comparative',
    component: Layout,
    name: ' 建设方案碳排放对比评估 ',
    alwaysShow: true,
    meta: { title: ' 建设方案碳排放对比评估 ', icon: 'example' },
    children: [
      {
        path: ' developmentScheme ',
        name: 'Form5',
        component: () => import('@/views/development_scheme/index'),
        meta: { title: '建设方案碳排放对比', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
