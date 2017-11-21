<template>
  <div id="app">
  	<div class="box" style="width: 7.5rem;height: 44px;background: red;"></div>
  	<div class="bar">
  		<router-link :to="{name:'Home'}" exact><i class="bar-bottom-home"></i>首页</router-link>
			<router-link :to="{name:'Style'}"><i class="bar-bottom-cate"></i>分类</router-link>
			<router-link :to="{name:'Special'}"><i class="bar-bottom-zt"></i>专题</router-link>
			<router-link :to="{name:'Bag'}"><i class="bar-bottom-bag"></i>购物袋</router-link>
			<!--<router-link :to="{name:'Personal'}"><i class="bar-bottom-own"></i>我的</router-link>-->
			<router-link to="user"><i class="bar-bottom-own"></i>user</router-link>
  	</div>
  	<input type="button" value="后退" @click="backHandle" />
  	<input type="button" value="前进" @click="forwardHandle" />
  	<input type="button" value="控制前进后退的步数" @click="goHandle" />
  	<input type="button" value="控制指定的导航push" @click="pushHandle" />
  	<input type="button" value="控制指定的导航replace" @click="replaceHandle" />
  	<!--当前导航的下标：
  	{{$route.meta.index}}-->
  	<transition name="names">
	    <router-view class="center"/>
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route (to, from) {
      console.log(to.meta.index) // 目标导航的下标
      console.log(from.meta.index) // 离开导航的下标
      if (to.meta.index < from.meta.index) {
        this.names = 'right'
      } else {
        this.names = 'left'
      }
    }
  },
  data () {
    return {
      index: '/home',
      names: 'left'
    }
  },
  methods: {
    backHandle () {
      this.$router.back()
    },
    forwardHandle () {
      this.$router.forward()
    },
    goHandle () {
      this.$router.go(-1)
    },
    pushHandle () {
      this.$router.push({path: '/bag'})
    },
    replaceHandle () {
      this.$router.replace({path: '/bag'})
    }
  }
}
</script>

<style>
  .v-enter {
  	opacity: 0;
  }
  .v--enter-to {
  	opacity: 1;
  }
  .v-enter-active {
  	transition: 1s;
  }
  .v-leave {
  	opacity: 1;
  }
  .v-leave-to {
  	opacity: 0;
  }
  .v-leave-active {
  	transition: 1s;
  }
  .left-enter{
  	transform: translateX(100%);
  }
  .left-enter-to{
  	transform: translateX(0);
  }
  .left-enter-active,.left-leave-active{
  	transition: 1s;
  }
  .left-leave{
  	transform: translateX(0);
  }
  .left-leave-to{
  	transform: translateX(-100%);
  }
</style>
