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
      path: 'produce-quality',
      component: () => import('@/views/construct/produce-quality'),
      name: 'ProduceQuality',
      meta: {
        title: '预制构件生产制作及质量控制'
      }
    },
    {
      path: 'transport',
      component: () => import('@/views/construct/transport'),
      name: 'Transport',
      meta: {
        title: '预制构件运输管理'
      }
    },
    {
      path: 'org-manage',
      component: () => import('@/views/construct/org-manage'),
      name: 'OrgManage',
      meta: {
        title: '装配化施工组织与管理'
      }
    },
    {
      path: 'construct-tech',
      component: () => import('@/views/construct/construct-tech'),
      name: 'ConstructTech',
      meta: {
        title: '装配化施工技术与工艺'
      }
    },
    {
      path: 'construct-quality',
      component: () => import('@/views/construct/construct-quality'),
      name: 'ConstrutQuality',
      meta: {
        title: '装配化施工质量'
      }
    },
    {
      path: 'intergrate-tech',
      component: () => import('@/views/construct/intergrate-tech'),
      name: 'IntergrateTech',
      meta: {
        title: '一体化装修技术与施工工艺'
      }
    },
    {
      path: 'inter-renovation',
      component: () => import('@/views/construct/inter-renovation'),
      name: 'InterRenovation',
      meta: {
        title: '室内装修工程'
      }
    },
    {
      path: 'infor-manage',
      component: () => import('@/views/construct/infor-manage'),
      name: 'InformationManage',
      meta: {
        title: '信息化管理'
      }
    },
    {
      path: 'save-protection',
      component: () => import('@/views/construct/save-protection'),
      name: 'SaveProtection',
      meta: {
        title: '资源节约与环保效果'
      }
    },
    {
      path: 'workers',
      component: () => import('@/views/construct/workers'),
      name: 'Workers',
      meta: {
        title: '现场施工人工用量'
      }
    },
    // {
    //   path: 'drag-dialog',
    //   component: () => import('@/views/components-demo/drag-dialog'),
    //   name: 'DragDialogDemo',
    //   meta: {
    //     title: 'Drag Dialog'
    //   }
    // },
    // {
    //   path: 'drag-select',
    //   component: () => import('@/views/components-demo/drag-select'),
    //   name: 'DragSelectDemo',
    //   meta: {
    //     title: 'Drag Select'
    //   }
    // },
    // {
    //   path: 'dnd-list',
    //   component: () => import('@/views/components-demo/dnd-list'),
    //   name: 'DndListDemo',
    //   meta: {
    //     title: 'Dnd List'
    //   }
    // },
    // {
    //   path: 'drag-kanban',
    //   component: () => import('@/views/components-demo/drag-kanban'),
    //   name: 'DragKanbanDemo',
    //   meta: {
    //     title: 'Drag Kanban'
    //   }
    // }
  ]
}

export default constructRouter
