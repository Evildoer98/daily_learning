import Vue from 'vue'
import Router from 'vue-router'

import index from '../index.vue'
import a_item from '../components/a_item.vue'
import b_item from '../components/b_item.vue'

Vue.use(Router)

let route = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/a_item',
      name: 'a_item',
      component: a_item,
      // 某个路由
      beforeEnter: (to, from, next) => {
        next(false)
      }
    },{
      path: '/b_item',
      name: 'b_item',
      component: b_item
    }
  ]
})

// 全局
router.befroeEach((to, from, next) => {
  next(true)
})
export default router