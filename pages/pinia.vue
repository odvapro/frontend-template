<script setup>
	useSeoMeta({
		title      : 'СТОР',
		description: 'СТОР - description',
		keywords   : 'СТОР - keywords',
	});

	const userStore = user();
</script>

<template>
	<div class="pinia container">
		<h1 class="g-h1">Работа со стором</h1>
		<div class="pinia__buttons">
			<ui-button @click="userStore.changeName()">Поменять имя пользователя</ui-button>
			<ui-button @click="userStore.addMoney()">Дать 100 рублей</ui-button>
			<ui-button @click="userStore.setToNull()">Ограбить</ui-button>
		</div>

		<div class="pinia__user-data">
			<p>
				имя: <b>{{ userStore.name }}</b>
			</p>
			<p>
				кошелек: <b>{{ formatPrice(userStore.money) }}</b>
			</p>
			<p>
				кошелек x2: <b>{{ formatPrice(userStore.multiple) }}</b>
			</p>
		</div>
	</div>
</template>

<style lang='scss'>
	.pinia__buttons
	{
		margin-bottom: 24px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 24px;
	}

	.pinia__user-data
	{
		padding: 24px;
		border-radius: 4px;
		border: 2px solid $black;

		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>