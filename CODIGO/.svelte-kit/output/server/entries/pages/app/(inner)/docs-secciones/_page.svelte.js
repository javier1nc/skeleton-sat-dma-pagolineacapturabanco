import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { b as base } from "../../../../../chunks/paths.js";
import { P as PUBLIC_PATH_APP } from "../../../../../chunks/public.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const Paciente = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-6zur1v">Paciente</h1> <p data-svelte-h="svelte-1abwsq8">[Este es un archivo MarkDown .md]</p> <p data-svelte-h="svelte-1dzd0pk">Como paciente puedo modificar mi Perfil.</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex ml-4 mt-1.5"><ol class="breadcrumb"><li class="crumb"><a class="anchor"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/", 0)}>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa6-solid:house",
      class: "text-xl"
    },
    {},
    {}
  )}</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">›</li> <li data-svelte-h="svelte-9esfj5">Documentación</li></ol></div> <div class="ml-20 mt-8 animate-fade-up"><div class="prose dark:bg-red-100">${validate_component(Paciente, "Paciente").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
