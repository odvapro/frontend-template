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
		<slot />
		<Footer />
	</div>

	<Teleport to="body">
		<HugePreloader v-if="loading" />
	</Teleport>
</template>
