

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/health/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.V6axAP3i.js","_app/immutable/chunks/scheduler.CO7uyCRE.js","_app/immutable/chunks/index.Bw_8TCQm.js"];
export const stylesheets = [];
export const fonts = [];
