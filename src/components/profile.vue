<template>
	<div class="profile">
	    <span>Hello, {{ $route.params.username }}!</span>
	</div>
</template>
	
<script>
	export default {
	    name: 'profile'
	}
</script>
