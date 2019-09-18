import Layout from '@/layout'

const designRouter = {
  path: '/design',
  component: Layout,
  redirect: '/design/basic',
  alwaysShow: true, // will always show the root menu
  name: 'DesignPhase',
  meta: {
    title: '设计阶段',
    icon: 'edit',
  },
  children: [{
      path: 'basic',
      component: () => import('@/views/design/basic'),
      name: 'DesignBasic',
      meta: {
        title: '基础项目',
      }
    },
    {
      path: 'evaluate',
      component: () => import('@/views/design/evaluate/index'),
      name: 'DesignEvaluate',
      meta: {
        title: '评分项目'
      },
      redirect: '/evaluate/index',
      children: [{
          path: 'standard',
          component: () => import('@/views/design/evaluate/standard'),
          name: 'Standard',
          meta: {
            title: '标准化设计'
          }
        },
        {
          path: 'pre-rate',
          component: () => import('@/views/design/evaluate/pre-rate'),
          name: 'PreRate',
          meta: {
            title: '钢结构建筑构件预制率'
          }
        },
        {
          path: 'component-std',
          component: () => import('@/views/design/evaluate/component-std'),
          name: 'ComponentStandard',
          meta: {
            title: '主体结构构件采用国标构件比例',
          }
        },
        {
          path: 'assemble-rate',
          component: () => import('@/views/design/evaluate/assemble-rate'),
          name: 'AssembleRate',
          meta: {
            title: '装配率',
          }
        },
        {
          path: 'intergration-tech',
          component: () => import('@/views/design/evaluate/intergration-tech'),
          name: 'IntergrationTech',
          meta: {
            title: '建筑集成技术设计评分',
          }
        },
        {
          path: 'design-depth',
          component: () => import('@/views/design/evaluate/design-depth'),
          name: 'Design-depth',
          meta: {
            title: '设计深度相关',
          }
        },
        {
          path: 'intergrate-decoration',
          component: () => import('@/views/design/evaluate/intergrate-decoration'),
          name: 'IntergrateDecoration',
          meta: {
            title: '一体化装修设计',
          }
        },
        {
          path: 'information-tech',
          component: () => import('@/views/design/evaluate/information-tech'),
          name: 'InformationTech',
          meta: {
            title: '信息化技术应用设计',
          }
        },
        {
          path: 'struct-safe',
          component: () => import('@/views/design/evaluate/struct-safe'),
          name: 'StructSafe',
          meta: {
            title: '结构安全设计评估',
          }
        }
      ]
    },

  ]
}

export default designRouter
