/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const usageRouter = {
  path: '/usage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'UsagePhase',
  meta: {
    title: '使用阶段',
    icon: 'chart'
  },
  children: [{
      path: 'basic',
      component: () => import('@/views/usage/basic'),
      name: 'UsageBasic',
      meta: {
        title: '基础项目'
      }
    }, {
      path: 'evaluate',
      component: () => import('@/views/usage/evaluate/index'),
      name: 'UsageEvaluate',
      meta: {
        title: '评分项目'
      },
      children: [{
        path: '/evaluate/aircondition',
        component: () => import('@/views/usage/evaluate/aircondition'),
        name: 'Aircondition',
        meta: {
          title: '供暖、通风与空调',
          noCache: true
        }
      }, {
        path: '/evaluate/automation',
        component: () => import('@/views/usage/evaluate/automation'),
        name: 'Automation',
        meta: {
          title: '电气及自动化',
          noCache: true
        }
      }, {
        path: '/evaluate/drainage',
        component: () => import('@/views/usage/evaluate/drainage'),
        name: 'Drainage',
        meta: {
          title: '给排水',
          noCache: true
        }
      }, {
        path: '/evaluate/material-select',
        component: () => import('@/views/usage/evaluate/material-select'),
        name: 'MaterialSelect',
        meta: {
          title: '建筑材料的选用',
          noCache: true
        }
      }, {
        path: '/evaluate/recycle',
        component: () => import('@/views/usage/evaluate/recycle'),
        name: 'Recycle',
        meta: {
          title: '建筑的回收再利用率',
          noCache: true
        }
      }]
    }

  ]
}

export default usageRouter
