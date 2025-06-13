//import { LoggedIn } from '../stores/user';

import { redirect } from "@sveltejs/kit";

let LoggedIn = true;

// @ts-ignore
export async function authGuard({ page }) {
  console.log("::authGuard::", page.url.pathname);

  if ((LoggedIn && page.url.pathname === "/plcb/") || "/plcb") {
    console.log("::inside!!::");
    redirect(302, "/plcb/app");
    //return '/ctm/app';
  } else if (LoggedIn) {
    return {};
  } else {
    redirect(302, "/plcb");
    //goto('/ctm', { replaceState: true });
  }
}
