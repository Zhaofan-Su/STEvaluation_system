/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '建造阶段',
    icon: 'component'
  },
  children: [{
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: {
        title: '预制构件生产制作及质量控制'
      }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: 'MarkdownDemo',
      meta: {
        title: '预制构件运输管理'
      }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'JsonEditorDemo',
      meta: {
        title: '装配化施工组织与管理'
      }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'SplitpaneDemo',
      meta: {
        title: '装配化施工技术与工艺'
      }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: {
        title: '装配化施工质量'
      }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/components-demo/dropzone'),
      name: 'DropzoneDemo',
      meta: {
        title: '一体化装修技术与施工工艺'
      }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: {
        title: '室内装修工程'
      }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: 'CountToDemo',
      meta: {
        title: '信息化管理'
      }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: {
        title: '资源节约与环保效果'
      }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: {
        title: '现场施工人工用量'
      }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: {
        title: 'Drag Dialog'
      }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: {
        title: 'Drag Select'
      }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: {
        title: 'Dnd List'
      }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: {
        title: 'Drag Kanban'
      }
    }
  ]
}

export default componentsRouter
