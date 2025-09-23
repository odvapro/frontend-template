<script setup>
    useSeoMeta({
		title      : 'SHADCN',
		description: 'SHADCN - description',
		keywords   : 'SHADCN - keywords',
	});

    const value = ref('')
</script>

<template>
    <div class="shadcn container">
		<h1 class="g-h1">SHADCN компоненты</h1>
		<p>
			Чтобы добавить новый компонент следуйте этой документации:
			<a href="https://www.shadcn-vue.com/">https://www.shadcn-vue.com/</a>
		</p>
    </div>
</template>

<style lang='scss'>
    .shadcn
	{
		p { margin-bottom: 20px; }
		a { color: blue }
	}
</style>