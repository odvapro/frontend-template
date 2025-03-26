import { setActivePinia, createPinia } from 'pinia';
import { user } from '@/stores/user';

describe('User Store', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});

	it('Проверка начального состояния', () => {
		const store = user();
		expect(store.name).toBe('Levan Lazarov');
		expect(store.money).toBe(5000);
	});

	describe('Actions', () => {
		it('changeName', async () => {
			const store = user();
			const originalName = store.name;

			await store.changeName();

			expect(store.name).not.toBe(originalName);
			expect(store.name).toBeTypeOf('string');
		});

		it('addMoney: проверка увелечения денег на 100', () => {
			const store = user();
			const originalMoney = store.money;

			store.addMoney();

			expect(store.money).toBe(originalMoney + 100);
		});

		it('setToNull: проверка обнуления', () => {
			const store = user();

			store.setToNull();

			expect(store.money).toBe(0);
		});
	});

	describe('Getters', () => {
		it('multiple: провкрка увелечения денег на 2', () => {
			const store = user();

			expect(store.multiple).toBe(10000);

			store.money = 2500;
			expect(store.multiple).toBe(5000);
		});
	});
});