<script setup>
	import { vOnClickOutside } from '@vueuse/components';

	const dialog = useConfirmDialogStore();
</script>

<template>
	<transition>
		<div
			v-if="dialog.isOpen"
			class="ui-confirm-dialog"
		>
			<div
				class="ui-confirm-dialog__content"
				v-on-click-outside.bubble="dialog.cancel"
			>
				<h3 class="ui-confirm-dialog__content-title">{{ dialog.title }}</h3>
				<p class="ui-confirm-dialog__content-description">{{ dialog.message }}</p>

				<div class="ui-confirm-dialog__content-buttons">
					<ui-button
						variant="border"
						@click.stop="dialog.cancel"
					>
						Отмена
					</ui-button>
					<ui-button
						@click.stop="dialog.confirm"
					>
						Подтвердить
					</ui-button>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="scss">
	.ui-confirm-dialog
	{
		padding: 16px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(3px);

		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.ui-confirm-dialog__content
	{
		max-width: 420px;
		width: 100%;

		background: $white;
		padding: 16px;
		border-radius: 4px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

		display: flex;
		flex-direction: column;
	}

	.ui-confirm-dialog__content-title
	{
		margin-bottom: 12px;
		font-size: 20px;
		font-weight: 600;
	}

	.ui-confirm-dialog__content-description
	{
		margin-bottom: 24px;
		font-size: 16px;
		font-weight: 400;
	}

	.ui-confirm-dialog__content-buttons
	{
		display: grid;
		grid-template-columns: 1fr;
		gap: 6px;

		.ui-button { width: 100%; }

		@include mq(500px) { grid-template-columns: 1fr 1fr; }
	}
</style>