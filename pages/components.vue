<script setup>
	useSeoMeta({
		title      : 'Все компоненты',
		description: 'Все компоненты - description',
		keywords   : 'Все компоненты - keywords',
	});

	const inputs = ref({
		label: '',
		placeholder: '',
		disabled: '',
		phone: '',
		error: '',
		errorText: '',
	});
</script>

<template>
	<div class="components container">
		<h2 class="components__subtitle">
			Вариации кнопок
		</h2>
		<div class="components__wrapper">
			<UiButton>
				default
			</UiButton>
			<UiButton :size="'xl'">
				xl
			</UiButton>
			<UiButton :variant="'border'">
				border
			</UiButton>
			<UiButton :disabled="true">
				disabled
			</UiButton>
		</div>
		<h2 class="components__subtitle">
			Вариации инпутов
		</h2>
		<div class="components__wrapper">
			<UiInput
				v-model:value="inputs.label"
				type="text"
				:label="'Label input'"
				:placeholder="'label input'"
			/>
			<UiInput
				v-model:value="inputs.placeholder"
				type="text"
				:placeholder="'placeholder input'"
			/>
			<UiInput
				v-model:value="inputs.disabled"
				type="text"
				:disabled="true"
				:placeholder="'disabled input'"
			/>
			<UiInput
				v-model:value="inputs.phone"
				type="text"
				:isPhone="true"
				:placeholder="'phone input'"
			/>
			<UiInput
				v-model:value="inputs.error"
				type="text"
				:error="true"
				:placeholder="'error input'"
			/>
			<UiInput
				v-model:value="inputs.errorText"
				type="text"
				:error="true"
				:errorText="'errorText input'"
				:placeholder="'errorText input'"
			/>
		</div>
	</div>
</template>

<style lang='scss'>
	.components__subtitle
	{
		margin-bottom: 24px;
		font-size: 1.5rem;
	}

	.components__wrapper
	{
		margin-bottom: 24px;
		border: 2px solid $black;
		padding: 20px;
		border-radius: 4px;

		display: flex;
		align-items: end;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>