import { s as setContext, g as getContext, b as split_css_unit, c as create_ssr_component, e as escape, d as add_attribute, f as compute_slots, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object, a as subscribe, l as createEventDispatcher, v as validate_component, m as missing_component, n as each, o as null_to_empty } from "../../../chunks/ssr.js";
import hljs from "highlight.js/lib/core";
import { w as writable } from "../../../chunks/index2.js";
import { p as prefersReducedMotionStore, m as modeCurrent, s as setInitialClassState, a as autoModeWatcher } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import xml from "highlight.js/lib/languages/xml";
import css$2 from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { b as base } from "../../../chunks/paths.js";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
import { p as page } from "../../../chunks/stores.js";
import { P as PUBLIC_PATH_APP, a as PUBLIC_APP_VERSION } from "../../../chunks/public.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { p as preferences, s as secureStore } from "../../../chunks/stores2.js";
const storeHighlightJs = writable(void 0);
const storePopup = writable(void 0);
const DRAWER_STORE_KEY = "drawerStore";
function getDrawerStore() {
  const drawerStore = getContext(DRAWER_STORE_KEY);
  if (!drawerStore)
    throw new Error("drawerStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return drawerStore;
}
function initializeDrawerStore() {
  const drawerStore = drawerService();
  return setContext(DRAWER_STORE_KEY, drawerStore);
}
function drawerService() {
  const { subscribe: subscribe2, set, update } = writable({});
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
const MODAL_STORE_KEY = "modalStore";
function getModalStore() {
  const modalStore = getContext(MODAL_STORE_KEY);
  if (!modalStore)
    throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return modalStore;
}
function initializeModalStore() {
  const modalStore = modalService();
  return setContext(MODAL_STORE_KEY, modalStore);
}
function modalService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
const TOAST_STORE_KEY = "toastStore";
function getToastStore() {
  const toastStore = getContext(TOAST_STORE_KEY);
  if (!toastStore)
    throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return toastStore;
}
function initializeToastStore() {
  const toastStore = toastService();
  return setContext(TOAST_STORE_KEY, toastStore);
}
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function toastService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  const close = (id) => update((tStore) => {
    if (tStore.length > 0) {
      const index = tStore.findIndex((t) => t.id === id);
      const selectedToast = tStore[index];
      if (selectedToast) {
        if (selectedToast.callback)
          selectedToast.callback({ id, status: "closed" });
        if (selectedToast.timeoutId)
          clearTimeout(selectedToast.timeoutId);
        tStore.splice(index, 1);
      }
    }
    return tStore;
  });
  function handleAutoHide(toast) {
    if (toast.autohide === true) {
      return setTimeout(() => {
        close(toast.id);
      }, toast.timeout);
    }
  }
  return {
    subscribe: subscribe2,
    close,
    /** Add a new toast to the queue. */
    trigger: (toast) => {
      const id = randomUUID();
      update((tStore) => {
        if (toast && toast.callback)
          toast.callback({ id, status: "queued" });
        if (toast.hideDismiss)
          toast.autohide = true;
        const tMerged = { ...toastDefaults, ...toast, id };
        tMerged.timeoutId = handleAutoHide(tMerged);
        tStore.push(tMerged);
        return tStore;
      });
      return id;
    },
    /** Remain visible on hover */
    freeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        clearTimeout(tStore[index].timeoutId);
      return tStore;
    }),
    /** Cancel remain visible on leave */
    unfreeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        tStore[index].timeoutId = handleAutoHide(tStore[index]);
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
function initializeStores() {
  initializeModalStore();
  initializeToastStore();
  initializeDrawerStore();
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
const cBase$a = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0) $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0) $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0) $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0) $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0) $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0) $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0) $$bindings.labelledby(labelledby);
  classesBase = `${cBase$a} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}> <div class="${"app-bar-row-main " + escape(classesRowMain, true)}"> ${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>  ${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBase$9 = "grid grid-rows-[auto_1fr_auto] overflow-y-auto";
const cRegionLead$1 = "box-border";
const cRegionDefault$1 = "box-border";
const cRegionTrail$1 = "box-border";
const AppRail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRegionLead;
  let classesRegionDefault;
  let classesRegionTrail;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { width = "w-20" } = $$props;
  let { height = "h-full" } = $$props;
  let { gap = "gap-0" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  let { hover = "bg-primary-hover-token" } = $$props;
  let { active = "bg-primary-active-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { aspectRatio = "aspect-square" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("spacing", spacing);
  setContext("aspectRatio", aspectRatio);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0) $$bindings.gap(gap);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0) $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0) $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0) $$bindings.regionTrail(regionTrail);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0) $$bindings.aspectRatio(aspectRatio);
  classesBase = `${cBase$9} ${background} ${border} ${width} ${height} ${gap} ${$$props.class || ""}`;
  classesRegionLead = `${cRegionLead$1} ${regionLead}`;
  classesRegionDefault = `${cRegionDefault$1} ${regionDefault}`;
  classesRegionTrail = `${cRegionTrail$1} ${regionTrail}`;
  return ` <div class="${"app-rail " + escape(classesBase, true)}" data-testid="app-rail"> <div class="${"app-bar-lead " + escape(classesRegionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>  <div class="${"app-bar-default " + escape(classesRegionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  <div class="${"app-bar-trail " + escape(classesRegionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div></div>`;
});
const cBase$8 = "cursor-pointer";
const cWrapper$2 = "flex flex-col justify-center items-stretch w-full";
const cInterface = "text-center";
const cLabel$2 = "font-bold text-xs";
const AppRailTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classActive;
  let classesBase;
  let classesWrapper;
  let classesInterface;
  let classesLead;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "regionLead",
    "regionLabel",
    "hover",
    "active",
    "spacing",
    "width",
    "aspectRatio"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionLabel = "" } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { active = getContext("active") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let { width = getContext("width") } = $$props;
  let { aspectRatio = getContext("aspectRatio") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0) $$bindings.regionLead(regionLead);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0) $$bindings.regionLabel(regionLabel);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0) $$bindings.aspectRatio(aspectRatio);
  classActive = group === value ? active : "";
  classesBase = `${cBase$8} ${$$props.class || ""}`;
  classesWrapper = `${cWrapper$2} ${aspectRatio} ${width} ${hover} ${classActive}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesLead = `${regionLead}`;
  classesLabel = `${cLabel$2} ${regionLabel}`;
  return `<label class="${"app-rail-tile " + escape(classesBase, true)}" data-testid="app-rail-tile"${add_attribute("title", title, 0)}>   <button class="${"app-rail-wrapper " + escape(classesWrapper, true)}" tabindex="0"> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>  <div class="${"app-rail-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="${"app-rail-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="${"app-rail-label " + escape(classesLabel, true)}">${slots.default ? slots.default({}) : ``}</div></div></button></label>`;
});
const cBase$7 = "unstyled";
const cWrapper$1 = "w-full flex flex-col justify-center items-stretch text-center space-y-1";
const cLabel$1 = "font-bold text-xs";
const AppRailAnchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classActive;
  let classesBase;
  let classesWrapper;
  let classesLead;
  let classesLabel;
  let $$restProps = compute_rest_props($$props, ["selected", "regionLead", "regionLabel", "hover", "active", "spacing", "aspectRatio"]);
  let $$slots = compute_slots(slots);
  let { selected = false } = $$props;
  let { regionLead = "flex justify-center items-center" } = $$props;
  let { regionLabel = "" } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { active = getContext("active") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let { aspectRatio = getContext("aspectRatio") } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0) $$bindings.regionLead(regionLead);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0) $$bindings.regionLabel(regionLabel);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0) $$bindings.aspectRatio(aspectRatio);
  classActive = selected ? active : "";
  classesBase = `${cBase$7} ${$$props.class || ""}`;
  classesWrapper = `${cWrapper$1} ${aspectRatio} ${hover} ${spacing} ${classActive}`;
  classesLead = `${regionLead}`;
  classesLabel = `${cLabel$1} ${regionLabel}`;
  return `<a${spread(
    [
      {
        class: "app-rail-anchor " + escape(classesBase, true)
      },
      {
        href: escape_attribute_value($$props.href)
      },
      escape_object(prunedRestProps()),
      { role: "button" },
      { "data-testid": "app-rail-anchor" }
    ],
    {}
  )}><div class="${"app-rail-wrapper " + escape(classesWrapper, true)}">${$$slots.lead ? `<div class="${"app-rail-lead " + escape(classesLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="${"app-rail-label " + escape(classesLabel, true)}">${slots.default ? slots.default({}) : ``}</div></div></a>`;
});
const cBase$6 = "";
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { multiple = false } = $$props;
  let { disabled = false } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { regionLead = "" } = $$props;
  let { regionDefault = "" } = $$props;
  let { regionTrail = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("disabled", disabled);
  setContext("multiple", multiple);
  setContext("rounded", rounded);
  setContext("active", active);
  setContext("hover", hover);
  setContext("padding", padding);
  setContext("regionLead", regionLead);
  setContext("regionDefault", regionDefault);
  setContext("regionTrail", regionTrail);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0) $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0) $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0) $$bindings.regionTrail(regionTrail);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0) $$bindings.labelledby(labelledby);
  classesBase = `${cBase$6} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"listbox " + escape(classesBase, true)}" role="listbox"${add_attribute("aria-labelledby", labelledby, 0)} data-testid="listbox">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$5 = "cursor-pointer -outline-offset-[3px]";
const cDisabled = "opacity-50 !cursor-default";
const cLabel = "flex items-center space-x-4";
const cRegionLead = "";
const cRegionDefault = "flex-1";
const cRegionTrail = "";
function areDeeplyEqual(param1, param2) {
  if (param1 === param2) return true;
  if (!(param1 instanceof Object) || !(param2 instanceof Object)) return false;
  const keys1 = Object.keys(param1);
  const keys2 = Object.keys(param2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    const value1 = param1[key];
    const value2 = param2[key];
    if (!areDeeplyEqual(value1, value2)) return false;
  }
  return true;
}
const ListBoxItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesDisabled;
  let classesBase;
  let classesLabel;
  let classesRegionLead;
  let classesRegionDefault;
  let classesRegionTrail;
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { disabled = getContext("disabled") } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { regionLead = getContext("regionLead") } = $$props;
  let { regionDefault = getContext("regionDefault") } = $$props;
  let { regionTrail = getContext("regionTrail") } = $$props;
  let checked;
  let elemInput;
  function updateCheckbox(group2) {
    checked = group2.indexOf(value) >= 0;
  }
  function updateGroup(checked2) {
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.regionLead === void 0 && $$bindings.regionLead && regionLead !== void 0) $$bindings.regionLead(regionLead);
  if ($$props.regionDefault === void 0 && $$bindings.regionDefault && regionDefault !== void 0) $$bindings.regionDefault(regionDefault);
  if ($$props.regionTrail === void 0 && $$bindings.regionTrail && regionTrail !== void 0) $$bindings.regionTrail(regionTrail);
  {
    if (multiple) updateCheckbox(group);
  }
  {
    if (multiple) updateGroup(checked);
  }
  selected = multiple ? group.some((groupVal) => areDeeplyEqual(value, groupVal)) : areDeeplyEqual(group, value);
  classesActive = selected ? active : !disabled ? hover : "";
  classesDisabled = disabled ? cDisabled : "";
  classesBase = `${cBase$5} ${classesDisabled} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesRegionLead = `${cRegionLead} ${regionLead}`;
  classesRegionDefault = `${cRegionDefault} ${regionDefault}`;
  classesRegionTrail = `${cRegionTrail} ${regionTrail}`;
  return `<label> <div class="${"listbox-item " + escape(classesBase, true)}" data-testid="listbox-item" role="option"${add_attribute("aria-selected", selected, 0)} tabindex="0"> <div class="h-0 w-0 overflow-hidden">${multiple ? `<input ${disabled ? "disabled" : ""} type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${add_attribute("checked", checked, 1)}>` : `<input ${disabled ? "disabled" : ""} type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}</div>  <div class="${"listbox-label " + escape(classesLabel, true)}"> ${$$slots.lead ? `<div class="${"listbox-label-lead " + escape(classesRegionLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"listbox-label-content " + escape(classesRegionDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"listbox-label-trail " + escape(classesRegionTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div></div></label>`;
});
const cBackdrop$1 = "fixed top-0 left-0 right-0 bottom-0 bg-surface-backdrop-token p-4";
const cTransitionLayer = "w-full h-fit min-h-full overflow-y-auto flex justify-center";
const cModal = "block overflow-y-auto";
const cModalImage = "w-full h-auto";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cPosition;
  let classesBackdrop;
  let classesTransitionLayer;
  let classesModal;
  let parent;
  let $modalStore, $$unsubscribe_modalStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { components = {} } = $$props;
  let { position = "items-center" } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-modal" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { zIndex = "z-[999]" } = $$props;
  let { buttonNeutral = "variant-ghost-surface" } = $$props;
  let { buttonPositive = "variant-filled" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fly } = $$props;
  let { transitionInParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let { transitionOut = fly } = $$props;
  let { transitionOutParams = { duration: 150, opacity: 0, x: 0, y: 100 } } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  let modalElement;
  let windowHeight;
  let backdropOverflow = "overflow-y-hidden";
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  function handleModals(modals) {
    if (modals[0].type === "prompt") promptValue = modals[0].value;
    buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
    currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component;
  }
  function onModalHeightChange(modal) {
    let modalHeight = modal?.clientHeight;
    if (!modalHeight) modalHeight = modal?.firstChild?.clientHeight;
    if (!modalHeight) return;
    if (modalHeight > windowHeight) {
      backdropOverflow = "overflow-y-auto";
    } else {
      backdropOverflow = "overflow-y-hidden";
    }
  }
  function onClose() {
    if ($modalStore[0].response) $modalStore[0].response(false);
    modalStore.close();
  }
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0) $$bindings.zIndex(zIndex);
  if ($$props.buttonNeutral === void 0 && $$bindings.buttonNeutral && buttonNeutral !== void 0) $$bindings.buttonNeutral(buttonNeutral);
  if ($$props.buttonPositive === void 0 && $$bindings.buttonPositive && buttonPositive !== void 0) $$bindings.buttonPositive(buttonPositive);
  if ($$props.buttonTextCancel === void 0 && $$bindings.buttonTextCancel && buttonTextCancel !== void 0) $$bindings.buttonTextCancel(buttonTextCancel);
  if ($$props.buttonTextConfirm === void 0 && $$bindings.buttonTextConfirm && buttonTextConfirm !== void 0) $$bindings.buttonTextConfirm(buttonTextConfirm);
  if ($$props.buttonTextSubmit === void 0 && $$bindings.buttonTextSubmit && buttonTextSubmit !== void 0) $$bindings.buttonTextSubmit(buttonTextSubmit);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0) $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0) $$bindings.regionHeader(regionHeader);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0) $$bindings.regionBody(regionBody);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0) $$bindings.regionFooter(regionFooter);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0) $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0) $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0) $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0) $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0) $$bindings.transitionOutParams(transitionOutParams);
  {
    if ($modalStore.length) handleModals($modalStore);
  }
  {
    onModalHeightChange(modalElement);
  }
  cPosition = $modalStore[0]?.position ?? position;
  classesBackdrop = `${cBackdrop$1} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""} ${$modalStore[0]?.backdropClasses ?? ""}`;
  classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${$modalStore[0]?.modalClasses ?? ""}`;
  parent = {
    position,
    // ---
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    // ---
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    // ---
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    // ---
    onClose
  };
  $$unsubscribe_modalStore();
  $$unsubscribe_prefersReducedMotionStore();
  return ` ${$modalStore.length > 0 ? `   <div class="${"modal-backdrop " + escape(classesBackdrop, true) + " " + escape(backdropOverflow, true)}" data-testid="modal-backdrop"> <div class="${"modal-transition " + escape(classesTransitionLayer, true)}">${$modalStore[0].type !== "component" ? ` <div class="${"modal " + escape(classesModal, true)}" data-testid="modal" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}${add_attribute("this", modalElement, 0)}> ${$modalStore[0]?.title ? `<header class="${"modal-header " + escape(regionHeader, true)}"><!-- HTML_TAG_START -->${$modalStore[0].title}<!-- HTML_TAG_END --></header>` : ``}  ${$modalStore[0]?.body ? `<article class="${"modal-body " + escape(regionBody, true)}"><!-- HTML_TAG_START -->${$modalStore[0].body}<!-- HTML_TAG_END --></article>` : ``}  ${$modalStore[0]?.image && typeof $modalStore[0]?.image === "string" ? `<img class="${"modal-image " + escape(cModalImage, true)}"${add_attribute("src", $modalStore[0]?.image, 0)} alt="Modal">` : ``}  ${$modalStore[0].type === "alert" ? ` <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button></footer>` : `${$modalStore[0].type === "confirm" ? ` <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button> <button type="button" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextConfirm)}</button></footer>` : `${$modalStore[0].type === "prompt" ? ` <form class="space-y-4"><input${spread(
    [
      { class: "modal-prompt-input input" },
      { name: "prompt" },
      { type: "text" },
      escape_object($modalStore[0].valueAttr)
    ],
    {}
  )}${add_attribute("value", promptValue, 0)}> <footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button> <button type="submit" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextSubmit)}</button></footer></form>` : ``}`}`}</div>` : `  <div class="${"modal contents " + escape($modalStore[0]?.modalClasses ?? "", true)}" data-testid="modal-component" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}${add_attribute("this", modalElement, 0)}>${currentComponent?.slot ? `${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${currentComponent?.slot}<!-- HTML_TAG_END -->`;
    }
  })}` : `${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {})}`}</div>`}</div></div>` : ``}`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 flex";
const cDrawer = "overflow-y-auto transition-transform";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { position = "left" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "" } = $$props;
  let { padding = "" } = $$props;
  let { zIndex = "z-40" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  let { duration = 200 } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { opacityTransition = true } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  const drawerStore = getDrawerStore();
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  const propDefaults = {
    position,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    opacityTransition,
    regionBackdrop,
    regionDrawer,
    labelledby,
    describedby,
    duration
  };
  function applyPropSettings(settings) {
    position = settings.position || propDefaults.position;
    bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
    blur = settings.blur || propDefaults.blur;
    padding = settings.padding || propDefaults.padding;
    bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
    border = settings.border || propDefaults.border;
    rounded = settings.rounded || propDefaults.rounded;
    shadow = settings.shadow || propDefaults.shadow;
    width = settings.width || propDefaults.width;
    height = settings.height || propDefaults.height;
    regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
    regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
    labelledby = settings.labelledby || propDefaults.labelledby;
    describedby = settings.describedby || propDefaults.describedby;
    opacityTransition = settings.opacityTransition || propDefaults.opacityTransition;
    duration = settings.duration || propDefaults.duration;
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true) return;
    applyPropSettings(settings);
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0) $$bindings.bgDrawer(bgDrawer);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0) $$bindings.bgBackdrop(bgBackdrop);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0) $$bindings.blur(blur);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0) $$bindings.zIndex(zIndex);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0) $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0) $$bindings.regionDrawer(regionDrawer);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0) $$bindings.labelledby(labelledby);
  if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0) $$bindings.describedby(describedby);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0) $$bindings.transitions(transitions);
  if ($$props.opacityTransition === void 0 && $$bindings.opacityTransition && opacityTransition !== void 0) $$bindings.opacityTransition(opacityTransition);
  classesPosition = presets[position].alignment;
  classesWidth = width ? width : presets[position].width;
  classesHeight = height ? height : presets[position].height;
  classesRounded = rounded ? rounded : presets[position].rounded;
  classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""}`;
  classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
  $$unsubscribe_drawerStore();
  $$unsubscribe_prefersReducedMotionStore();
  return ` ${$drawerStore.open === true ? `   <div class="${"drawer-backdrop " + escape(classesBackdrop, true)}" data-testid="drawer-backdrop"${add_attribute("this", elemBackdrop, 0)}>  <div class="${"drawer " + escape(classesDrawer, true)}" data-testid="drawer" role="dialog" aria-modal="true"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-describedby", describedby, 0)}${add_attribute("this", elemDrawer, 0)}> ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { title = "Toggle light or dark mode." } = $$props;
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0) $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0) $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0) $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0) $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0) $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-gewkj4_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-gewkj4_END -->`, ""} <div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)}${add_attribute("title", title, 0)} tabindex="0"> <div class="${"lightswitch-thumb " + escape(classesThumb, true)}"> <svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const cWrapper = "flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none";
const cSnackbar = "flex flex-col gap-y-2";
const cToast = "flex justify-between items-center pointer-events-auto";
const cToastActions = "flex items-center space-x-2";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesWrapper;
  let classesSnackbar;
  let classesToast;
  let filteredToasts;
  let $toastStore, $$unsubscribe_toastStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const toastStore = getToastStore();
  $$unsubscribe_toastStore = subscribe(toastStore, (value) => $toastStore = value);
  let { position = "b" } = $$props;
  let { max = 3 } = $$props;
  let { background = "variant-filled-secondary" } = $$props;
  let { width = "max-w-[640px]" } = $$props;
  let { color = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-lg" } = $$props;
  let { zIndex = "z-[888]" } = $$props;
  let { buttonAction = "btn variant-filled" } = $$props;
  let { buttonDismiss = "btn-icon btn-icon-sm variant-filled" } = $$props;
  let { buttonDismissLabel = "✕" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fly } = $$props;
  let { transitionInParams = { duration: 250 } } = $$props;
  let { transitionOut = fly } = $$props;
  let { transitionOutParams = { duration: 250 } } = $$props;
  let cPosition;
  let cAlign;
  switch (position) {
    case "t":
      cPosition = "justify-center items-start";
      cAlign = "items-center";
      break;
    case "b":
      cPosition = "justify-center items-end";
      cAlign = "items-center";
      break;
    case "l":
      cPosition = "justify-start items-center";
      cAlign = "items-start";
      break;
    case "r":
      cPosition = "justify-end items-center";
      cAlign = "items-end";
      break;
    case "tl":
      cPosition = "justify-start items-start";
      cAlign = "items-start";
      break;
    case "tr":
      cPosition = "justify-end items-start";
      cAlign = "items-end";
      break;
    case "bl":
      cPosition = "justify-start items-end";
      cAlign = "items-start";
      break;
    case "br":
      cPosition = "justify-end items-end";
      cAlign = "items-end";
      break;
  }
  let wrapperVisible = false;
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0) $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0) $$bindings.zIndex(zIndex);
  if ($$props.buttonAction === void 0 && $$bindings.buttonAction && buttonAction !== void 0) $$bindings.buttonAction(buttonAction);
  if ($$props.buttonDismiss === void 0 && $$bindings.buttonDismiss && buttonDismiss !== void 0) $$bindings.buttonDismiss(buttonDismiss);
  if ($$props.buttonDismissLabel === void 0 && $$bindings.buttonDismissLabel && buttonDismissLabel !== void 0) $$bindings.buttonDismissLabel(buttonDismissLabel);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0) $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0) $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0) $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0) $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0) $$bindings.transitionOutParams(transitionOutParams);
  classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$props.class || ""}`;
  classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
  classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
  filteredToasts = Array.from($toastStore).slice(0, max);
  {
    if (filteredToasts.length) {
      wrapperVisible = true;
    }
  }
  $$unsubscribe_toastStore();
  $$unsubscribe_prefersReducedMotionStore();
  return `${filteredToasts.length > 0 || wrapperVisible ? ` <div class="${"snackbar-wrapper " + escape(classesWrapper, true)}" data-testid="snackbar-wrapper"> <div class="${"snackbar " + escape(classesSnackbar, true)}">${each(filteredToasts, (t, i) => {
    return `<div${add_attribute("role", t.hideDismiss ? "alert" : "alertdialog", 0)} aria-live="polite"> <div class="${"toast " + escape(classesToast, true) + " " + escape(t.background ?? background, true) + " " + escape(t.classes ?? "", true)}" data-testid="toast"><div class="text-base"><!-- HTML_TAG_START -->${t.message}<!-- HTML_TAG_END --></div> ${t.action || !t.hideDismiss ? `<div class="${"toast-actions " + escape(cToastActions, true)}">${t.action ? `<button${add_attribute("class", buttonAction, 0)}><!-- HTML_TAG_START -->${t.action.label}<!-- HTML_TAG_END --></button>` : ``} ${!t.hideDismiss ? `<button${add_attribute("class", buttonDismiss, 0)} aria-label="Dismiss toast">${escape(buttonDismissLabel)}</button>` : ``} </div>` : ``}</div> </div>`;
  })}</div></div>` : ``}`;
});
const logo = "/tsaak/_app/immutable/assets/logos_shcp-sat.D01B_EmJ.png";
const DocsLogoFull = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img alt="SAT logo"${add_attribute("src", logo, 0)}>`;
});
const DocsAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let preferencesdata;
  let $preferences, $$unsubscribe_preferences;
  let $secureStore, $$unsubscribe_secureStore;
  let $$unsubscribe_modalStore;
  $$unsubscribe_preferences = subscribe(preferences, (value) => $preferences = value);
  $$unsubscribe_secureStore = subscribe(secureStore, (value) => $secureStore = value);
  getDrawerStore();
  let securedata2;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => value);
  securedata2 = $secureStore;
  preferencesdata = $preferences;
  $$unsubscribe_preferences();
  $$unsubscribe_secureStore();
  $$unsubscribe_modalStore();
  return `  ${validate_component(AppBar, "AppBar").$$render(
    $$result,
    {
      shadow: "shadow-2xl",
      slotTrail: "!space-x-2",
      background: "bg-surface-800"
    },
    {},
    {
      trail: () => {
        return ` <div class="relative hidden lg:block"> <button class="btn hover:variant-soft-primary" data-svelte-h="svelte-1cxcjh0"><span class="text-white">Navegar</span> <i class="fa-solid fa-caret-down opacity-50"></i></button>  <div class="card p-4 w-60 shadow-xl" data-popup="features"><nav class="list-nav"><ul><li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fa6-solid:house",
            class: "text-xl "
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-128eijq">Página de inicio</span></a></li> ${securedata2.view === preferencesdata.views[0] ? `` : `<li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/introduccion", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fa6-solid:book",
            class: "text-xl "
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-1yjmpgl">Documentación</span></a></li>`} ${securedata2.view === preferencesdata.views[0] ? `` : `<li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/calendario/mes", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fa6-solid:calendar-days",
            class: "text-xl "
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-6xxa7g">Calendario</span></a></li>`} <hr class="!my-4"> ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[3] ? `` : `<li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/consulta", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "streamline:checkup-medical-report-clipboard-solid",
            class: "text-xl "
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-8nl57h">Consulta</span></a></li>`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[3] ? `` : `<li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/expedientes", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fa6-solid:folder-tree",
            class: "text-xl "
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-1vq8b58">Expedientes</span></a></li>`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[2] || securedata2.view === preferencesdata.views[3] ? `` : `<li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/catalogo-tsaak", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fa6-solid:book-open",
            class: "text-xl "
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-xosmq9">Catalogos</span></a></li>`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[2] ? `` : `<li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/registros", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "fa6-solid:rectangle-list",
            class: "text-xl "
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-gboq5c">Registros</span></a></li>`}</ul></nav> </div></div>  <section class="relative hidden lg:block "> <button class="btn hover:variant-soft-primary hover:text-blue-200">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "mdi:user-circle",
            class: "text-xl text-white"
          },
          {},
          {}
        )} <span data-svelte-h="svelte-1vmz3n"><strong class="text-white">Usuario</strong></span></button>  <div class="card p-4 w-60 shadow-xl" data-popup="menu"><nav class="list-nav space-y-4">${securedata2.view === preferencesdata.views[0] ? `` : `<ul><li><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/datos-generales", 0)}><span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "material-symbols:lab-profile",
            class: "text-xl"
          },
          {},
          {}
        )}</span> <span data-svelte-h="svelte-jy7q1w">Perfil</span></a></li></ul> <hr>`} <section class="flex justify-between items-center"><h6 class="h6" data-svelte-h="svelte-1upd1jc">Modo</h6> ${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}</section> <section class="flex justify-between items-center "><h6 class="h6" data-svelte-h="svelte-xee9mi">Vista</h6> <span class="badge variant-filled">${securedata2.view === preferencesdata.views[0] ? `<p data-svelte-h="svelte-clnsm6">Oculto</p>` : `${securedata2.view === preferencesdata.views[1] ? `<p data-svelte-h="svelte-19lu4lx">Paciente</p>` : `${securedata2.view === preferencesdata.views[2] ? `<p data-svelte-h="svelte-1rdtoey">Pro. Salud</p>` : `${securedata2.view === preferencesdata.views[3] ? `<p data-svelte-h="svelte-1m0rfm">Auditor</p>` : `${securedata2.view === preferencesdata.views[4] ? `<p data-svelte-h="svelte-1naf1rt">Administrador</p>` : `<p data-svelte-h="svelte-17j5y4h">Unknown view</p>`}`}`}`}`}</span></section> ${`<section class="flex justify-between items-center"><select class="select" size="5"${add_attribute("value", securedata2.view, 0)}><option${add_attribute("value", preferencesdata.views[0], 0)}>Oculto</option><option${add_attribute("value", preferencesdata.views[1], 0)}>Paciente</option><option${add_attribute("value", preferencesdata.views[2], 0)}>Pro. Salud</option><option${add_attribute("value", preferencesdata.views[3], 0)}>Auditor</option><option${add_attribute("value", preferencesdata.views[4], 0)}>Administrador</option></select></section>`} <hr> <ul><li><a href="https://v1.skeleton.dev/" target="_blank"><span data-svelte-h="svelte-18g4aly">Cerrar Sesión</span> <span class="w-6 text-center">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "material-symbols:logout",
            class: "text-xl"
          },
          {},
          {}
        )}</span></a></li></ul></nav> </div></section>  `;
      },
      default: () => {
        return `<div class="flex" data-svelte-h="svelte-1juy8kg"> <div class="w-2/12"></div> <div class="flex justify-start items-center"><a${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/", 0)}><strong class="text-xl uppercase bg-gradient-to-br from-white to-white bg-clip-text text-transparent box-decoration-clone drop-shadow-[0_1.2px_1.2px_rgba(155,34,66,0.4)]">Sistema TSAAK</strong></a></div></div> `;
      },
      lead: () => {
        return `<div class="flex items-center space-x-4"> <button class="btn-icon btn-icon-sm lg:!hidden">${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "flowbite:bars-outline",
            class: "text-xl"
          },
          {},
          {}
        )}</button>  <a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/", 0)} title="Go to Homepage">${validate_component(DocsLogoFull, "DocsLogoFull").$$render($$result, {}, {}, {})}</a></div>`;
      }
    }
  )}`;
});
let securedata = secureStore;
console.log("::securedata::", securedata);
const menuNavLinks = {
  "/documentacion": [
    {
      title: "Usuario",
      list: [
        { href: base + "/" + PUBLIC_PATH_APP + "/introduccion", label: "Introducción", keywords: "introduccion,svelte, sirens, license, release" },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/docs-perfil",
          label: "Perfil",
          keywords: "start, install, cli, tailwind, themes, stylesheets"
        },
        { href: base + "/" + PUBLIC_PATH_APP + "/docs-calendario", label: "Calendario", keywords: "start, setup, tutorial, guide" },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/docs-secciones",
          label: "Mis Secciones",
          keywords: "start, install, cli, tailwind, themes, stylesheets"
        }
      ]
    }
  ],
  "/perfil": [
    {
      title: "Paciente",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/datos-generales",
          label: "Datos Generales",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/datos-direccion",
          label: "Direccion",
          keywords: "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/datos-alergias",
          label: "Alergias",
          keywords: "plugin, label, input, select, checkbox, radio, date, color, picker, slider, range, file"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/datos-padecimientos",
          label: "Padecimientos",
          keywords: "plugin, label, input, select, checkbox, radio, date, color, picker, slider, range, file"
        }
      ]
    }
  ],
  "/calendario": [
    {
      title: "Vista",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/calendario/mes",
          label: "Mes",
          keywords: "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/calendario/semana",
          label: "Semana",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider"
        }
      ]
    }
  ],
  "/consulta": [
    {
      title: "Medico",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/consulta",
          label: "Consulta",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Numero de Empleado",
          keywords: "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Nombre Completo",
          keywords: "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file"
        }
      ]
    },
    {
      title: "Psicologo",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/consulta",
          label: "Consulta",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Numero de Empleado",
          keywords: "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Nombre Completo",
          keywords: "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file"
        }
      ]
    },
    {
      title: "Dentista",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/consulta",
          label: "Consulta",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Numero de Empleado",
          keywords: "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Nombre Completo",
          keywords: "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file"
        }
      ]
    }
  ],
  "/expedientes": [
    {
      title: "Busqueda",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "RFC",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Numero de Empleado",
          keywords: "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del"
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Nombre Completo",
          keywords: "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file"
        }
      ]
    },
    {
      title: "Recientes",
      list: [
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Hoy", keywords: "message, notification" },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Ayer", keywords: "sup, sub, overlay, favorite, icon" },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Ultima Semana",
          keywords: "nav, navigation, separator, hierarchy"
        },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Ultimos 30 dias", keywords: "click, anchor, icon, preload" }
      ]
    },
    {
      title: "Fecha",
      list: [
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Dia", keywords: "message, conversation, prompt, ai" },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Rango", keywords: "header, h1, h2, h3" }
      ]
    }
  ],
  "/catalogo-tsaak": [
    {
      title: "Sistema",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/catalogo-tsaak",
          label: "TSAAK",
          keywords: "catalogo, sistema, tsaak"
        }
      ]
    }
  ],
  "/registros": [
    {
      title: "Busqueda",
      list: [
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Opcion N", keywords: "copy, contenteditable, html, input" },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Opcion N", keywords: "svg, filtering, image, images, effect" },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Opcion N",
          keywords: "form, modal, a11y, accessibility, keyboard, interaction"
        }
      ]
    },
    {
      title: "Reciente",
      list: [
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Hoy", keywords: "collapse" },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Ayer", keywords: "header, top, bar, title" },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Ultima semana", keywords: "nav, navigation, tile, sidebar" },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Ulitmos 30 Dias",
          keywords: "input, filter, fuzzy, auto, complete, suggest"
        },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Ultimo año", keywords: "image, initial, filter" }
      ]
    },
    // Deprecated
    {
      title: "",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/test",
          label: "Dia",
          keywords: "layout, header, footer, sidebar, page, content",
          badge: "Nuevo"
        },
        { href: base + "/" + PUBLIC_PATH_APP + "/test", label: "Rango", keywords: "data, entry", badge: "Nuevo" }
      ]
    }
  ]
};
const DocsSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let submenu;
  let listboxItemActive;
  let preferencesdata;
  let $preferences, $$unsubscribe_preferences;
  let $secureStore, $$unsubscribe_secureStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_preferences = subscribe(preferences, (value) => $preferences = value);
  $$unsubscribe_secureStore = subscribe(secureStore, (value) => $secureStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentRailCategory = void 0;
  getDrawerStore();
  let securedata2;
  page.subscribe((page2) => {
    console.log("::page.url.pathname::", page2.url.pathname);
    let basePath = page2.url.pathname.split("/")[3];
    console.log("::basePath::", basePath);
    console.log("::includes::", ["introduccion", "docs-perfil"].includes(basePath));
    if (!basePath) return;
    if (["introduccion", "docs-perfil", "docs-calendario", "docs-secciones"].includes(basePath)) currentRailCategory = "/documentacion";
    if (["datos-generales"].includes(basePath)) currentRailCategory = "/perfil";
    if (["tokens", "base", "calendario", "blocks"].includes(basePath)) currentRailCategory = "/calendario";
    if (["consulta"].includes(basePath)) currentRailCategory = "/consulta";
    if (["expedientes"].includes(basePath)) currentRailCategory = "/expedientes";
    if (["catalogo-tsaak"].includes(basePath)) currentRailCategory = "/catalogo-tsaak";
    if (["components", "actions"].includes(basePath)) currentRailCategory = "/registros";
    console.log("::currentRailCategory::", currentRailCategory);
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    submenu = menuNavLinks[currentRailCategory ?? "/documentacion"];
    listboxItemActive = (href) => $page.url.pathname?.includes(href) ? "bg-primary-active-token" : "";
    securedata2 = $secureStore;
    preferencesdata = $preferences;
    $$rendered = `<div class="${"grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 " + escape($$props.class ?? "", true)}"> ${validate_component(AppRail, "AppRail").$$render(
      $$result,
      {
        background: "bg-transparent",
        border: "border-r border-surface-500/30"
      },
      {},
      {
        default: () => {
          return `  ${validate_component(AppRailAnchor, "AppRailAnchor").$$render($$result, { href: base + "/", class: "lg:hidden" }, {}, {
            lead: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:home", class: "text-2xl" }, {}, {})} `;
            },
            default: () => {
              return `<span data-svelte-h="svelte-3sk4b5">Home</span>`;
            }
          })}  ${validate_component(AppRailAnchor, "AppRailAnchor").$$render(
            $$result,
            {
              href: base + "/" + PUBLIC_PATH_APP + "/test",
              class: "lg:hidden"
            },
            {},
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render($$result, { icon: "mdi:home", class: "text-2xl" }, {}, {})} `;
              },
              default: () => {
                return `<span data-svelte-h="svelte-c8m8lx">Blogs</span>`;
              }
            }
          )}  ${securedata2.view === preferencesdata.views[0] ? `` : `${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "documentacion",
              value: "/documentacion",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "fa6-solid:book",
                    class: "text-xl justify-self-center"
                  },
                  {},
                  {}
                )} `;
              },
              default: () => {
                return `<span data-svelte-h="svelte-2n8pyj">Docs.</span>`;
              }
            }
          )}`} <hr class="opacity-30"> ${securedata2.view === preferencesdata.views[0] ? `` : `${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "perfil",
              value: "/perfil",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "material-symbols:lab-profile",
                    class: "text-xl justify-self-center"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-jy7q1w">Perfil</span>`;
              }
            }
          )}`} ${securedata2.view === preferencesdata.views[0] ? `` : `${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "calendario",
              value: "/calendario",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "fa6-solid:calendar-days",
                    class: "text-xl justify-self-center"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-6xxa7g">Calendario</span>`;
              }
            }
          )}`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[3] ? `` : `${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "expedientes",
              value: "/consulta",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "streamline:checkup-medical-report-clipboard-solid",
                    class: "text-xl justify-self-center"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-8nl57h">Consulta</span>`;
              }
            }
          )}`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[3] ? `` : `${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "expedientes",
              value: "/expedientes",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "fa6-solid:folder-tree",
                    class: "text-xl justify-self-center"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-1vq8b58">Expedientes</span>`;
              }
            }
          )}`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[2] || securedata2.view === preferencesdata.views[3] ? `` : `${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "catalogo-tsaak",
              value: "/catalogo-tsaak",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "grommet-icons:catalog",
                    class: "text-xl justify-self-center"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-xosmq9">Catalogos</span>`;
              }
            }
          )}`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[2] ? `` : `${validate_component(AppRailTile, "AppRailTile").$$render(
            $$result,
            {
              name: "svelte",
              value: "/registros",
              group: currentRailCategory
            },
            {
              group: ($$value) => {
                currentRailCategory = $$value;
                $$settled = false;
              }
            },
            {
              lead: () => {
                return `${validate_component(Icon, "Icon").$$render(
                  $$result,
                  {
                    icon: "fa6-solid:rectangle-list",
                    class: "text-xl justify-self-center"
                  },
                  {},
                  {}
                )}`;
              },
              default: () => {
                return `<span data-svelte-h="svelte-gboq5c">Registros</span>`;
              }
            }
          )}`}`;
        }
      }
    )}  <section class="border p-4 pb-20 space-y-4 overflow-y-auto">${each(submenu, (segment, i) => {
      return `${`<p class="font-bold pl-4 text-2xl">${escape(segment.title)}</p>  <nav class="list-nav"><ul>${each(segment.list, ({ href, label, badge }) => {
        return `<li><a${add_attribute("href", href, 0)}${add_attribute("class", listboxItemActive(href), 0)} data-sveltekit-preload-data="hover"><span class="flex-auto"><!-- HTML_TAG_START -->${label}<!-- HTML_TAG_END --></span> ${badge ? `<span class="badge variant-filled-secondary">${escape(badge)}</span>` : ``}</a> </li>`;
      })} </ul></nav>  ${i + 1 < submenu.length ? `<hr class="!my-6 opacity-50">` : ``}`}`;
    })}</section></div>`;
  } while (!$$settled);
  $$unsubscribe_preferences();
  $$unsubscribe_secureStore();
  $$unsubscribe_page();
  return $$rendered;
});
const DocsDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  const drawerStore = getDrawerStore();
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  classesDrawer = $drawerStore.id === "doc-sidenav" ? "lg:hidden" : "";
  $$unsubscribe_drawerStore();
  return `${validate_component(Drawer, "Drawer").$$render($$result, { class: classesDrawer }, {}, {
    default: () => {
      return `${$drawerStore.id === "doc-sidenav" ? ` ${validate_component(DocsSidebar, "DocsSidebar").$$render($$result, { embedded: true }, {}, {})}` : `${$drawerStore.id === "demo" ? ` <div class="w-full h-full flex justify-center items-center"><div class="text-center space-y-2">${$drawerStore.meta ? `<h2 class="h2">${escape($drawerStore.meta)}</h2>` : ``} <h4 class="h4">Drawer: <span class="capitalize">${escape($drawerStore.position)}</span></h4> <span class="block" data-svelte-h="svelte-pumu6j">Tap outside the drawer to close.</span></div></div>` : ` <div class="w-full h-full flex justify-center items-center" data-svelte-h="svelte-1p5h1m"><div class="text-center space-y-2"><p>Invalid <code class="code">$drawerStore.id</code> provided.</p></div></div>`}`}`;
    }
  })}`;
});
const DocsLogoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg viewBox="0 0 253.7657 253.76569" height="28" width="28" xml:space="preserve" id="svg2" version="1.1" sodipodi:docname="SAT.svg" inkscape:version="1.1 (c68e22c387, 2021-05-23)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><sodipodi:namedview id="namedview84" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="0.56860135" inkscape:cx="662.15108" inkscape:cy="-134.54066" inkscape:window-width="1920" inkscape:window-height="1017" inkscape:window-x="1912" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg2"></sodipodi:namedview><metadata id="metadata8"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type></cc:Work></rdf:RDF></metadata><defs id="defs6"></defs><g id="g1509" transform="matrix(4.8006493,0,0,4.8006493,-73.565806,-582.31791)"><path id="path16" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 175.22,136.38387 h -31.63334 v 8.52134 h 10.644 v 16.112 h 10.436 v -16.112 H 175.22 v -8.52134"></path><path id="path18" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="M 147.84533,161.01667 136.116,136.46561 h -15.20147 l -12.1468,24.55106 c 0,0 12.77707,0.0688 12.9104,0 l 3.69893,-9.13386 c 0,0 6.9792,1.92293 9.56694,9.13386 z m -22.062,-10.23853 3.1068,-7.73493 2.3708,7.73493 z"></path><path id="path20" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 106.1984,136.94641 v 7.64053 c -0.16094,-0.20827 -0.64947,-0.38227 -1.138,-0.55573 -4.88854,-1.7364 -11.082802,-2.01187 -12.549469,-1.52547 -1.326533,0.4172 -1.605733,1.28547 -0.628133,1.84067 0.628133,0.38173 3.9604,0.90053 7.5208,1.73386 8.449462,1.94467 11.661462,5.24427 8.519332,10.10614 -2.58387,4.1672 -12.847866,6.598 -26.883332,4.09746 -0.837467,-0.13853 -1.057867,-0.51826 -2.8,-0.69173 v -7.9536 c 1.3932,0.24373 1.9516,0.52187 2.510933,0.72973 3.4912,1.4588 9.9916,2.39107 12.645333,2.114 1.9552,-0.174 2.7932,-1.0776 1.8156,-1.84066 -0.5584,-0.452 -4.4656,-0.86614 -7.817733,-1.5952 -8.728133,-1.91 -11.116133,-5.1052 -8.602533,-9.68907 2.024933,-3.71613 8.742133,-6.11253 19.7744,-5.45267 1.955732,0.10414 3.910932,0.34747 5.865602,0.65987 0.69853,0.10427 1.39693,0.2428 1.7672,0.38187"></path></g><g id="g1504" transform="matrix(4.6314932,0,0,4.6314932,-460.15119,-329.55857)" style="fill:#00529e;fill-opacity:1"><path id="path22" style="fill:#00529e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 141.09866,125.94734 c 7.204,0 13.04534,-5.84067 13.04534,-13.046 0,-7.204 -5.84134,-13.045333 -13.04534,-13.045333 -7.20533,0 -13.046,5.841333 -13.046,13.045333 0,7.20533 5.84067,13.046 13.046,13.046"></path><path id="path24" style="fill:#00529e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 112.39786,125.94734 c 7.2048,0 13.04587,-5.84067 13.04587,-13.046 0,-7.204 -5.84107,-13.045333 -13.04587,-13.045333 -7.20413,0 -13.045196,5.841333 -13.045196,13.045333 0,7.20533 5.841066,13.046 13.045196,13.046"></path><path id="path26" style="fill:#00529e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 141.09866,97.248007 c 7.204,0 13.04534,-5.841333 13.04534,-13.046666 0,-7.204 -5.84134,-13.045333 -13.04534,-13.045333 -7.20533,0 -13.046,5.841333 -13.046,13.045333 0,7.205333 5.84067,13.046666 13.046,13.046666"></path><path id="path28" style="fill:#00529e;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 112.39786,97.248007 c 7.2048,0 13.04587,-5.841333 13.04587,-13.046666 0,-7.204 -5.84107,-13.045333 -13.04587,-13.045333 -7.20413,0 -13.045196,5.841333 -13.045196,13.045333 0,7.205333 5.841066,13.046666 13.045196,13.046666"></path></g><g id="g1545" transform="matrix(3.9795634,0,0,3.9795634,251.57815,-445.94825)"><path id="path30" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="M 17.621333,169.46361 H 17.3948 l -0.574,-1.56054 c -0.05307,-0.14626 -0.6536,-0.3468 -1.293734,-0.3468 -0.827066,0 -1.574,0.41347 -1.574,1.3068 0,2.02814 4.149067,1.44107 4.149067,4.2692 0,2.1084 -2.228133,2.6948 -3.428667,2.6948 -1.601066,0 -2.441693,-0.25306 -2.93492,-0.44013 l 0.07968,-2.30773 h 0.22708 l 0.560427,1.5208 c 0.106773,0.27973 0.987467,0.5068 1.387467,0.5068 1.000533,0 1.840666,-0.44014 1.840666,-1.374 0,-1.96094 -4.148973,-1.5208 -4.148973,-4.17547 0,-2.00107 1.640627,-2.72133 3.775507,-2.72133 0.600533,0 1.4276,0.13333 2.2412,0.33333 l -0.08027,2.29427"></path><path id="path32" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 22.197333,169.62401 c 0.9068,0 1.133866,0.8536 1.133866,1.60053 v 0.21347 c -0.414,0.0136 -1.054133,0.0937 -1.854666,0.0937 h -0.559867 v -0.0801 c 0,-0.7604 0.359867,-1.8276 1.280667,-1.8276 z m 2.614666,4.73533 c -0.440133,0.29373 -1.054133,0.45427 -1.601066,0.45427 -1.454134,0 -2.294267,-1.4948 -2.294267,-2.48134 v -0.24013 h 3.547867 c 0.840666,0 0.974,0 0.974,-0.49373 0,-1.66774 -1.507334,-2.5348 -3.014534,-2.5348 -1.974533,0 -3.534933,1.414 -3.534933,3.402 0,1.8672 1.320267,3.30786 3.228133,3.30786 1.0536,0 2.1208,-0.37346 2.921334,-1.05373 l -0.226534,-0.3604"></path><path id="path34" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 31.015066,171.03854 h -0.3468 c -0.159867,-0.4412 -0.387067,-0.66773 -0.880267,-0.66773 -0.7604,0 -1.2276,0.61413 -1.2276,1.6412 0,0.46666 0.0536,2.84106 0.186534,2.93493 0.280666,0.2 0.533733,0.33333 0.9208,0.4796 v 0.18707 c -0.614134,-0.0537 -1.2808,-0.1068 -2.054667,-0.1068 -0.693333,0 -1.333867,0.0531 -1.947467,0.1068 v -0.18707 l 0.894267,-0.42653 c 0.1464,-0.0667 0.213067,-0.64067 0.213067,-2.05467 0,-2.8948 -0.04013,-3.0016 -0.4136,-3.148 l -0.693734,-0.28013 v -0.18694 c 0.253734,0 1.560934,0 2.467734,-0.10626 0.240133,-0.0271 0.480666,-0.0537 0.507333,-0.0537 l -0.02667,1.1604 h 0.02667 c 0.306667,-0.4932 0.933867,-1.26706 1.840533,-1.26706 0.187067,0 0.360934,0 0.533867,0.0531 v 1.92187"></path><path id="path36" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 36.110932,169.22401 c 0.4932,0.0531 0.986934,0.10626 1.4808,0.10626 0.4,0 0.8,-0.0532 1.2004,-0.10626 v 0.1864 l -0.306666,0.18693 c -0.2136,0.13333 -0.346934,0.2136 -0.533334,0.54693 -1.120933,1.97454 -2.107866,3.97507 -2.761466,5.6292 h -0.801067 c -0.733333,-1.8672 -1.586933,-3.7084 -2.387466,-5.56306 -0.07973,-0.1864 -0.2,-0.41307 -0.387067,-0.53334 l -0.413467,-0.26666 v -0.1864 c 0.640534,0.0531 1.293734,0.10626 1.9344,0.10626 0.586933,0 1.173867,-0.0532 1.760933,-0.10626 v 0.1864 l -0.6672,0.28026 c -0.146933,0.0667 -0.186533,0.1468 -0.186533,0.22654 0,0.0667 0.02653,0.17346 0.1068,0.40053 l 1.240667,3.16147 1.3208,-2.81467 c 0.253066,-0.5604 0.266666,-0.64053 0.266666,-0.7072 0,-0.0803 -0.08027,-0.2 -0.2536,-0.28027 l -0.6136,-0.26666 v -0.1864"></path><path id="path38" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 38.031732,169.33027 c 0.2532,0 1.5604,0 2.467734,-0.10626 0.240133,-0.0271 0.480266,-0.0537 0.507333,-0.0537 -0.04013,0.60054 -0.08027,1.96147 -0.08027,2.8152 0,0.4932 0.0532,2.8676 0.186534,2.96147 0.280133,0.2 0.533866,0.33333 0.920266,0.4796 v 0.18707 c -0.6136,-0.0537 -1.280266,-0.1068 -2.054133,-0.1068 -0.6932,0 -1.333867,0.0531 -1.947467,0.1068 v -0.18707 l 0.893734,-0.42653 c 0.146933,-0.0667 0.2136,-0.64067 0.2136,-2.05467 0,-2.52133 -0.0536,-3.0016 -0.240134,-3.08133 l -0.8672,-0.3468 z m 1.960934,-3.02813 c 0.5604,0 1.014133,0.45413 1.014133,1.014 0,0.5604 -0.453733,1.0136 -1.014133,1.0136 -0.5604,0 -1.013467,-0.4532 -1.013467,-1.0136 0,-0.55987 0.453067,-1.014 1.013467,-1.014"></path><path id="path40" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 47.569732,171.51827 h -0.1864 l -0.6672,-1.56093 c -0.09373,-0.21307 -0.3604,-0.2532 -0.6672,-0.2532 -1.227066,0 -1.773866,0.93333 -1.773866,2.06773 0,1.37347 0.439466,3.12134 2.147333,3.12134 0.4536,0 0.9068,-0.17347 1.294266,-0.3604 l 0.2,0.33386 c -0.9208,0.65307 -1.440666,0.9068 -2.668266,0.9068 -1.747333,0 -3.0812,-1.38706 -3.0812,-3.1344 0,-2.188 1.7208,-3.57546 3.828667,-3.57546 0.626533,0 1.227066,0.17333 1.814533,0.3468 l -0.240667,2.10786"></path><path id="path42" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 48.196932,169.33027 c 0.2536,0 1.5604,0 2.4676,-0.10626 0.240133,-0.0271 0.480267,-0.0537 0.5068,-0.0537 -0.0396,0.60054 -0.0796,1.96147 -0.0796,2.8152 0,0.4932 0.05307,2.8676 0.1864,2.96147 0.280267,0.2 0.533867,0.33333 0.920267,0.4796 v 0.18707 c -0.613467,-0.0537 -1.280134,-0.1068 -2.054134,-0.1068 -0.6932,0 -1.333866,0.0531 -1.947333,0.1068 v -0.18707 l 0.8932,-0.42653 c 0.147333,-0.0667 0.213467,-0.64067 0.213467,-2.05467 0,-2.52133 -0.05307,-3.0016 -0.2396,-3.08133 l -0.867067,-0.3468 z m 1.960933,-3.02813 c 0.5604,0 1.013467,0.45413 1.013467,1.014 0,0.5604 -0.453067,1.0136 -1.013467,1.0136 -0.560533,0 -1.014133,-0.4532 -1.014133,-1.0136 0,-0.55987 0.4536,-1.014 1.014133,-1.014"></path><path id="path44" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 55.546932,169.62401 c 1.400933,0 1.5208,1.94733 1.5208,2.96146 0,0.9468 -0.119867,2.62814 -1.440667,2.62814 -1.254133,0 -1.454666,-1.90787 -1.454666,-2.8152 0,-0.8536 0.0536,-2.7744 1.374533,-2.7744 z m 0.120267,-0.5604 c -2.028134,0 -3.6016,1.33426 -3.6016,3.44213 0,2.10733 1.427066,3.26773 3.481333,3.26773 1.9744,0 3.628533,-1.25373 3.628533,-3.30786 0,-2.17494 -1.4004,-3.402 -3.508266,-3.402"></path><path id="path46" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 68.353598,172.30521 c 0,0.92026 -0.186933,2.74786 -1.454133,2.74786 -1.107333,0 -1.5344,-1.17386 -1.5344,-2.85466 0,-1.02707 0.266667,-2.49427 1.560933,-2.49427 1.293734,0 1.4276,1.65373 1.4276,2.60107 z m 1.7204,-4.00214 c 0,-1.13373 0.02707,-1.8676 0.09373,-2.2676 -0.02653,0 -1.0276,0.1604 -2.548,0.1604 h -0.373334 v 0.1864 l 0.666667,0.24014 c 0.306667,0.12026 0.373867,0.2136 0.373867,2.414 v 0.748 c -0.3604,-0.41414 -0.947334,-0.7208 -1.588,-0.7208 -1.9344,0 -3.4416,1.54786 -3.4416,3.44213 0,1.69373 1.254133,3.26773 3.028133,3.26773 0.947333,0 1.7208,-0.39946 2.188,-1.22706 h 0.02707 l -0.04013,1.0672 c 0.519867,-0.0537 1.146934,-0.1068 1.440134,-0.1068 0.347333,0 0.933866,0.0531 1.374533,0.1068 v -0.18707 l -0.853733,-0.39947 c -0.173467,-0.0801 -0.186934,-0.22706 -0.227067,-0.7208 -0.02653,-0.4 -0.120267,-4.02866 -0.120267,-4.82866 v -1.17454"></path><path id="path48" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 74.863065,169.62401 c 0.907733,0 1.134266,0.8536 1.134266,1.60053 v 0.21347 c -0.413466,0.0136 -1.054133,0.0937 -1.854666,0.0937 h -0.559867 v -0.0801 c 0,-0.7604 0.359867,-1.8276 1.280267,-1.8276 z m 2.615066,4.73533 c -0.440133,0.29373 -1.054133,0.45427 -1.601066,0.45427 -1.4536,0 -2.294267,-1.4948 -2.294267,-2.48134 v -0.24013 h 3.547867 c 0.8412,0 0.974533,0 0.974533,-0.49373 0,-1.66774 -1.507333,-2.5348 -3.015067,-2.5348 -1.974533,0 -3.534933,1.414 -3.534933,3.402 0,1.8672 1.3208,3.30786 3.228133,3.30786 1.054134,0 2.121334,-0.37346 2.921334,-1.05373 l -0.226534,-0.3604"></path><path id="path50" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 87.923464,172.07867 h -2.641199 l 1.374,-2.93493 z m 4.535867,3.34787 -0.814,-0.33333 c -0.2,-0.0796 -0.4,-0.46667 -0.6536,-1.00054 -0.6136,-1.28013 -2.188133,-4.80253 -3.1084,-7.3364 h -1.146933 c -1.107733,2.53387 -2.428,5.24214 -3.615067,7.59014 -0.293733,0.58693 -0.387466,0.6536 -0.614,0.7468 l -0.8672,0.33333 v 0.18707 c 0.614,-0.0537 1.214,-0.1068 1.814534,-0.1068 0.653733,0 1.293733,0.0531 1.9344,0.1068 v -0.18707 l -0.907334,-0.31973 c -0.253066,-0.0932 -0.2932,-0.14694 -0.2932,-0.25374 0,-0.10666 0.2532,-0.82706 0.3464,-1.04 l 0.3468,-0.85426 h 3.388533 l 0.387067,1.1204 c 0.06667,0.20053 0.2,0.614 0.2,0.7208 0,0.0797 -0.04013,0.11973 -0.226667,0.18693 l -1.107733,0.4396 v 0.18707 c 0.814,-0.0537 1.6276,-0.1068 2.4416,-0.1068 0.826667,0 1.6672,0.0531 2.4948,0.1068 v -0.18707"></path><path id="path52" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 97.354664,172.30521 c 0,0.92026 -0.1864,2.74786 -1.454133,2.74786 -1.107333,0 -1.533867,-1.17386 -1.533867,-2.85466 0,-1.02707 0.2672,-2.49427 1.5604,-2.49427 1.294267,0 1.4276,1.65373 1.4276,2.60107 z m 1.7208,-4.00214 c 0,-1.13373 0.0272,-1.8676 0.09387,-2.2676 -0.0272,0 -1.0276,0.1604 -2.548,0.1604 h -0.374 v 0.1864 l 0.667733,0.24014 c 0.306267,0.12026 0.373467,0.2136 0.373467,2.414 v 0.748 c -0.3604,-0.41414 -0.947333,-0.7208 -1.587467,-0.7208 -1.9344,0 -3.442266,1.54786 -3.442266,3.44213 0,1.69373 1.254266,3.26773 3.028133,3.26773 0.947467,0 1.721467,-0.39946 2.188133,-1.22706 h 0.02653 l -0.0396,1.0672 c 0.519733,-0.0537 1.1468,-0.1068 1.440133,-0.1068 0.3468,0 0.933867,0.0531 1.37387,0.1068 l 5.3e-4,-0.18707 -0.854133,-0.39947 c -0.173467,-0.0801 -0.1864,-0.22706 -0.226534,-0.7208 -0.02653,-0.4 -0.1204,-4.02866 -0.1204,-4.82866 v -1.17454"></path><path id="path54" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 100.46306,175.42654 0.7072,-0.33333 c 0.33334,-0.15987 0.4,-0.37347 0.4,-2.14787 0,-2.85467 -0.0536,-3.0016 -0.33333,-3.12133 l -0.77387,-0.3068 v -0.18694 c 0.2,0 1.50774,0 2.41454,-0.10626 0.24013,-0.0271 0.48026,-0.0537 0.5068,-0.0537 l -0.0265,1.1604 h 0.0265 c 0.5604,-0.81346 1.56093,-1.26706 2.50773,-1.26706 0.97453,-0.0131 1.56093,0.30666 1.9344,1.26706 0.6136,-0.75986 1.53493,-1.28013 2.5084,-1.26706 1.26667,0 2.05467,0.66706 2.05467,1.92133 0,0.68013 -0.0136,1.14733 -0.0136,1.58693 0,2.26827 0.0667,2.36147 0.37346,2.5084 l 0.73387,0.34627 v 0.18707 c -0.614,-0.0537 -1.25413,-0.1068 -1.94787,-0.1068 -0.65426,0 -1.32093,0.0531 -1.9876,0.1068 v -0.18707 l 0.62667,-0.2932 c 0.20053,-0.0932 0.2932,-0.15987 0.32027,-0.33333 0.0932,-0.52027 0.0932,-1.30787 0.0932,-1.8412 v -1.20054 c 0,-1.1468 -0.35987,-1.65413 -1.17347,-1.65413 -0.8672,0 -1.54787,0.57347 -1.54787,1.574 v 1.28067 c 0,1.74746 0.0401,1.98813 0.2536,2.09426 l 0.78707,0.37347 v 0.18707 c -0.6672,-0.0537 -1.33387,-0.1068 -1.9876,-0.1068 -0.5468,0 -1.214,0.0531 -1.88067,0.1068 v -0.18707 l 0.62654,-0.2932 c 0.20053,-0.0932 0.29373,-0.15987 0.3204,-0.33333 0.0937,-0.52027 0.0937,-1.30787 0.0937,-1.8412 v -1.20054 c 0,-1.1468 -0.36093,-1.65413 -1.174,-1.65413 -0.8672,0 -1.54787,0.57347 -1.54787,1.574 v 1.28067 c 0,1.74746 0.04,1.98813 0.2536,2.09426 l 0.78694,0.37347 v 0.18707 c -0.6672,-0.0537 -1.3344,-0.1068 -1.98747,-0.1068 -0.69373,0 -1.33387,0.0531 -1.94787,0.1068 v -0.18707"></path><path id="path56" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 113.52346,169.33027 c 0.2536,0 1.5604,0 2.46774,-0.10626 0.24,-0.0271 0.48013,-0.0537 0.50666,-0.0537 -0.0395,0.60054 -0.0796,1.96147 -0.0796,2.8152 0,0.4932 0.0531,2.8676 0.1864,2.96147 0.28027,0.2 0.53387,0.33333 0.9208,0.4796 v 0.18707 c -0.614,-0.0537 -1.28066,-0.1068 -2.0552,-0.1068 -0.6932,0 -1.33386,0.0531 -1.9468,0.1068 v -0.18707 l 0.89374,-0.42653 c 0.1464,-0.0667 0.21306,-0.64067 0.21306,-2.05467 0,-2.52133 -0.0532,-3.0016 -0.24013,-3.08133 l -0.86667,-0.3468 z m 1.9604,-3.02813 c 0.5604,0 1.014,0.45413 1.014,1.014 0,0.5604 -0.4536,1.0136 -1.014,1.0136 -0.55986,0 -1.0136,-0.4532 -1.0136,-1.0136 0,-0.55987 0.45374,-1.014 1.0136,-1.014"></path><path id="path58" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 117.83173,175.42654 0.70733,-0.33333 c 0.3328,-0.15987 0.4,-0.37347 0.4,-2.14787 0,-2.85467 -0.0531,-3.0016 -0.33333,-3.12133 l -0.774,-0.3068 v -0.18694 c 0.2,0 1.50733,0 2.41467,-0.10626 0.24,-0.0271 0.48013,-0.0537 0.5072,-0.0537 l -0.0271,1.1604 h 0.0271 c 0.56,-0.81346 1.5604,-1.26706 2.50786,-1.26706 1.2672,0 2.05414,0.66706 2.05414,1.92133 0,0.68013 -0.0135,1.14733 -0.0135,1.58693 0,2.26827 0.0672,2.36147 0.37387,2.5084 l 0.73333,0.34627 v 0.18707 c -0.61347,-0.0537 -1.2536,-0.1068 -1.94787,-0.1068 -0.65306,0 -1.32026,0.0531 -1.98693,0.1068 v -0.18707 l 0.62653,-0.2932 c 0.20054,-0.0932 0.29374,-0.15987 0.32027,-0.33333 0.0937,-0.52027 0.0937,-1.30787 0.0937,-1.8412 v -1.20054 c 0,-1.1468 -0.44053,-1.65413 -1.24106,-1.65413 -0.8672,0 -1.54747,0.57347 -1.54747,1.574 v 1.28067 c 0,1.74746 0.0401,1.98813 0.25373,2.09426 l 0.78694,0.37347 v 0.18707 c -0.6672,-0.0537 -1.3344,-0.1068 -1.988,-0.1068 -0.69374,0 -1.33387,0.0531 -1.94747,0.1068 v -0.18707"></path><path id="path60" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 126.44946,169.33027 c 0.2536,0 1.56094,0 2.46827,-0.10626 0.24013,-0.0271 0.48013,-0.0537 0.50627,-0.0537 -0.0396,0.60054 -0.0797,1.96147 -0.0797,2.8152 0,0.4932 0.0536,2.8676 0.18694,2.96147 0.27973,0.2 0.53333,0.33333 0.9204,0.4796 v 0.18707 c -0.6136,-0.0537 -1.2808,-0.1068 -2.05467,-0.1068 -0.69387,0 -1.33333,0.0531 -1.94747,0.1068 v -0.18707 l 0.89374,-0.42653 c 0.14693,-0.0667 0.2136,-0.64067 0.2136,-2.05467 0,-2.52133 -0.0532,-3.0016 -0.24014,-3.08133 l -0.8672,-0.3468 z m 1.96094,-3.02813 c 0.5604,0 1.0136,0.45413 1.0136,1.014 0,0.5604 -0.4532,1.0136 -1.0136,1.0136 -0.55987,0 -1.014,-0.4532 -1.014,-1.0136 0,-0.55987 0.45413,-1.014 1.014,-1.014"></path><path id="path62" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 131.06506,173.69267 h 0.18707 l 0.51973,1.3604 c 0.0532,0.0939 0.6136,0.16054 0.974,0.16054 0.5468,0 1.30747,-0.18654 1.30747,-0.8808 0,-1.2672 -3.10853,-1.13387 -3.10853,-3.12134 0,-1.18746 1.00053,-2.14786 2.4952,-2.14786 0.6,0 1.46666,0.1604 1.76,0.26666 l -0.0787,1.6812 h -0.188 l -0.52,-1.10733 c -0.04,-0.0801 -0.37333,-0.2 -0.77333,-0.2 -0.54734,0 -1.0676,0.21307 -1.0676,0.84013 0,1.34734 3.1076,1.10734 3.1076,3.22867 -0.04,1.7468 -1.93334,2.00053 -3.29454,2.00053 -0.62666,0 -1.1204,-0.0661 -1.48026,-0.15986 l 0.15986,-1.92094"></path><path id="path64" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 136.13333,169.41041 h 0.0147 c 0.38666,0 1.90666,-0.66667 2.33466,-1.814 h 0.65334 c 0,0.41346 -0.0267,0.84 -0.0267,1.34733 v 0.38653 h 1.82667 v 0.5604 h -1.82667 v 3.98854 c 0,0.58693 0.18667,1.014 0.6,1.014 0.49333,0 1.04133,-0.52027 1.36,-0.8536 l 0.36133,0.31973 c -0.81333,0.94747 -1.45466,1.41413 -2.74933,1.41413 -0.89333,0 -1.50667,-0.64013 -1.50667,-1.5208 0,-0.74693 0.0667,-1.73386 0.0667,-2.8948 v -1.4672 h -1.108 v -0.48026"></path><path id="path66" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 146.83333,171.03854 h -0.348 c -0.15867,-0.4412 -0.38667,-0.66773 -0.88,-0.66773 -0.76,0 -1.22667,0.61413 -1.22667,1.6412 0,0.46666 0.052,2.84106 0.18667,2.93493 0.28,0.2 0.53333,0.33333 0.92,0.4796 v 0.18707 c -0.61333,-0.0537 -1.28,-0.1068 -2.05467,-0.1068 -0.69333,0 -1.33333,0.0531 -1.94666,0.1068 v -0.18707 l 0.89333,-0.42653 c 0.14667,-0.0667 0.21333,-0.64067 0.21333,-2.05467 0,-2.8948 -0.04,-3.0016 -0.41333,-3.148 l -0.69333,-0.28013 v -0.18694 c 0.252,0 1.56,0 2.46666,-0.10626 0.24134,-0.0271 0.48,-0.0537 0.508,-0.0537 l -0.028,1.1604 h 0.028 c 0.30667,-0.4932 0.93334,-1.26706 1.84,-1.26706 0.18667,0 0.36134,0 0.53467,0.0531 v 1.92187"></path><path id="path68" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 151.248,172.27814 v 1.09427 c 0,0.4536 -0.4,1.4412 -1.24134,1.4412 -0.55866,0 -0.93333,-0.44067 -0.93333,-0.9876 0,-1.13387 0.93333,-1.54787 1.88133,-1.54787 z m -3.108,-1.31987 c 0.46666,-0.6004 1.02666,-0.93426 1.78666,-0.93426 0.77467,0 1.32134,0.4 1.32134,1.18746 v 0.5068 h -0.34667 c -1.52133,0 -3.69467,0.37387 -3.69467,2.24107 0,1.16093 0.86667,1.81413 1.908,1.81413 0.892,0 1.64,-0.41306 2.14667,-1.08026 h 0.0267 l -0.04,0.9204 c 0.49333,-0.0537 0.98666,-0.1068 1.48,-0.1068 0.44133,0 0.88133,0.0531 1.32133,0.1068 v -0.18707 l -0.82667,-0.39947 c -0.22666,-0.10733 -0.25333,-0.20053 -0.25333,-1.14786 0,-0.4932 0.0667,-1.65427 0.0667,-2.80107 0,-1.4672 -1.21467,-2.01453 -2.52134,-2.01453 -1.17466,0 -2.148,0.58693 -2.88133,1.4676 l 0.50667,0.42706"></path><path id="path70" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="M 159.59866,171.51827 H 159.412 l -0.66667,-1.56093 c -0.0933,-0.21307 -0.36,-0.2532 -0.66667,-0.2532 -1.228,0 -1.77466,0.93333 -1.77466,2.06773 0,1.37347 0.44,3.12134 2.148,3.12134 0.45333,0 0.90666,-0.17347 1.29333,-0.3604 l 0.20133,0.33386 c -0.92133,0.65307 -1.44133,0.9068 -2.668,0.9068 -1.748,0 -3.08266,-1.38706 -3.08266,-3.1344 0,-2.188 1.72133,-3.57546 3.82933,-3.57546 0.62667,0 1.22667,0.17333 1.81333,0.3468 l -0.24,2.10786"></path><path id="path72" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 160.22666,169.33027 c 0.252,0 1.56,0 2.46667,-0.10626 0.24133,-0.0271 0.48,-0.0537 0.508,-0.0537 -0.04,0.60054 -0.08,1.96147 -0.08,2.8152 0,0.4932 0.052,2.8676 0.18667,2.96147 0.28,0.2 0.53333,0.33333 0.92,0.4796 v 0.18707 c -0.61334,-0.0537 -1.28,-0.1068 -2.05467,-0.1068 -0.69333,0 -1.33333,0.0531 -1.94667,0.1068 v -0.18707 l 0.89334,-0.42653 c 0.14666,-0.0667 0.21333,-0.64067 0.21333,-2.05467 0,-2.52133 -0.0533,-3.0016 -0.24,-3.08133 l -0.86667,-0.3468 z m 1.96134,-3.02813 c 0.56,0 1.01333,0.45413 1.01333,1.014 0,0.5604 -0.45333,1.0136 -1.01333,1.0136 -0.56134,0 -1.01467,-0.4532 -1.01467,-1.0136 0,-0.55987 0.45333,-1.014 1.01467,-1.014"></path><path id="path74" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 167.84266,169.62401 c 1.40134,0 1.52134,1.94733 1.52134,2.96146 0,0.9468 -0.12,2.62814 -1.44134,2.62814 -1.25333,0 -1.45333,-1.90787 -1.45333,-2.8152 0,-0.8536 0.0533,-2.7744 1.37333,-2.7744 z m -0.98666,-1.1876 h 0.81333 l 2.028,-1.33374 c 0.18667,-0.10626 0.33333,-0.2532 0.33333,-0.49386 0,-0.35987 -0.25333,-0.64054 -0.57333,-0.64054 -0.49333,0 -0.70667,0.29374 -1,0.64054 z m 1.10666,0.6272 c -2.02666,0 -3.60133,1.33426 -3.60133,3.44213 0,2.10733 1.428,3.26773 3.48133,3.26773 1.97467,0 3.62934,-1.25373 3.62934,-3.30786 0,-2.17494 -1.40134,-3.402 -3.50934,-3.402"></path><path id="path76" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 171.552,175.42654 0.70666,-0.33333 c 0.33334,-0.15987 0.4,-0.37347 0.4,-2.14787 0,-2.85467 -0.0533,-3.0016 -0.33333,-3.12133 l -0.77333,-0.3068 v -0.18694 c 0.2,0 1.508,0 2.41466,-0.10626 0.24,-0.0271 0.48,-0.0537 0.50667,-0.0537 l -0.0267,1.1604 h 0.0267 c 0.56,-0.81346 1.56,-1.26706 2.508,-1.26706 1.26667,0 2.05467,0.66706 2.05467,1.92133 0,0.68013 -0.0147,1.14733 -0.0147,1.58693 0,2.26827 0.068,2.36147 0.37333,2.5084 l 0.73467,0.34627 v 0.18707 c -0.61333,-0.0537 -1.25333,-0.1068 -1.948,-0.1068 -0.65333,0 -1.32,0.0531 -1.988,0.1068 v -0.18707 l 0.628,-0.2932 c 0.2,-0.0932 0.29333,-0.15987 0.32,-0.33333 0.0933,-0.52027 0.0933,-1.30787 0.0933,-1.8412 v -1.20054 c 0,-1.1468 -0.44,-1.65413 -1.24133,-1.65413 -0.86667,0 -1.54667,0.57347 -1.54667,1.574 v 1.28067 c 0,1.74746 0.04,1.98813 0.25334,2.09426 l 0.78666,0.37347 v 0.18707 c -0.66666,-0.0537 -1.33333,-0.1068 -1.98666,-0.1068 -0.69467,0 -1.33467,0.0531 -1.948,0.1068 v -0.18707"></path><path id="path78" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 185.22533,175.42654 1.09333,-0.42653 c 0.308,-0.12027 0.36134,-0.2136 0.38667,-0.4672 0.0413,-0.26667 0.068,-0.88014 0.068,-1.58747 v -3.22813 c 0,-0.57347 -0.04,-1.14694 -0.04,-1.70734 H 185.652 c -1.228,0 -1.268,0 -1.44,0.42654 l -0.40134,1.0412 H 183.624 v -2.42814 c 1.24133,0.0532 2.988,0.10627 4.16266,0.10627 1.38667,0 2.77467,-0.0531 4.16134,-0.10627 v 2.42814 h -0.18667 l -0.4,-1.0412 c -0.17333,-0.42654 -0.21333,-0.42654 -1.44,-0.42654 H 188.84 c -0.0133,0.5604 -0.04,1.13387 -0.04,1.70734 v 2.82813 c 0,1.214 0.04,1.96093 0.12,2.22813 0.028,0.0932 0.13333,0.17347 0.48,0.2932 l 0.948,0.35987 v 0.18707 c -0.96,-0.0537 -1.76134,-0.1068 -2.56134,-0.1068 -0.80133,0 -1.60133,0.0531 -2.56133,0.1068 v -0.18707"></path><path id="path80" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 197.272,171.03854 h -0.348 c -0.16,-0.4412 -0.38534,-0.66773 -0.88,-0.66773 -0.76,0 -1.22667,0.61413 -1.22667,1.6412 0,0.46666 0.0533,2.84106 0.18667,2.93493 0.28,0.2 0.53333,0.33333 0.92,0.4796 v 0.18707 c -0.61334,-0.0537 -1.28,-0.1068 -2.05467,-0.1068 -0.69333,0 -1.33333,0.0531 -1.948,0.1068 v -0.18707 l 0.89467,-0.42653 c 0.14666,-0.0667 0.21333,-0.64067 0.21333,-2.05467 0,-2.8948 -0.04,-3.0016 -0.41333,-3.148 l -0.69467,-0.28013 v -0.18694 c 0.25467,0 1.56133,0 2.46933,-0.10626 0.24,-0.0271 0.48,-0.0537 0.50667,-0.0537 l -0.0267,1.1604 h 0.0267 c 0.30667,-0.4932 0.93333,-1.26706 1.84133,-1.26706 0.18534,0 0.35867,0 0.53334,0.0531 v 1.92187"></path><path id="path82" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 197.512,169.33027 c 0.252,0 1.56,0 2.46666,-0.10626 0.24,-0.0271 0.48133,-0.0537 0.50667,-0.0537 -0.04,0.60054 -0.0787,1.96147 -0.0787,2.8152 0,0.4932 0.0533,2.8676 0.18667,2.96147 0.28,0.2 0.53333,0.33333 0.92,0.4796 v 0.18707 c -0.61334,-0.0537 -1.28,-0.1068 -2.05333,-0.1068 -0.69467,0 -1.33467,0.0531 -1.948,0.1068 v -0.18707 l 0.89333,-0.42653 c 0.14667,-0.0667 0.21333,-0.64067 0.21333,-2.05467 0,-2.52133 -0.0533,-3.0016 -0.24,-3.08133 l -0.86666,-0.3468 z m 1.96,-3.02813 c 0.56133,0 1.01333,0.45413 1.01333,1.014 0,0.5604 -0.452,1.0136 -1.01333,1.0136 -0.56,0 -1.01334,-0.4532 -1.01334,-1.0136 0,-0.55987 0.45334,-1.014 1.01334,-1.014"></path><path id="path84" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 206.64933,172.66561 c 0,0.93386 -0.0933,2.62813 -1.40134,2.62813 -0.6,0 -0.94666,-0.38693 -1.05333,-0.574 -0.14667,-0.73333 -0.16,-2.0676 -0.16,-2.9348 0,-1.13387 0.24,-2.0808 1.21333,-2.0808 1.28134,0 1.40134,1.89427 1.40134,2.96147 z m -5.416,-6.28334 0.57333,0.22654 c 0.4,0.14746 0.44133,1.148 0.44133,3.38853 v 2.82813 c 0,0.8 -0.0413,1.574 -0.13333,2.37507 0.86667,0.39947 1.81333,0.57293 3.12133,0.57293 1.98667,0 3.52134,-1.3204 3.52134,-3.46826 0,-1.90734 -1.16134,-3.2416 -2.948,-3.2416 -0.70667,0 -1.33467,0.24 -1.77467,0.6536 v -1.34747 c 0,-0.6 0.0267,-1.9208 0.12,-2.33427 -0.0267,0 -1.02667,0.1604 -2.548,0.1604 h -0.37333 v 0.1864"></path><path id="path86" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 216.25466,174.47974 c 0,0.3468 0.0533,0.54733 0.28,0.64053 l 0.70667,0.30627 v 0.18707 c -0.52,-0.0537 -1.04134,-0.1068 -1.57467,-0.1068 -0.4,0 -0.78667,0.0531 -1.17333,0.1068 l 0.04,-1.14747 h -0.0267 c -0.588,0.76093 -1.508,1.30733 -2.52133,1.30733 -1.24,0 -2.028,-0.51986 -2.028,-1.82706 0,-0.69427 0.04,-1.25427 0.04,-1.89427 0,-0.84067 -0.0267,-1.66827 -0.12,-1.98813 -0.04,-0.12027 -0.10667,-0.21347 -0.25334,-0.26667 l -0.73333,-0.28013 v -0.18694 c 0.2,0 1.50667,0 2.41467,-0.10626 0.24,-0.0271 0.48,-0.0537 0.50666,-0.0537 -0.0133,0.49374 -0.0267,1.01414 -0.0267,1.52094 v 2.65466 c 0,0.89374 0.4,1.46774 1.22666,1.46774 0.85467,0 1.45467,-0.72094 1.45467,-1.8948 v -0.86667 c 0,-0.84067 -0.0267,-1.66827 -0.12,-1.98813 -0.04,-0.12027 -0.10667,-0.21347 -0.25333,-0.26667 l -0.73334,-0.28013 v -0.18694 c 0.2,0 1.50667,0 2.41334,-0.10626 0.24133,-0.0271 0.48133,-0.0537 0.508,-0.0537 -0.0133,0.49374 -0.0267,1.01414 -0.0267,1.52094 v 3.78853"></path><path id="path88" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 217.45466,169.41041 h 0.0133 c 0.38667,0 1.908,-0.66667 2.33467,-1.814 h 0.65333 c 0,0.41346 -0.0267,0.84 -0.0267,1.34733 v 0.38653 h 1.828 v 0.5604 h -1.828 v 3.98854 c 0,0.58693 0.18666,1.014 0.6,1.014 0.49466,0 1.04133,-0.52027 1.36133,-0.8536 l 0.36,0.31973 c -0.81333,0.94747 -1.45467,1.41413 -2.748,1.41413 -0.89333,0 -1.508,-0.64013 -1.508,-1.5208 0,-0.74693 0.0667,-1.73386 0.0667,-2.8948 v -1.4672 h -1.10667 v -0.48026"></path><path id="path90" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 226.97999,172.27814 v 1.09427 c 0,0.4536 -0.40133,1.4412 -1.24133,1.4412 -0.56,0 -0.93333,-0.44067 -0.93333,-0.9876 0,-1.13387 0.93333,-1.54787 1.88,-1.54787 z m -3.108,-1.31987 c 0.46667,-0.6004 1.02667,-0.93426 1.78667,-0.93426 0.77333,0 1.32133,0.4 1.32133,1.18746 v 0.5068 h -0.348 c -1.52,0 -3.69466,0.37387 -3.69466,2.24107 0,1.16093 0.868,1.81413 1.908,1.81413 0.89333,0 1.64,-0.41306 2.148,-1.08026 h 0.0253 l -0.0387,0.9204 c 0.49334,-0.0537 0.98667,-0.1068 1.48,-0.1068 0.44,0 0.88,0.0531 1.32134,0.1068 v -0.18707 l -0.828,-0.39947 c -0.22667,-0.10733 -0.25334,-0.20053 -0.25334,-1.14786 0,-0.4932 0.0667,-1.65427 0.0667,-2.80107 0,-1.4672 -1.21333,-2.01453 -2.52133,-2.01453 -1.17334,0 -2.14667,0.58693 -2.88134,1.4676 l 0.508,0.42706"></path><path id="path92" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 234.97066,171.03854 h -0.34667 c -0.16,-0.4412 -0.388,-0.66773 -0.88133,-0.66773 -0.76,0 -1.22667,0.61413 -1.22667,1.6412 0,0.46666 0.0533,2.84106 0.18667,2.93493 0.28,0.2 0.53333,0.33333 0.92,0.4796 v 0.18707 c -0.61333,-0.0537 -1.28,-0.1068 -2.05333,-0.1068 -0.69467,0 -1.33467,0.0531 -1.948,0.1068 v -0.18707 l 0.89333,-0.42653 c 0.14667,-0.0667 0.21333,-0.64067 0.21333,-2.05467 0,-2.8948 -0.04,-3.0016 -0.41333,-3.148 l -0.69333,-0.28013 v -0.18694 c 0.252,0 1.56,0 2.468,-0.10626 0.24,-0.0271 0.48,-0.0537 0.50666,-0.0537 l -0.0267,1.1604 h 0.0267 c 0.30667,-0.4932 0.93334,-1.26706 1.84134,-1.26706 0.18666,0 0.35866,0 0.53333,0.0531 v 1.92187"></path><path id="path94" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 235.20933,169.33027 c 0.25466,0 1.56133,0 2.46933,-0.10626 0.24,-0.0271 0.48,-0.0537 0.50667,-0.0537 -0.04,0.60054 -0.08,1.96147 -0.08,2.8152 0,0.4932 0.0533,2.8676 0.18666,2.96147 0.28,0.2 0.53334,0.33333 0.92,0.4796 v 0.18707 c -0.61333,-0.0537 -1.28133,-0.1068 -2.05466,-0.1068 -0.69334,0 -1.33334,0.0531 -1.948,0.1068 v -0.18707 l 0.89466,-0.42653 c 0.14667,-0.0667 0.21334,-0.64067 0.21334,-2.05467 0,-2.52133 -0.0533,-3.0016 -0.24,-3.08133 l -0.868,-0.3468 z m 1.96266,-3.02813 c 0.55867,0 1.01334,0.45413 1.01334,1.014 0,0.5604 -0.45467,1.0136 -1.01334,1.0136 -0.56133,0 -1.01466,-0.4532 -1.01466,-1.0136 0,-0.55987 0.45333,-1.014 1.01466,-1.014"></path><path id="path96" style="fill:#231f20;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.133333" d="m 243.21466,172.27814 v 1.09427 c 0,0.4536 -0.4,1.4412 -1.24133,1.4412 -0.56,0 -0.93334,-0.44067 -0.93334,-0.9876 0,-1.13387 0.93334,-1.54787 1.88134,-1.54787 z m -3.108,-1.31987 c 0.46667,-0.6004 1.02667,-0.93426 1.78667,-0.93426 0.77333,0 1.32133,0.4 1.32133,1.18746 v 0.5068 h -0.348 c -1.52,0 -3.69467,0.37387 -3.69467,2.24107 0,1.16093 0.86667,1.81413 1.908,1.81413 0.89334,0 1.64,-0.41306 2.148,-1.08026 h 0.0267 l -0.04,0.9204 c 0.49333,-0.0537 0.98667,-0.1068 1.48,-0.1068 0.44,0 0.88,0.0531 1.32133,0.1068 v -0.18707 l -0.828,-0.39947 c -0.22666,-0.10733 -0.252,-0.20053 -0.252,-1.14786 0,-0.4932 0.0653,-1.65427 0.0653,-2.80107 0,-1.4672 -1.21334,-2.01453 -2.52134,-2.01453 -1.17333,0 -2.14666,0.58693 -2.88133,1.4676 l 0.508,0.42706"></path></g></svg>`;
});
const pleca = "/tsaak/_app/immutable/assets/pleca.DasDGH-y.svg";
const css = {
  code: ".anchor.svelte-p64f0i{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity))\n}.anchor.svelte-p64f0i:visited{color:rgb(75 85 99 )\n}.anchor.svelte-p64f0i:hover{--tw-text-opacity:1;color:rgb(133 77 14 / var(--tw-text-opacity))\n}",
  map: `{"version":3,"file":"DocsFooter.svelte","sources":["DocsFooter.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { base } from \\"$app/paths\\";\\nimport { PUBLIC_PATH_APP } from \\"$env/static/public\\";\\nimport { PUBLIC_APP_VERSION } from \\"$env/static/public\\";\\nimport { PUBLIC_DEV_STATUS } from \\"$env/static/public\\";\\nimport { preferences } from \\"$lib/stores/stores\\";\\nimport { secureStore } from \\"$lib/stores/stores\\";\\nimport DocsLogoIcon from \\"$lib/components/DocsLogos/DocsLogoIcon.svelte\\";\\nimport pleca from \\"$lib/assets/pleca.svg\\";\\nconst cBase = \\"bg-surface-50 dark:bg-surface-700 border-t border-surface-500/10 text-xs md:text-base\\";\\nconst cRowOne = \\"flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0\\";\\nconst cRowTwo = \\"flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0\\";\\nconst socialLinks = [\\n  { title: \\"X (Twitter)\\", href: \\"https://x.com/SATMX\\", icon: \\"bi:twitter-x\\" },\\n  { title: \\"Facebook\\", href: \\"https://www.facebook.com/satmexico/\\", icon: \\"bi:facebook\\" },\\n  { title: \\"YouTube\\", href: \\"https://www.youtube.com/user/satmx\\", icon: \\"bi:youtube\\" },\\n  { title: \\"Instagram\\", href: \\"https://www.instagram.com/satmx/\\", icon: \\"bi:instagram\\" }\\n];\\nlet securedata;\\nlet preferencesdata;\\n$: securedata = $secureStore;\\n$: preferencesdata = $preferences;\\n<\/script>\\n\\n\\n\\n<nav class=\\"page-footer {cBase} bg-surface-800 mt-32 text-white\\">\\n\\t<div class=\\"w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10\\">\\n\\t\\t<!-- Row 1 -->\\n\\t\\t<section class={cRowOne}>\\n\\t\\t\\t<div class=\\"grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start\\">\\n\\t\\t\\t\\t<DocsLogoIcon />\\n\\t\\t\\t\\t<p class=\\"!text-sm opacity-80 \\">TSAAK.</p>\\n\\t\\t\\t\\t<!-- Current Version -->\\n\\n\\t\\t\\t\\t<a href=\\"{base + '/' + 'health'}\\" target=\\"\\">\\n\\t\\t\\t\\t\\t<span class=\\"badge variant-soft text-white\\">v{PUBLIC_APP_VERSION}</span>\\n\\t\\t\\t\\t</a>\\n\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"hidden md:grid grid-cols-3 gap-8\\">\\n\\t\\t\\t\\t<div class=\\"space-y-6\\">\\n\\t\\t\\t\\t\\t<h6 class=\\"h6 dark:text-white\\">Navegar</h6>\\n\\t\\t\\t\\t\\t<ul class=\\"space-y-3\\">\\n\\t\\t\\t\\t\\t\\t<li><a class=\\"anchor\\" href=\\"{base + '/' + PUBLIC_PATH_APP + '/'}\\">Página de inicio</a></li>\\n\\t\\t\\t\\t\\t\\t{#if securedata.view === preferencesdata.views[0]}\\n\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<li><a class=\\"anchor\\" href=\\"{base + '/' + PUBLIC_PATH_APP + '/' +  'documentacion'}\\">Documentación</a></li>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t{#if securedata.view === preferencesdata.views[0]}\\n\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<li><a class=\\"anchor\\" href=\\"{base + '/' + PUBLIC_PATH_APP + '/' +  'calendario'}\\">Calendario</a></li>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[3]}\\n\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<li><a class=\\"anchor\\" href=\\"{base + '/' + PUBLIC_PATH_APP + '/' +  'expedientes'}\\">Expedientes</a></li>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2] || securedata.view === preferencesdata.views[3]}\\n\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t<li><a class=\\"anchor\\" href=\\"{base + '/' + PUBLIC_PATH_APP + '/' +  'catalogo-tsaak'}\\">Catalogos</a></li>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2]}\\n\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<li><a class=\\"anchor\\" href=\\"{base + '/' + PUBLIC_PATH_APP + '/' +  'registros'}\\">Registros</a></li>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"space-y-6\\">\\n\\t\\t\\t\\t\\t<h6 class=\\"h6 dark:text-white\\">Sistema</h6>\\n\\t\\t\\t\\t\\t<ul class=\\"space-y-3\\">\\n\\t\\t\\t\\t\\t\\t<li><a class=\\"anchor\\" href=\\"{base + '/' + 'health'}\\">Health</a></li>\\n\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"space-y-6\\">\\n\\t\\t\\t\\t\\t<h6 class=\\"h6 dark:text-white\\">Usuario</h6>\\n\\t\\t\\t\\t\\t<ul class=\\"space-y-3\\">\\n\\t\\t\\t\\t\\t\\t{#if securedata.view === preferencesdata.views[0]}\\n\\n\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t\\t\\t<a class=\\"anchor\\" href=\\"{base + '/'+ PUBLIC_PATH_APP + '/' +  'perfil'}\\">Perfil</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</section>\\n\\n\\t\\t<hr class=\\"opacity-20\\" />\\n\\t\\t<!-- Row 2 -->\\n\\t\\t<section class={cRowTwo}>\\n\\t\\t\\t<p>\\n\\t\\t\\t\\t<a class=\\"anchor\\" href=\\"https://www.gob.mx/privacidadsimplificado\\" target=\\"_blank\\" rel=\\"noreferrer\\">\\n\\t\\t\\t\\t\\tAviso de Privacidad Simplificado\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t<span class=\\"opacity-10 mx-2\\">|</span>\\n\\t\\t\\t\\t<a class=\\"anchor\\" href=\\"https://www.gob.mx/terminos\\" target=\\"_blank\\" rel=\\"noreferrer\\">Términos y condiciones</a>\\n\\t\\t\\t</p>\\n\\t\\t\\t<!--\\n\\t\\t\\t<div class=\\"flex gap-6\\">\\n\\t\\t\\t\\t{#each socialLinks as sl}\\n\\t\\t\\t\\t\\t<a class=\\"opacity-75 hover:opacity-100\\" href={sl.href} target=\\"_blank\\" rel=\\"noreferrer\\" title={sl.title}>\\n\\t\\t\\t\\t\\t\\t<Icon icon=\\"{sl.icon}\\"/>\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\n\\t\\t-->\\n\\n\\t\\t</section>\\n\\t</div>\\n</nav>\\n<img src = {pleca} alt=\\"Pleca\\"/>\\n\\n\\n<style>\\n.anchor {\\n    --tw-text-opacity: 1;\\n    color: rgb(234 88 12 / var(--tw-text-opacity))\\n}\\n.anchor:visited {\\n    color: rgb(75 85 99 )\\n}\\n.anchor:hover {\\n    --tw-text-opacity: 1;\\n    color: rgb(133 77 14 / var(--tw-text-opacity))\\n}\\n</style>"],"names":[],"mappings":"AAmIA,qBAAQ,CACJ,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC;AACjD,CACA,qBAAO,QAAS,CACZ,KAAK,CAAE,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE;AACvB,CACA,qBAAO,MAAO,CACV,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC;AACjD"}`
};
const cBase$4 = "bg-surface-50 dark:bg-surface-700 border-t border-surface-500/10 text-xs md:text-base";
const cRowOne = "flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0";
const cRowTwo = "flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0";
const DocsFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $preferences, $$unsubscribe_preferences;
  let $secureStore, $$unsubscribe_secureStore;
  $$unsubscribe_preferences = subscribe(preferences, (value) => $preferences = value);
  $$unsubscribe_secureStore = subscribe(secureStore, (value) => $secureStore = value);
  let securedata2;
  let preferencesdata;
  $$result.css.add(css);
  securedata2 = $secureStore;
  preferencesdata = $preferences;
  $$unsubscribe_preferences();
  $$unsubscribe_secureStore();
  return `<nav class="${"page-footer " + escape(cBase$4, true) + " bg-surface-800 mt-32 text-white svelte-p64f0i"}"><div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10"> <section class="${escape(null_to_empty(cRowOne), true) + " svelte-p64f0i"}"><div class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start">${validate_component(DocsLogoIcon, "DocsLogoIcon").$$render($$result, {}, {}, {})} <p class="!text-sm opacity-80 " data-svelte-h="svelte-jj61yc">TSAAK.</p>  <a${add_attribute("href", base + "/health", 0)} target=""><span class="badge variant-soft text-white">v${escape(PUBLIC_APP_VERSION)}</span></a></div> <div class="hidden md:grid grid-cols-3 gap-8"><div class="space-y-6"><h6 class="h6 dark:text-white" data-svelte-h="svelte-rba8va">Navegar</h6> <ul class="space-y-3"><li data-svelte-h="svelte-i04ybk"><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/", 0)}>Página de inicio</a></li> ${securedata2.view === preferencesdata.views[0] ? `` : `<li data-svelte-h="svelte-insx5z"><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/documentacion", 0)}>Documentación</a></li>`} ${securedata2.view === preferencesdata.views[0] ? `` : `<li data-svelte-h="svelte-1x84t5x"><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/calendario", 0)}>Calendario</a></li>`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[3] ? `` : `<li data-svelte-h="svelte-1cieyz9"><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/expedientes", 0)}>Expedientes</a></li>`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[2] || securedata2.view === preferencesdata.views[3] ? `` : `<li data-svelte-h="svelte-1dtt3t5"><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/catalogo-tsaak", 0)}>Catalogos</a></li>`} ${securedata2.view === preferencesdata.views[0] || securedata2.view === preferencesdata.views[1] || securedata2.view === preferencesdata.views[2] ? `` : `<li data-svelte-h="svelte-km6b3h"><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/registros", 0)}>Registros</a></li>`}</ul></div> <div class="space-y-6" data-svelte-h="svelte-1uvxw9i"><h6 class="h6 dark:text-white">Sistema</h6> <ul class="space-y-3"><li><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/health", 0)}>Health</a></li></ul></div> <div class="space-y-6"><h6 class="h6 dark:text-white" data-svelte-h="svelte-17hah04">Usuario</h6> <ul class="space-y-3">${securedata2.view === preferencesdata.views[0] ? `` : `<li data-svelte-h="svelte-1is292y"><a class="anchor svelte-p64f0i"${add_attribute("href", base + "/" + PUBLIC_PATH_APP + "/perfil", 0)}>Perfil</a></li>`}</ul></div></div></section> <hr class="opacity-20">  <section class="${escape(null_to_empty(cRowTwo), true) + " svelte-p64f0i"}"><p data-svelte-h="svelte-wi2sd7"><a class="anchor svelte-p64f0i" href="https://www.gob.mx/privacidadsimplificado" target="_blank" rel="noreferrer">Aviso de Privacidad Simplificado</a> <span class="opacity-10 mx-2">|</span> <a class="anchor svelte-p64f0i" href="https://www.gob.mx/terminos" target="_blank" rel="noreferrer">Términos y condiciones</a></p> </section></div></nav> <img${add_attribute("src", pleca, 0)} alt="Pleca">`;
});
const cBase$3 = "card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto";
const cHeader$1 = "bg-surface-300-600-token flex items-center";
const cSearchInput = "bg-transparent border-0 ring-0 focus:ring-0 w-full m-2 ml-4 text-lg";
const cFooter = "hidden md:flex items-center gap-2 bg-surface-300-600-token p-4 text-xs font-bold";
const DocsSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  getModalStore();
  let elemDocSearch;
  return `<div class="${"modal-search " + escape(cBase$3, true)}"${add_attribute("this", elemDocSearch, 0)}> <header class="${"modal-search-header " + escape(cHeader$1, true)}"><i class="fa-solid fa-magnifying-glass text-xl ml-4"></i> <input${add_attribute("class", cSearchInput, 0)} type="search" placeholder="Search..."${add_attribute("value", searchTerm, 0)}></header>   <footer class="${"modal-search-footer " + escape(cFooter, true)}"><div data-svelte-h="svelte-1of5rul"><kbd class="kbd">Esc</kbd> to close</div> <div data-svelte-h="svelte-2mpalo"><kbd class="kbd">Tab</kbd> to navigate</div> <div data-svelte-h="svelte-lpbx6u"><kbd class="kbd">Enter</kbd> to select</div></footer></div>`;
});
const cBase$2 = "card p-4 w-modal shadow-xl space-y-4";
const cHeader = "text-2xl font-bold";
const ModalExampleList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  let flavor = "chocolate";
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0) $$bindings.parent(parent);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase$2, true)}"><header${add_attribute("class", cHeader, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header> <article>${escape($modalStore[0].body ?? "(body missing)")}</article> ${validate_component(ListBox, "ListBox").$$render(
      $$result,
      {
        class: "border border-surface-500 p-4 rounded-container-token"
      },
      {},
      {
        default: () => {
          return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "chocolate",
              value: "chocolate",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Chocolate`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "vanilla",
              value: "vanilla",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Vanilla`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "strawberry",
              value: "strawberry",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Strawberry`;
              }
            }
          )} ${validate_component(ListBoxItem, "ListBoxItem").$$render(
            $$result,
            {
              name: "peach",
              value: "peach",
              group: flavor
            },
            {
              group: ($$value) => {
                flavor = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `Peach`;
              }
            }
          )}`;
        }
      }
    )}  <footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">${escape(parent.buttonTextCancel)}</button> <button class="${"btn " + escape(parent.buttonPositive, true)}">Select Flavors</button></footer></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_modalStore();
  return $$rendered;
});
const cBase$1 = "relative w-modal-wide shadow-xl";
const cButton$1 = "absolute -top-3 -right-3 z-1 btn-icon variant-filled";
const cIframe = "bg-black w-full aspect-video rounded-container-token overflow-hidden";
const ModalExampleEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0) $$bindings.parent(parent);
  $$unsubscribe_modalStore();
  return ` ${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase$1, true)}"><button${add_attribute("class", cButton$1, 0)}>✕</button> <iframe${add_attribute("class", cIframe, 0)} src="https://www.youtube.com/embed/vOGhAV-84iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` : ``}`;
});
const cButton = "fixed top-4 right-4 z-50 font-bold shadow-xl";
const cImage = "max-w-[90%] max-h-[90%] rounded-container-token overflow-hidden shadow-xl";
const ModalExampleImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0) $$bindings.parent(parent);
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? ` <button class="${"btn-icon variant-filled " + escape(cButton, true)}">×</button>  <img${add_attribute("src", $modalStore[0]?.image, 0)}${add_attribute("class", cImage, 0)} alt="Example" title="${"Source: " + escape($modalStore[0]?.meta.source, true)}">` : ``}`;
});
const cBase = "bg-surface-100-800-token w-screen h-screen p-4 flex justify-center items-center";
const ModalExampleFullscreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalStore, $$unsubscribe_modalStore;
  let { parent } = $$props;
  const modalStore = getModalStore();
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0) $$bindings.parent(parent);
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"modal-example-fullscreen " + escape(cBase, true)}"><div class="flex flex-col items-center space-y-4"><h2 class="h2" data-svelte-h="svelte-1wmz5tx">Full Screen Modal</h2> <p data-svelte-h="svelte-5orex4">This demonstrates a full screen modal dialog.</p> <button class="btn variant-filled" data-svelte-h="svelte-bs62k5">× Close</button></div></div>` : ``}`;
});
const css$1 = {
  code: ".page.svelte-ktpv0w{display:flex;height:100vh;flex-direction:column\n}.header-footer.svelte-ktpv0w{position:sticky\n}.header.svelte-ktpv0w{top:0px;z-index:40;display:flex;flex-direction:column\n}.footer.svelte-ktpv0w{bottom:0px\n}.content.svelte-ktpv0w{flex-grow:1\n}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"../../app.postcss\\";\\nimport hljs from \\"highlight.js/lib/core\\";\\nimport \\"highlight.js/styles/github-dark.css\\";\\nimport { storeHighlightJs } from \\"@skeletonlabs/skeleton\\";\\nimport xml from \\"highlight.js/lib/languages/xml\\";\\nimport css from \\"highlight.js/lib/languages/css\\";\\nimport javascript from \\"highlight.js/lib/languages/javascript\\";\\nimport typescript from \\"highlight.js/lib/languages/typescript\\";\\nimport { base } from \\"$app/paths\\";\\nhljs.registerLanguage(\\"xml\\", xml);\\nhljs.registerLanguage(\\"css\\", css);\\nhljs.registerLanguage(\\"javascript\\", javascript);\\nhljs.registerLanguage(\\"typescript\\", typescript);\\nstoreHighlightJs.set(hljs);\\nimport { computePosition, autoUpdate, flip, shift, offset, arrow } from \\"@floating-ui/dom\\";\\nimport { storePopup } from \\"@skeletonlabs/skeleton\\";\\nstorePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });\\nimport { browser } from \\"$app/environment\\";\\nimport { page } from \\"$app/stores\\";\\nimport { afterNavigate } from \\"$app/navigation\\";\\nimport { Modal, Toast, initializeStores, prefersReducedMotionStore } from \\"@skeletonlabs/skeleton\\";\\ninitializeStores();\\nimport { onMount } from \\"svelte\\";\\nimport { autoModeWatcher } from \\"@skeletonlabs/skeleton\\";\\nimport { setInitialClassState } from \\"@skeletonlabs/skeleton\\";\\nimport { modeOsPrefers, modeUserPrefers, modeCurrent } from \\"@skeletonlabs/skeleton\\";\\nimport DocsAppBar from \\"$lib/components/DocsAppBar/DocsAppBar.svelte\\";\\nimport DocsSidebar from \\"$lib/components/DocsSidebar/DocsSidebar.svelte\\";\\nimport DocsDrawer from \\"$lib/components/DocsDrawer/DocsDrawer.svelte\\";\\nimport DocsFooter from \\"$lib/components/DocsFooter/DocsFooter.svelte\\";\\nimport DocsSearch from \\"$lib/modals/DocsSearch/DocsSearch.svelte\\";\\nimport ModalExampleList from \\"$lib/modals/examples/ModalExampleList.svelte\\";\\nimport ModalExampleEmbed from \\"$lib/modals/examples/ModalExampleEmbed.svelte\\";\\nimport ModalExampleImage from \\"$lib/modals/examples/ModalExampleImage.svelte\\";\\nimport ModalExampleFullscreen from \\"$lib/modals/examples/ModalExampleFullscreen.svelte\\";\\nconst modalComponentRegistry = {\\n  modalSearch: { ref: DocsSearch },\\n  exampleList: { ref: ModalExampleList },\\n  exampleEmbed: { ref: ModalExampleEmbed },\\n  exampleImage: { ref: ModalExampleImage },\\n  fullScreen: { ref: ModalExampleFullscreen }\\n};\\nfunction matchPathWhitelist(pageUrlPath) {\\n  if (pageUrlPath === base + \\"/app/\\") return true;\\n  return pageUrlPath.includes(base + \\"/health/\\");\\n}\\n$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? \\"w-0\\" : \\"bg-surface-50-900-token lg:w-[360px] animate-fade-right\\";\\n$: console.log(\\"::matchPathWhitelist($page.url.pathname))::\\", $page.url.pathname);\\nonMount(() => {\\n});\\n<\/script>\\n\\n<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();<\/script>'}</svelte:head>\\n<!-- <svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();<\/script>'}</svelte:head> -->\\n\\n<!-- Overlays -->\\n<Modal components={modalComponentRegistry} />\\n<Toast />\\n<DocsDrawer />\\n\\n<!-- App Layout -->\\n<div class=\\"page \\">\\n    <!-- Header -->\\n    <div class=\\"header header-footer \\">\\n        <DocsAppBar />\\n    </div>\\n\\n    <!-- Main -->\\n    <div class=\\"flex\\">\\n        <!-- Sidebar (Left) -->\\n        <div class=\\"{slotSidebarLeft} \\"> <!-- \\"hidden overflow-hidden\\" -->\\n            <DocsSidebar class=\\"hidden lg:grid overflow-hidden\\" />\\n        </div>\\n\\n        <div class=\\"w-full flex flex-col \\">\\n            <!-- Page Content -->\\n            <div class=\\"content \\">\\n                <slot />\\n            </div>\\n            <!-- Page Footer -->\\n            <div class=\\"header-footer \\">\\n                <DocsFooter />\\n            </div>\\n        </div>\\n\\n    </div>\\n</div>\\n\\n<style>\\n    .page {\\n\\n    display: flex;\\n\\n    height: 100vh;\\n\\n    flex-direction: column\\n}\\n\\n    .header-footer {\\n\\n    position: sticky\\n}\\n\\n    .header {\\n\\n    top: 0px;\\n\\n    z-index: 40;\\n\\n    display: flex;\\n\\n    flex-direction: column\\n}\\n\\n    .footer {\\n\\n    bottom: 0px\\n}\\n\\n    .content {\\n\\n    flex-grow: 1\\n}\\n</style>\\n\\n"],"names":[],"mappings":"AAyFI,mBAAM,CAEN,OAAO,CAAE,IAAI,CAEb,MAAM,CAAE,KAAK,CAEb,cAAc,CAAE;AACpB,CAEI,4BAAe,CAEf,QAAQ,CAAE;AACd,CAEI,qBAAQ,CAER,GAAG,CAAE,GAAG,CAER,OAAO,CAAE,EAAE,CAEX,OAAO,CAAE,IAAI,CAEb,cAAc,CAAE;AACpB,CAEI,qBAAQ,CAER,MAAM,CAAE;AACZ,CAEI,sBAAS,CAET,SAAS,CAAE;AACf"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotSidebarLeft;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("css", css$2);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);
  storeHighlightJs.set(hljs);
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  initializeStores();
  const modalComponentRegistry = {
    modalSearch: { ref: DocsSearch },
    exampleList: { ref: ModalExampleList },
    exampleEmbed: { ref: ModalExampleEmbed },
    exampleImage: { ref: ModalExampleImage },
    fullScreen: { ref: ModalExampleFullscreen }
  };
  function matchPathWhitelist(pageUrlPath) {
    if (pageUrlPath === base + "/app/") return true;
    return pageUrlPath.includes(base + "/health/");
  }
  $$result.css.add(css$1);
  slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? "w-0" : "bg-surface-50-900-token lg:w-[360px] animate-fade-right";
  {
    console.log("::matchPathWhitelist($page.url.pathname))::", $page.url.pathname);
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-13st50g_START --><!-- HTML_TAG_START -->${"<script>(" + autoModeWatcher.toString() + ")();<\/script>"}<!-- HTML_TAG_END --><!-- HEAD_svelte-13st50g_END -->`, ""}   ${validate_component(Modal, "Modal").$$render($$result, { components: modalComponentRegistry }, {}, {})} ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} ${validate_component(DocsDrawer, "DocsDrawer").$$render($$result, {}, {}, {})}  <div class="page  svelte-ktpv0w"> <div class="header header-footer  svelte-ktpv0w">${validate_component(DocsAppBar, "DocsAppBar").$$render($$result, {}, {}, {})}</div>  <div class="flex"> <div class="${escape(slotSidebarLeft, true) + " svelte-ktpv0w"}"> ${validate_component(DocsSidebar, "DocsSidebar").$$render($$result, { class: "hidden lg:grid overflow-hidden" }, {}, {})}</div> <div class="w-full flex flex-col "> <div class="content  svelte-ktpv0w">${slots.default ? slots.default({}) : ``}</div>  <div class="header-footer  svelte-ktpv0w">${validate_component(DocsFooter, "DocsFooter").$$render($$result, {}, {}, {})}</div></div></div> </div>`;
});
export {
  Layout as default
};
