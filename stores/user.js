export const useUserStore = defineStore('user', () => {
	// refs
	const name = ref('Levan Lazarov');
	const money = ref(5000);

	// functions
	const changeName = () => {
		const names = ['Levan Lazarov', 'Oddy Sav', 'Even Yell', 'Morgen', 'Islam', 'Хабибушка', 'Олег Галкин']
		const newName = names[Math.floor(Math.random() * names.length)];
		name.value = newName;
	};

	const addMoney = () => money.value += 100;
	const setToNull = () => money.value = 0;

	// computed
	const multiple = computed(() => money.value * 2);

	return {
		name,
		money,
		changeName,
		addMoney,
		setToNull,
		multiple,
	};
});