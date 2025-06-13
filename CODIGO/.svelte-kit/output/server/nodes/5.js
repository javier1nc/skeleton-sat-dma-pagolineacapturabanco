import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BpcXRCMu.js","_app/immutable/chunks/public.uEmoNS-Q.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.CO7uyCRE.js","_app/immutable/chunks/index.Bw_8TCQm.js"];
export const stylesheets = [];
export const fonts = [];
