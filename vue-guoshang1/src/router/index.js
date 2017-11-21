import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import style from '@/components/style'
import special from '@/components/special'
import bag from '@/components/bag'
import personal from '@/components/personal'
import user from '@/components/user'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '',
      name: 'Home',
      component: home,
      meta: {
        index: 0
      }
    },
    {
      path: '/user/:tip?/:userId?',  // /user/vip/1    /user/common/2   /user
      component: user,
      meta: {
        index: 4
      }
    },
    {
      path: '/style',
      name: 'Style',
      component: style,
      meta: {
        index: 1
      }
    },
    {
      path: '/special',
      name: 'Special',
      component: special,
      meta: {
        index: 2
      }
    },
    {
      path: '/bag',
      name: 'Bag',
      component: bag,
      meta: {
        index: 3
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: personal
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
})
export default router
