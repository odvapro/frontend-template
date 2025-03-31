import { mount } from '@vue/test-utils';
import Form 	 from '@/pages/form.vue';
import { mockNuxtImport } from '@nuxt/test-utils/runtime';

// Mock Nuxt hooks
mockNuxtImport('useSeoMeta', () => {
	return async () => ({
		title      : 'ФОРМА',
		description: 'ФОРМА - description',
		keywords   : 'ФОРМА - keywords',
	});
})

test('Проверка валидации обязательных полей', async () =>  {
	const wrapper = mount(Form, {
		global: {
			directives: {
				maska: {}
			}
		}
	});

	const v$ = wrapper.vm.v$;

	expect(v$.$invalid).toBe(true);

	expect(v$.$touch());

	expect(v$.email.$errors).toHaveLength(1);
	expect(v$.email.$errors[0].$message).toBe('Value is required');

	expect(v$.name.$errors).toHaveLength(1);
	expect(v$.name.$errors[0].$message).toBe('Value is required');

	expect(v$.phone.$errors).toHaveLength(1);
	expect(v$.phone.$errors[0].$message).toBe('Value is required');

})


test('Проверка отправки формы с пустыми полями', async () => {
	const mockToast = vi.fn();

	const wrapper = mount(Form, {
		global: {
			directives: {
				maska: {}
			},
			mocks: {
				useToast: mockToast,
			},
		}
	});

	// Вызываем метод submit
	await wrapper.vm.submit();

	// Проверяем, что форма не была отправлена
	expect(mockToast).not.toHaveBeenCalled();
});

test('Проверка отправки формы с валидными полями', async () => {
	vi.mock('~/composables/useToast', () => ({
		useToast: vi.fn().mockReturnValue(() => {}),
	}));

	const wrapper = mount(Form, {
		global: {
			directives: {
				maska: {}
			},
		}
	});

	await wrapper.find('input[type="email"]').setValue('test@example.com');
	await wrapper.find('input[type="text"]').setValue('Test test test');
	await wrapper.find('input[type="tel"]').setValue('+7 (111) 111-11-11');

	await wrapper.vm.submit();
	expect(useToast).toHaveBeenCalled();
	vi.clearAllMocks();
});

test('Проверка отправки формы с не валидными полями', async () => {
	vi.mock('~/composables/useToast', () => ({
		useToast: vi.fn().mockReturnValue(() => {}),
	}));

	const wrapper = mount(Form, {
		global: {
			directives: {
				maska: {}
			},
		}
	});

	await wrapper.find('input[type="email"]').setValue('test@examm');
	await wrapper.find('input[type="text"]').setValue('T');
	await wrapper.find('input[type="tel"]').setValue('+7');

	await wrapper.vm.submit();
	expect(useToast).not.toHaveBeenCalled();
});
