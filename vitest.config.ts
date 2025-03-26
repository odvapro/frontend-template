import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } 	  from 'node:url';

export default defineVitestConfig({
	resolve:
	{
		alias: // Алиасы для Nuxt
		{
			'@': fileURLToPath(new URL('./', import.meta.url)),
			'~': fileURLToPath(new URL('./', import.meta.url)),
		},
	},
	test:
	{
		environment: 'jsdom', // Используем jsdom для эмуляции DOM
		globals: true,        // Включаем глобальные переменные
		coverage:
		{
			provider: 'v8',
			reporter: ['text', 'json', 'html'], // Форматы отчетов
			exclude : ['node_modules', 'dist', 'tests'],
		},
		include:   ['tests/**/*.test.js', 'tests/**/*.test.ts'],
		exclude:   ['node_modules', 'dist', 'tests/e2e/**/*'], // Исключаем E2E-тесты
		reporters: ['verbose'], // Для подробного вываода исполнения функции
	},

});