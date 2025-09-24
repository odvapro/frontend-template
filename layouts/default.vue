<script setup>
	// if page loading
	const nuxtApp = useNuxtApp();
	const loading = ref(false);

	nuxtApp.hook("page:start", () => loading.value = true);
	nuxtApp.hook("page:finish", () => {
		loading.value = false;
		getScrollWidth();
	});
</script>

<template>
	<div class="default-layout">
		<Header />
		<main class="default-layout__main">
			<slot />
		</main>
		<!-- <Footer /> -->
	</div>

	<Teleport to="body">
		<HugePreloader v-if="loading" />
		<UiConfirmDialog />
	</Teleport>
</template>

<style lang="scss">

</style>