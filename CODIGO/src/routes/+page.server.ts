import { SECRET_API_KEY } from '$env/static/private'
import { base } from '$app/paths';

import { redirect } from "@sveltejs/kit"

export async function load() {
  console.log(SECRET_API_KEY) // secret 🤫
}




//export const prerender = true;

/*
import type { Actions } from './$types';

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	setTheme: async ({ cookies, request }) => {
		const formData = await request.formData();
		const theme = formData.get('theme')?.toString() ?? 'skeleton';
		// Sets the selected theme to the cookie
		cookies.set('theme', theme, { path: base + '/' });
		return { theme };
	}
};

*/