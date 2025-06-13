

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/(inner)/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.D3hypHkI.js","_app/immutable/chunks/scheduler.CO7uyCRE.js","_app/immutable/chunks/index.Bw_8TCQm.js"];
export const stylesheets = [];
export const fonts = [];
