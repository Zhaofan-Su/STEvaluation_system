import Layout from '@/layout'

const designRouter = {
  path: '/design',
  component: Layout,
  redirect: '/design/standard',
  alwaysShow: true, // will always show the root menu
  name: 'DesignPhase',
  meta: {
    title: '设计阶段',
    icon: 'edit',
  },
  children: [{
      path: 'page',
      component: () => import('@/views/design/standard'),
      name: 'Standard',
      meta: {
        title: '标准化设计',
      }
    },
    {
      path: 'pre-rate',
      component: () => import('@/views/design/pre-rate'),
      name: 'PreRate',
      meta: {
        title: '钢结构建筑构件预制率'
      }
    },
    {
      path: 'component-std',
      component: () => import('@/views/design/component-std'),
      name: 'ComponentStandard',
      meta: {
        title: '主体结构构件标准化',
      }
    },
    {
      path: 'assemble-rate',
      component: () => import('@/views/design/assemble-rate'),
      name: 'AssembleRate',
      meta: {
        title: '装配率',
      }
    },
    {
      path: 'intergration-tech',
      component: () => import('@/views/design/intergration-tech'),
      name: 'IntergrationTech',
      meta: {
        title: '建筑集成技术设计评分',
      }
    },
    {
      path: 'design-depth',
      component: () => import('@/views/design/design-depth'),
      name: 'Design-depth',
      meta: {
        title: '设计深度相关',
      }
    },
    {
      path: 'intergrate-decoration',
      component: () => import('@/views/design/intergrate-decoration'),
      name: 'IntergrateDecoration',
      meta: {
        title: '一体化装修设计',
      }
    },
    {
      path: 'information-tech',
      component: () => import('@/views/design/information-tech'),
      name: 'InformationTech',
      meta: {
        title: '信息化技术应用设计',
      }
    },
    {
      path: 'struct-safe',
      component: () => import('@/views/design/struct-safe'),
      name: 'StructSafe',
      meta: {
        title: '结构安全设计评估',
      }
    }
  ]
}

export default designRouter
