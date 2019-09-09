/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const calculateRouter = {
  path: '/calculate',
  component: Layout,
  redirect: '/calculate/pre-rate',
  name: 'Calculate',
  meta: {
    title: '专项计算工具',
    icon: 'table'
  },
  children: [{
      path: 'pre-rate',
      component: () => import('@/views/calculate/pre-rate'),
      name: 'PreRate',
      meta: {
        title: '预制率计算'
      }
    },
    {
      path: 'assemble-rate',
      component: () => import('@/views/calculate/assemble-rate'),
      name: 'AssembleRate',
      meta: {
        title: '装配率计算'
      }
    },
    // {
    //   path: 'inline-edit-table',
    //   component: () => import('@/views/table/inline-edit-table'),
    //   name: 'InlineEditTable',
    //   meta: {
    //     title: 'Inline Edit'
    //   }
    // },
    // {
    //   path: 'complex-table',
    //   component: () => import('@/views/table/complex-table'),
    //   name: 'ComplexTable',
    //   meta: {
    //     title: 'Complex Table'
    //   }
    // }
  ]
}
export default calculateRouter
