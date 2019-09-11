/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const constructRouter = {
  path: '/construct',
  component: Layout,
  redirect: 'noRedirect', //这边也许要改
  alwaysShow: true,
  name: 'ConstructPhase',
  meta: {
    title: '建造阶段',
    icon: 'component'
  },
  children: [{
      path: 'basic',
      component: () => import('@/views/construct/basic'),
      name: 'ConstructBasic',
      meta: {
        title: '基础项目'
      }
    },
    {
      path: 'evaluate',
      component: () => import('@/views/construct/evaluate/index'),
      name: 'ConstructEvaluate',
      redirect: '/evaluate/index',
      meta: {
        title: '评分项目'
      },
      children: [{
          path: 'concept',
          component: () => import('@/views/construct/evaluate/concept-evaluate'),
          name: 'ConstructConcept',
          meta: {
            title: '概念评分项目'
          }
        },
        {
          path: 'produce-quality',
          component: () => import('@/views/construct/evaluate/produce-quality'),
          name: 'ProduceQuality',
          meta: {
            title: '预制构件生产制作及质量控制'
          }
        }, {
          path: 'transport',
          component: () => import('@/views/construct/evaluate/transport'),
          name: 'Transport',
          meta: {
            title: '预制构件运输管理'
          }
        }, {
          path: 'org-manage',
          component: () => import('@/views/construct/evaluate/org-manage'),
          name: 'OrgManage',
          meta: {
            title: '装配化施工组织与管理'
          }
        }, {
          path: 'construct-tech',
          component: () => import('@/views/construct/evaluate/construct-tech'),
          name: 'ConstructTech',
          meta: {
            title: '装配化施工技术与工艺'
          }
        }, {
          path: 'construct-quality',
          component: () => import('@/views/construct/evaluate/construct-quality'),
          name: 'ConstrutQuality',
          meta: {
            title: '装配化施工质量'
          }
        }, {
          path: 'intergrate-tech',
          component: () => import('@/views/construct/evaluate/intergrate-tech'),
          name: 'IntergrateTech',
          meta: {
            title: '一体化装修技术与施工工艺'
          }
        }, {
          path: 'inter-renovation',
          component: () => import('@/views/construct/evaluate/inter-renovation'),
          name: 'InterRenovation',
          meta: {
            title: '室内装修工程'
          }
        }, {
          path: 'infor-manage',
          component: () => import('@/views/construct/evaluate/infor-manage'),
          name: 'InformationManage',
          meta: {
            title: '信息化管理'
          }
        }, {
          path: 'save-protection',
          component: () => import('@/views/construct/evaluate/save-protection'),
          name: 'SaveProtection',
          meta: {
            title: '资源节约与环保效果'
          }
        }, {
          path: 'workers',
          component: () => import('@/views/construct/evaluate/workers'),
          name: 'Workers',
          meta: {
            title: '现场施工人工用量'
          }
        },

      ]
    },


  ]
}

export default constructRouter
