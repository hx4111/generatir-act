import Vue from 'vue'
import Electron from 'vue-electron'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(ElementUI)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
