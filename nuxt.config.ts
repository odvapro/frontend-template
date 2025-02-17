// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	// env, пожалуйста, создайте в корне проекта env c именем NUXT_PUBLIC_API_HOST
	runtimeConfig: {
		public: {
			api: process.env.NUXT_PUBLIC_API_HOST,
		}
	},

	// css base configuration
	css: ['@/assets/styles/index.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern',
					silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api'],
					additionalData: `@use "@/assets/styles/base/_variables.scss" as *;  @use "@/assets/styles/base/_mixins.scss" as *;`,
				},
			},
		},
	},
})
