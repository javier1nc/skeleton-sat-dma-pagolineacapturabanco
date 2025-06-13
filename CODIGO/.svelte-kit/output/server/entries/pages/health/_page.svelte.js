import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { a as PUBLIC_APP_VERSION } from "../../../chunks/public.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container h-full mx-auto flex justify-center items-start"><div class="space-y-10 text-center flex flex-col"><div class="w-[55rem] mt-28"><h3 class="h3" data-svelte-h="svelte-ebkh0b">Sistema es Operacional</h3> <h3 class="h3">V${escape(PUBLIC_APP_VERSION)}</h3></div></div> </div>`;
});
export {
  Page as default
};
