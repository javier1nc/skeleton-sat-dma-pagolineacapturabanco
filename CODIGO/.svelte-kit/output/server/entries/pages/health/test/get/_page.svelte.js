import { c as create_ssr_component, n as each, e as escape } from "../../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { products } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-3yu6io">Shop</h1> ${each(products, (product) => {
    return `<h2>${escape(product.title)}</h2> <p>${escape(product.description)}</p>`;
  })}`;
});
export {
  Page as default
};
