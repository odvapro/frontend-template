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
		icon: '',
	});

	const checkbox = ref(false);
	const checkboxError = ref(false);
</script>

<template>
	<div class="components container">
		<!-- кнопки -->
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

		<!-- инпуты -->
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
				v-model:value="inputs.icon"
				type="text"
				:placeholder="'icon input'"
				@triggerIcon="useToast('info', 'click icon')"
			>
				<IconsClose />
			</UiInput>
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

		<!-- уведомления -->
		<h2 class="components__subtitle">
			Вариации уведомлений
		</h2>
		<div class="components__wrapper">
			<UiButton @click="useToast('success', 'success')">
				success
			</UiButton>
			<UiButton @click="useToast('warning', 'warning')">
				warning
			</UiButton>
			<UiButton @click="useToast('info', 'info')">
				info
			</UiButton>
			<UiButton @click="useToast('error', 'error')">
				error
			</UiButton>
		</div>

		<!-- аккордеон -->
		<h2 class="components__subtitle">
			аккордеон
		</h2>
		<div class="components__wrapper">
			<UiAccordion :title="'это аккордеон'">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt odio sed, rem nisi aliquam tempora reprehenderit, porro quos rerum atque similique, cupiditate at modi molestias harum? Quas, veniam numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt odio sed, rem nisi aliquam tempora reprehenderit, porro quos rerum atque similique, cupiditate at modi molestias harum? Quas, veniam numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt odio sed, rem nisi aliquam tempora reprehenderit, porro quos rerum atque similique, cupiditate at modi molestias harum? Quas, veniam numquam.
			</UiAccordion>
		</div>

		<!-- skeleton -->
		<h2 class="components__subtitle">
			skeleton
		</h2>
		<div class="components__wrapper">
			<UiSkeleton v-for="el in 10" :key="el" />
		</div>

		<!-- checkbox -->
		<h2 class="components__subtitle">
			checkbox
		</h2>
		<div class="components__wrapper">
			<UiCheckbox v-model:value="checkbox">checkbox {{ checkbox }}</UiCheckbox>
			<UiCheckbox v-model:value="checkboxError" :error="!checkboxError ? true : false">checkboxError {{ checkboxError }}</UiCheckbox>
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

		.ui-skeleton
		{
			width: 200px;
			height: 100px;
		}
	}
</style>