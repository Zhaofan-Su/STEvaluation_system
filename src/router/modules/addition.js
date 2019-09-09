/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const additionRouter = {
  path: '/addition',
  component: Layout,
  redirect: '/addition/first',
  name: 'Addition',
  meta: {
    title: '加分项',
    icon: 'nested'
  },
  children: [{
      path: 'first',
      component: () => import('@/views/addition/first'), // Parent router-view
      name: 'First',
      meta: {
        title: '一体化设计、采购、建造、管理综合平台（含虚拟建造）'
      },
    },
    {
      path: 'second',
      name: 'Second',
      component: () => import('@/views/addition/second'),
      meta: {
        title: '从虚拟建造到实际建造的衔接'
      }
    }
  ]
}

export default additionRouter
