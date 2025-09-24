export const useConfirmDialogStore = defineStore('confirmDialog', () => {
	const confirmAction = ref(null);
	const cancelAction  = ref(null);
	const message       = ref('Вы уверены, что хотите выполнить это действие?');
	const isOpen        = ref(false);
	const title         = ref('Подтвердите действие');

	const openDialog = (options) => {
		confirmAction.value = options.onConfirm || (() => {});
		cancelAction.value  = options.onCancel || (()  => {});
		message.value       = options.message || 'Вы уверены, что хотите выполнить это действие?';
		isOpen.value        = true;
		title.value         = options.title || 'Подтвердите действие';
	};

	const closeDialog = () => { isOpen.value = false; };

	const confirm = () => {
		if (confirmAction.value)
			confirmAction.value();

		closeDialog();
	};

	const cancel = ()  => {
		if (cancelAction.value)
			cancelAction.value();

		closeDialog();
	};

	return {
		isOpen,
		title,
		message,
		openDialog,
		closeDialog,
		confirm,
		cancel,
	};
});