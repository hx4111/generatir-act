export default [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['./view/index.vue'], resolve),
    children: [
        {
            path: '/generator-index',
            component: resolve => require(['./view/generator-index.vue'], resolve),
        }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
