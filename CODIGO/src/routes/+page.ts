import { PUBLIC_API_KEY } from '$env/static/public'
import { authGuard } from '$lib/guard.js';

console.log('::load1::');

export async function load(page) {
    console.log(PUBLIC_API_KEY) // public 📣

    console.log('::load2-page::', page);
    
    return await authGuard({ page });
}
