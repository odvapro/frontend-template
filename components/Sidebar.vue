<template>
	<aside class="sidebar">
		<div class="sidebar__content">
			<!-- Здесь может быть дополнительный контент для боковой панели -->
			<div class="sidebar__placeholder">
			</div>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'Sidebar'
	}
</script>

<style lang="scss" scoped>
	.sidebar
	{
		width: 380px;
		height: 535px;
		background: #F5F5F5;
		border-radius: 5px;
	}
	
	.sidebar__content
	{
		padding: 20px;
	}
	
	.sidebar__placeholder
	{
		text-align: center;
		color: #767676;
		font-family: 'Helvetica', sans-serif;
		font-size: 14px;
	}
</style>
