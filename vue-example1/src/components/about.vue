<template>
	<div>
		关于我们
		<hr />
		<ul class="nav">
			<!--<router-link to="/about" exact tag="li">
				<a>study</a>
			</router-link>
			<router-link to="/about/work" tag="li">
				<a>work</a>
			</router-link>
			<router-link to="/about/hobby" tag="li">
				<a>hobby</a>
			</router-link>-->
			<router-link :to="{name:'Study'}" exact tag="li">
				<a>study</a>
			</router-link>
			<router-link :to="{name:'Work'}" tag="li">
				<a>work</a>
			</router-link>
			<router-link :to="{name:'Hobby'}" tag="li">
				<a>hobby</a>
			</router-link>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style>
</style>