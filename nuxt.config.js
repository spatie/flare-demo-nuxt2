import FlareWebPackPluginSourcemap from '@flareapp/flare-webpack-plugin-sourcemap';

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt2-flare-demo',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/flare.client.ts' }
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extend(config, { isDev, isClient }) {
			if (isDev) config.mode = 'development';
			if (isClient) {
				config.plugins.push(new FlareWebPackPluginSourcemap({ key: process.env.FLARE_KEY }))
				config.devtool = 'hidden-source-map';
			}
		}
	},

	publicRuntimeConfig: {
		flareKey: process.env.FLARE_KEY
	}
}
