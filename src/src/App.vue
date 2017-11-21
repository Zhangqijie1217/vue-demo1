<template>
  <div id="app">
  	<div class="nav-box">
  		<ul class="nav">
  			<router-link to="/" exact tag="li" event="mouseover">
	  			<i class="fa fa-home"></i>
	  			<span>home</span>
  			</router-link>
  			<router-link :to="{ path:'/document#abc' }" event="mouseover" active-class="activeClass" tag="li">
  				<i class="fa fa-home"></i>
	  			<span>document</span>
  			</router-link>
  			<router-link :to="{ path:'/about' }" event="mouseover" tag="li">
  				<i class="fa fa-home"></i>
	  			<span>about</span>
  			</router-link>
  		</ul>
  	</div>
  	<router-view name="slider"></router-view>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/home'
    }
  }
}
</script>

<style>

</style>
