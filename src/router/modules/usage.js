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
      path: 'aircondition',
      component: () => import('@/views/usage/aircondition'),
      name: 'Aircondition',
      meta: {
        title: '供暖、通风与空调',
        noCache: true
      }
    },
    {
      path: 'automation',
      component: () => import('@/views/usage/automation'),
      name: 'Automation',
      meta: {
        title: '电气及自动化',
        noCache: true
      }
    },
    {
      path: 'drainage',
      component: () => import('@/views/usage/drainage'),
      name: 'Drainage',
      meta: {
        title: '给排水',
        noCache: true
      }
    },
    {
      path: 'material-select',
      component: () => import('@/views/usage/material-select'),
      name: 'MaterialSelect',
      meta: {
        title: '建筑材料的选用',
        noCache: true
      }
    },
    {
      path: 'recycle',
      component: () => import('@/views/usage/recycle'),
      name: 'Recycle',
      meta: {
        title: '建筑的回收再利用率',
        noCache: true
      }
    }
  ]
}

export default usageRouter
