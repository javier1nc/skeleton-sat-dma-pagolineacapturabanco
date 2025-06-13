import { b as PUBLIC_API_KEY } from "../../chunks/public.js";
import { r as redirect } from "../../chunks/index.js";
async function authGuard({ page }) {
  console.log("::authGuard::", page.url.pathname);
  if (page.url.pathname === "/tsaak/" || "/tsaak") {
    console.log("::inside!!::");
    redirect(302, "/tsaak/app");
  } else {
    return {};
  }
}
console.log("::load1::");
async function load(page) {
  console.log(PUBLIC_API_KEY);
  console.log("::load2-page::", page);
  return await authGuard({ page });
}
export {
  load
};
