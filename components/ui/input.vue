<script setup>
	const props = defineProps({
		type       : { type: String, default : 'text', },
		value      : { type: String, required: true },
		label      : { type: String, default : '' },
		placeholder: { type: String, default : '' },
		errorText  : { type: String, default: false },
		error      : { type: Boolean, default: false },
		disabled   : { type: Boolean, default: false },
		isPhone    : { type: Boolean, default: false },
	});
	const emit = defineEmits(['update:value']);

	// vars
	const focus = ref(false);
	const inputRef = ref(null);

	// functions
	const focusInput = () => {
		if (inputRef.value)
			inputRef.value.focus();
	};
	const updateValue = (value) => emit('update:value', value);
</script>

<template>
	<div
		class="ui-input"
		:class="{
			'active': focus || value,
			'disabled': disabled,
			'error': error,
		}"
	>
		<label
			v-if="label"
			class="ui-input__label"
			@click="focusInput"
		>
			{{ label }}
		</label>

		<input
			v-if="!isPhone"
			class="ui-input__input"
			ref="inputRef"
			:type="type"
			:value="value"
			:placeholder="placeholder"
			:disabled="disabled"
			@focus="focus = true"
			@blur="focus = false"
			@input="updateValue($event.target.value)"
		>
		<input
			v-else
			class="ui-input__input"
			ref="inputRef"
			v-maska
			data-maska="+7 (###) ###-##-##"
			:type="type"
			:value="value"
			:placeholder="placeholder"
			:disabled="disabled"
			@focus="focus = true"
			@blur="focus = false"
			@input="updateValue($event.target.value)"
		>

		<span v-if="errorText" class="ui-input__error-text">{{ errorText }}</span>
	</div>
</template>

<style lang='scss'>
	.ui-input
	{
		&.active
		{
			.ui-input__input { border-color: $black; }
		}

		&.error
		{
			.ui-input__input { border-color: $red; }
		}

		&.disabled { cursor: not-allowed; }
	}

	.ui-input__label
	{
		width: max-content;
		display: block;
		margin-bottom: 5px;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 500;
		color: $black;

		@include transition();
	}

	.ui-input__input
	{
		// default
		width: 100%;
		padding: 10px 15px;
		border: 2px solid $gray;
		outline: none;
		border-radius: 4px;
		background-color: $white;
		color: $black;
		font-size: 1rem;
		@include transition();

		// effects
		&:hover { border-color: $black; }
		&::placeholder { color: $gray; }
		&:disabled
		{
			pointer-events: none;
			opacity: .5;
		}
	}

	.ui-input__error-text
	{
		display: block;
		margin-top: 5px;
		color: $red;
		font-size: .75rem;
	}
</style>