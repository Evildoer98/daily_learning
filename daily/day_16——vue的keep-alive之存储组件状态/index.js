/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-28 22:29:30
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-28 22:40:15
 */
import Router from 'vue-router'

import index from '@/components/index'

import item_a from '@/components/item_a'
import item_b from '@/components/item_b'

Vue.use(Router)

export default new Router({
  routers: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/item_a',
      name: 'item_a',
      component: item_a,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/item_b',
      name: 'item_b',
      component: item_b,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
})