<script setup>

</script>

<template>
	<section class="hero-section">
		<h1 class="g-h1">
			WELCOME TO THE FRONTEND-TEMPLATE
		</h1>
		<div class="hero-section__buttons">
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
	</section>
</template>

<style lang='scss'>
	.hero-section__buttons
	{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}
</style>