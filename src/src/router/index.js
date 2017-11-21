import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'
import noFound from '@/components/404'
import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import slider from '@/views/slider'
Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active', //  全局设置
  scrollBehavior (to, from, savePosition) { // 点击浏览器的前进后退或者切换导航的时候触发
    console.log(to) // 要进入的目标路由对象  要去向哪里
    console.log(from) // 离开的路由对象  从哪里来
    console.log(savePosition) // 记录滚动条的坐标 点击前进后退的时候记录值
    /* if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    } */
    if (to.hash) {
      return {
        select: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias: '/index'
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: '/study', //  默认的子路由  /about
          name: 'Study',
          component: study
        },
        {
          path: '/about', //  /about/work
          name: 'About',
          component: work
        },
        {
          path: '/hobby', //  /hobby是根路径
          name: 'Hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/document',
      name: 'Document',
      components: {
        default: document,
        slider: slider
      }
    },
    {
      path: '*',
      //  component: noFound
     //  重定向
      //  redirect: '/home'
      //  redirect: {path: '/home'}
      //  redirect: {name: '/About'}
      redirect: (to) => {  //  动态设置重定向目标
        //  to是目标路由对象，就是访问的路径的路由信息
        //  return '/home'
        console.log(to)
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/456') {
          return {path: '/document'}
        } else {
          return {name: 'About'}
        }
      }
    }
  ]
})
export default router
