import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import mdsvex from './mdsvex.config.js';

const config = {
  extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex(),
		vitePreprocess(),
	],
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		}
	},
	compilerOptions: {
		experimental: {
			async: true
		}
	}
};

export default config;
