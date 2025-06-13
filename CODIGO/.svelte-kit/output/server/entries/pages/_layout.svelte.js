import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("::TSAAK::");
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
