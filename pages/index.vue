<script setup>
	useSeoMeta({
		title      : 'FRONTEND-TEMPLATE',
		description: 'FRONTEND-TEMPLATE',
		keywords   : 'FRONTEND-TEMPLATE',
	});
</script>

<template>
	<div class="index-page">
		<h1 class="g-h1">WELCOME TO THE FRONTEND-TEMPLATE</h1>
		<div class="index-page__buttons">
			<NuxtLink to="/form">
				<UiButton>
					показать форму
				</UiButton>
			</NuxtLink>
			<NuxtLink to="/components">
				<UiButton :variant="'border'">
					показать UI компоненты
				</UiButton>
			</NuxtLink>
		</div>
	</div>
</template>

<style lang='scss'>
	.index-page__buttons
	{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}
</style>