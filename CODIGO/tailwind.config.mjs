import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { gobsat } from './src/gob_sat';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,svx,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,svx,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{ name: 'crimson', enhancements: true },
					{ name: 'gold-nouveau', enhancements: true },
					{ name: 'hamlindigo', enhancements: true },
					{ name: 'modern', enhancements: true },
					{ name: 'rocket', enhancements: true },
					{ name: 'sahara', enhancements: true },
					{ name: 'seafoam', enhancements: true },
					{ name: 'skeleton', enhancements: true },
					{ name: 'vintage', enhancements: true },
					{ name: 'wintry', enhancements: true }
				],
				custom: [
					gobsat,
				],
			},
		}),
		require('tailwindcss-animated')

	],
} satisfies Config;
