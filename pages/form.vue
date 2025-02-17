<script setup>
	useSeoMeta({
		title      : 'ФОРМА',
		description: 'ФОРМА - description',
		keywords   : 'ФОРМА - keywords',
	});

	// import usable functional
	import { required, minLength, email } from '@vuelidate/validators';
	import { useVuelidate }               from '@vuelidate/core';

	// validation and form functionality
	const form = reactive({
		name: '',
		email: '',
		phone: '',
	});

	const rules = {
		phone: { required, minLengthValue: minLength(18) },
		name: { required },
		email: { required, email },
	};
	const v$ = useVuelidate(rules, form);

	const submit = () => {
		v$.value.$touch();

		if (v$.value.$invalid)
			return;

		useToast('success', 'Форма отправлена');

		form.name = '';
		form.email = '';
		form.phone = '';

		v$.value.$reset();
	}
</script>

<template>
	<div class="container">
		<h1 class="g-h1">This is a form</h1>
		<form class="form" @submit.prevent="submit">
			<UiInput
				v-model:value="form.phone"
				type="tel"
				label="Номер телефона"
				placeholder="Номер телефона"
				:error="v$.phone.$dirty && v$.phone.$invalid"
				:is-phone="true"
			/>
			<UiInput
				v-model:value="form.name"
				type="text"
				label="Введите имя"
				placeholder="Введите имя"
				:error="v$.name.$dirty && v$.name.$invalid"
			/>
			<UiInput
				v-model:value="form.email"
				type="email"
				label="Введите почту"
				placeholder="Введите почту"
				:error="v$.email.$dirty && v$.email.$invalid"
			/>
			<UiButton>
				Отправить
			</UiButton>
		</form>
	</div>
</template>

<style lang='scss'>
	.form
	{
		max-width: 500px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>