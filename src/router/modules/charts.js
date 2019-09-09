/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '使用阶段',
    icon: 'chart'
  },
  children: [{
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: {
        title: '供暖、通风与空调',
        noCache: true
      }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: {
        title: '电气及自动化',
        noCache: true
      }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: {
        title: '给排水',
        noCache: true
      }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: {
        title: '建筑材料的选用',
        noCache: true
      }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: {
        title: '建筑的回收再利用率',
        noCache: true
      }
    }
  ]
}

export default chartsRouter
