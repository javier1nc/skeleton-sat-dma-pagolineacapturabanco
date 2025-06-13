
import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte','.md','.svx'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
	    vitePreprocess(),
		mdsvex(
			{ extensions: ['.md','.svx'] // Process .md files as components
			})
	],
	
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			//fallback: '200.html' // may differ from host to host

			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Required for SPAs
			//fallback: undefined,
			// fallback: '200.html', // Specify your fallback page
			precompress: false,
			strict: true
		}),
		prerender: {
	      entries: ['*','/app/calendario/semana', '/app/calendario/mes'], // Prerender all routes

	    },
		paths: {
			base: process.env.PUBLIC_PATH_BASE
		},
	}
};
export default config;