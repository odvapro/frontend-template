<script setup>
	useSeoMeta({
		title      : 'NUXT-TEMPLATE',
		description: 'NUXT-TEMPLATE - description',
		keywords   : 'NUXT-TEMPLATE - keywords',
	});
</script>

<template>
	<div class="index-page container">
		<h1 class="g-h1">Добро пожаловать в наш "nuxt3-template"</h1>
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