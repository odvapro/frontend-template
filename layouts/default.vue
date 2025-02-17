<script setup>
	// if page loading
	const nuxtApp = useNuxtApp();
	const loading = ref(false);

	nuxtApp.hook("page:start", () => loading.value = true);
	nuxtApp.hook("page:finish", () => loading.value = false);
</script>

<template>
	<div class="default-layout">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</template>

<style lang='scss'>
	
</style>