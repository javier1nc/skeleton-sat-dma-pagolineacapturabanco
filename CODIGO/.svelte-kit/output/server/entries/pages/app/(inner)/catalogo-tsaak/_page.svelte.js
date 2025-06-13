import { c as create_ssr_component, l as createEventDispatcher, e as escape, n as each, d as add_attribute, s as setContext, g as getContext, f as compute_slots, v as validate_component } from "../../../../../chunks/ssr.js";
import { b as base } from "../../../../../chunks/paths.js";
import { P as PUBLIC_PATH_APP } from "../../../../../chunks/public.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>`;
const rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;
const leftAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>`;
const rightAngles = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>`;
const cBase$1 = "flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4";
const cLabel = "w-full md:w-auto";
const Paginator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesButtonActive;
  let classesBase;
  let classesLabel;
  let classesSelect;
  let classesControls;
  const dispatch = createEventDispatcher();
  let { settings = {
    page: 0,
    limit: 5,
    size: 0,
    amounts: [1, 2, 5, 10]
  } } = $$props;
  let { disabled = false } = $$props;
  let { showPreviousNextButtons = true } = $$props;
  let { showFirstLastButtons = false } = $$props;
  let { showNumerals = false } = $$props;
  let { maxNumerals = 1 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { select = "select min-w-[150px]" } = $$props;
  let { amountText = "Items" } = $$props;
  let { regionControl = "btn-group" } = $$props;
  let { controlVariant = "variant-filled" } = $$props;
  let { controlSeparator = "" } = $$props;
  let { active = "variant-filled-primary" } = $$props;
  let { buttonClasses = "!px-3 !py-1.5 fill-current" } = $$props;
  let { buttonTextPrevious = leftArrow } = $$props;
  let { buttonTextNext = rightArrow } = $$props;
  let { buttonTextFirst = leftAngles } = $$props;
  let { buttonTextLast = rightAngles } = $$props;
  let { separatorText = "of" } = $$props;
  let { labelFirst = "First page" } = $$props;
  let { labelPrevious = "Previous page" } = $$props;
  let { labelNext = "Next page" } = $$props;
  let { labelLast = "Last page" } = $$props;
  let lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
  let controlPages = getNumerals();
  function onChangeLength() {
    dispatch("amount", settings.limit);
    lastPage = Math.max(0, Math.ceil(settings.size / settings.limit - 1));
    if (settings.page > lastPage) {
      settings.page = lastPage;
    }
    controlPages = getNumerals();
  }
  function getFullNumerals() {
    const pages = [];
    for (let index = 0; index <= lastPage; index++) {
      pages.push(index);
    }
    return pages;
  }
  function getNumerals() {
    const pages = [];
    const isWithinLeftSection = settings.page < maxNumerals + 2;
    const isWithinRightSection = settings.page > lastPage - (maxNumerals + 2);
    if (lastPage <= maxNumerals * 2 + 1) return getFullNumerals();
    pages.push(0);
    if (!isWithinLeftSection) pages.push(-1);
    if (isWithinLeftSection || isWithinRightSection) {
      const sectionStart = isWithinLeftSection ? 1 : lastPage - (maxNumerals + 2);
      const sectionEnd = isWithinRightSection ? lastPage - 1 : maxNumerals + 2;
      for (let i = sectionStart; i <= sectionEnd; i++) {
        pages.push(i);
      }
    } else {
      for (let i = settings.page - maxNumerals; i <= settings.page + maxNumerals; i++) {
        pages.push(i);
      }
    }
    if (!isWithinRightSection) pages.push(-1);
    pages.push(lastPage);
    return pages;
  }
  function updateSize(size) {
    lastPage = Math.max(0, Math.ceil(size / settings.limit - 1));
    controlPages = getNumerals();
  }
  if ($$props.settings === void 0 && $$bindings.settings && settings !== void 0) $$bindings.settings(settings);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.showPreviousNextButtons === void 0 && $$bindings.showPreviousNextButtons && showPreviousNextButtons !== void 0) $$bindings.showPreviousNextButtons(showPreviousNextButtons);
  if ($$props.showFirstLastButtons === void 0 && $$bindings.showFirstLastButtons && showFirstLastButtons !== void 0) $$bindings.showFirstLastButtons(showFirstLastButtons);
  if ($$props.showNumerals === void 0 && $$bindings.showNumerals && showNumerals !== void 0) $$bindings.showNumerals(showNumerals);
  if ($$props.maxNumerals === void 0 && $$bindings.maxNumerals && maxNumerals !== void 0) $$bindings.maxNumerals(maxNumerals);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0) $$bindings.justify(justify);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0) $$bindings.select(select);
  if ($$props.amountText === void 0 && $$bindings.amountText && amountText !== void 0) $$bindings.amountText(amountText);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0) $$bindings.regionControl(regionControl);
  if ($$props.controlVariant === void 0 && $$bindings.controlVariant && controlVariant !== void 0) $$bindings.controlVariant(controlVariant);
  if ($$props.controlSeparator === void 0 && $$bindings.controlSeparator && controlSeparator !== void 0) $$bindings.controlSeparator(controlSeparator);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.buttonClasses === void 0 && $$bindings.buttonClasses && buttonClasses !== void 0) $$bindings.buttonClasses(buttonClasses);
  if ($$props.buttonTextPrevious === void 0 && $$bindings.buttonTextPrevious && buttonTextPrevious !== void 0) $$bindings.buttonTextPrevious(buttonTextPrevious);
  if ($$props.buttonTextNext === void 0 && $$bindings.buttonTextNext && buttonTextNext !== void 0) $$bindings.buttonTextNext(buttonTextNext);
  if ($$props.buttonTextFirst === void 0 && $$bindings.buttonTextFirst && buttonTextFirst !== void 0) $$bindings.buttonTextFirst(buttonTextFirst);
  if ($$props.buttonTextLast === void 0 && $$bindings.buttonTextLast && buttonTextLast !== void 0) $$bindings.buttonTextLast(buttonTextLast);
  if ($$props.separatorText === void 0 && $$bindings.separatorText && separatorText !== void 0) $$bindings.separatorText(separatorText);
  if ($$props.labelFirst === void 0 && $$bindings.labelFirst && labelFirst !== void 0) $$bindings.labelFirst(labelFirst);
  if ($$props.labelPrevious === void 0 && $$bindings.labelPrevious && labelPrevious !== void 0) $$bindings.labelPrevious(labelPrevious);
  if ($$props.labelNext === void 0 && $$bindings.labelNext && labelNext !== void 0) $$bindings.labelNext(labelNext);
  if ($$props.labelLast === void 0 && $$bindings.labelLast && labelLast !== void 0) $$bindings.labelLast(labelLast);
  classesButtonActive = (page) => {
    return page === settings.page ? `${active} pointer-events-none` : "";
  };
  {
    onChangeLength();
  }
  {
    updateSize(settings.size);
  }
  classesBase = `${cBase$1} ${justify} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  classesSelect = `${select}`;
  classesControls = `${regionControl} ${controlVariant} ${controlSeparator}`;
  return `<div class="${"paginator " + escape(classesBase, true)}" data-testid="paginator"> ${settings.amounts.length ? `<label class="${"paginator-label " + escape(classesLabel, true)}"><select class="${"paginator-select " + escape(classesSelect, true)}" ${disabled ? "disabled" : ""} aria-label="Select Amount">${each(settings.amounts, (amount) => {
    return `<option${add_attribute("value", amount, 0)}>${escape(amount)} ${escape(amountText)}</option>`;
  })}</select></label>` : ``}  <div class="${"paginator-controls " + escape(classesControls, true)}"> ${showFirstLastButtons ? `<button type="button"${add_attribute("aria-label", labelFirst, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || settings.page === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextFirst}<!-- HTML_TAG_END --></button>` : ``}  ${showPreviousNextButtons ? `<button type="button"${add_attribute("aria-label", labelPrevious, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || settings.page === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextPrevious}<!-- HTML_TAG_END --></button>` : ``}  ${showNumerals === false ? ` <button type="button" class="${escape(buttonClasses, true) + " pointer-events-none !text-sm"}">${escape(settings.page * settings.limit + 1)}-${escape(Math.min(settings.page * settings.limit + settings.limit, settings.size))} <span class="opacity-50">${escape(separatorText)} ${escape(settings.size)}</span></button>` : ` ${each(controlPages, (page) => {
    return `<button type="button" ${disabled ? "disabled" : ""} class="${escape(buttonClasses, true) + " " + escape(classesButtonActive(page), true)}">${escape(page >= 0 ? page + 1 : "...")} </button>`;
  })}`}  ${showPreviousNextButtons ? `<button type="button"${add_attribute("aria-label", labelNext, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || (settings.page + 1) * settings.limit >= settings.size ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextNext}<!-- HTML_TAG_END --></button>` : ``}  ${showFirstLastButtons ? `<button type="button"${add_attribute("aria-label", labelLast, 0)}${add_attribute("class", buttonClasses, 0)} ${disabled || (settings.page + 1) * settings.limit >= settings.size ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonTextLast}<!-- HTML_TAG_END --></button>` : ``}</div></div>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesTable;
  createEventDispatcher();
  let { source } = $$props;
  let { interactive = false } = $$props;
  let { element = "table" } = $$props;
  let { text = "" } = $$props;
  let { color = "" } = $$props;
  let { regionHead = "" } = $$props;
  let { regionHeadCell = "" } = $$props;
  let { regionBody = "" } = $$props;
  let { regionCell = "" } = $$props;
  let { regionFoot = "" } = $$props;
  let { regionFootCell = "" } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0) $$bindings.source(source);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0) $$bindings.interactive(interactive);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.regionHead === void 0 && $$bindings.regionHead && regionHead !== void 0) $$bindings.regionHead(regionHead);
  if ($$props.regionHeadCell === void 0 && $$bindings.regionHeadCell && regionHeadCell !== void 0) $$bindings.regionHeadCell(regionHeadCell);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0) $$bindings.regionBody(regionBody);
  if ($$props.regionCell === void 0 && $$bindings.regionCell && regionCell !== void 0) $$bindings.regionCell(regionCell);
  if ($$props.regionFoot === void 0 && $$bindings.regionFoot && regionFoot !== void 0) $$bindings.regionFoot(regionFoot);
  if ($$props.regionFootCell === void 0 && $$bindings.regionFootCell && regionFootCell !== void 0) $$bindings.regionFootCell(regionFootCell);
  classesBase = `${$$props.class || ""}`;
  classesTable = `${element} ${text} ${color}`;
  return `<div class="${"table-container " + escape(classesBase, true)}">  <table class="${[escape(classesTable, true), interactive ? "table-interactive" : ""].join(" ").trim()}"${add_attribute("role", interactive ? "grid" : "table", 0)}>  <thead class="${"table-head " + escape(regionHead, true)}"><tr>${each(source.head, (heading) => {
    return `<th${add_attribute("class", regionHeadCell, 0)} role="columnheader"><!-- HTML_TAG_START -->${heading}<!-- HTML_TAG_END --></th>`;
  })}</tr></thead>  <tbody class="${"table-body " + escape(regionBody, true)}">${each(source.body, (row, rowIndex) => {
    return `  <tr${add_attribute("aria-rowindex", rowIndex + 1, 0)}>${each(row, (cell, cellIndex) => {
      return ` <td${add_attribute("class", regionCell, 0)} role="gridcell"${add_attribute("aria-colindex", cellIndex + 1, 0)}${add_attribute("tabindex", cellIndex === 0 && interactive ? 0 : -1, 0)}><!-- HTML_TAG_START -->${Number(cell) === 0 ? cell : cell ? cell : "-"}<!-- HTML_TAG_END --> </td>`;
    })} </tr>`;
  })}</tbody>  ${source.foot ? `<tfoot class="${"table-foot " + escape(regionFoot, true)}"><tr>${each(source.foot, (cell) => {
    return `<td${add_attribute("class", regionFootCell, 0)}><!-- HTML_TAG_START -->${cell}<!-- HTML_TAG_END --></td>`;
  })}</tr></tfoot>` : ``}</table></div>`;
});
const TreeView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { selection = false } = $$props;
  let { multiple = false } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-4 px-4" } = $$props;
  let { indent = "ml-4" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { hyphenOpacity = "opacity-10" } = $$props;
  let { regionSummary = "" } = $$props;
  let { regionSymbol = "" } = $$props;
  let { regionChildren = "" } = $$props;
  let { labelledby = "" } = $$props;
  function expandAll() {
    const detailsElements = tree.querySelectorAll("details.tree-item");
    detailsElements.forEach((details) => {
      if (!details.open) {
        const summary = details.querySelector("summary.tree-item-summary");
        if (summary) summary.click();
      }
    });
  }
  function collapseAll() {
    const detailsElements = tree.querySelectorAll("details.tree-item");
    detailsElements.forEach((details) => {
      if (details.open) {
        const summary = details.querySelector("summary.tree-item-summary");
        if (summary) summary.click();
      }
    });
  }
  setContext("open", open);
  setContext("selection", selection);
  setContext("multiple", multiple);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("indent", indent);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("hyphenOpacity", hyphenOpacity);
  setContext("regionSummary", regionSummary);
  setContext("regionSymbol", regionSymbol);
  setContext("regionChildren", regionChildren);
  let tree;
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0) $$bindings.selection(selection);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.indent === void 0 && $$bindings.indent && indent !== void 0) $$bindings.indent(indent);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0) $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0) $$bindings.caretClosed(caretClosed);
  if ($$props.hyphenOpacity === void 0 && $$bindings.hyphenOpacity && hyphenOpacity !== void 0) $$bindings.hyphenOpacity(hyphenOpacity);
  if ($$props.regionSummary === void 0 && $$bindings.regionSummary && regionSummary !== void 0) $$bindings.regionSummary(regionSummary);
  if ($$props.regionSymbol === void 0 && $$bindings.regionSymbol && regionSymbol !== void 0) $$bindings.regionSymbol(regionSymbol);
  if ($$props.regionChildren === void 0 && $$bindings.regionChildren && regionChildren !== void 0) $$bindings.regionChildren(regionChildren);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0) $$bindings.labelledby(labelledby);
  if ($$props.expandAll === void 0 && $$bindings.expandAll && expandAll !== void 0) $$bindings.expandAll(expandAll);
  if ($$props.collapseAll === void 0 && $$bindings.collapseAll && collapseAll !== void 0) $$bindings.collapseAll(collapseAll);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  return `<div class="${"tree " + escape(classesBase, true)}" data-testid="tree" role="tree"${add_attribute("aria-multiselectable", multiple, 0)}${add_attribute("aria-label", labelledby, 0)}${add_attribute("aria-disabled", disabled, 0)}${add_attribute("this", tree, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "";
const cSummary = "list-none [&::-webkit-details-marker]:hidden flex items-center cursor-pointer";
const cSymbol = "fill-current w-3 text-center transition-transform duration-[200ms]";
const cChildren = "";
const cDisabled = "opacity-50 !cursor-not-allowed";
const TreeViewItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesCaretState;
  let classesDisabled;
  let classesBase;
  let classesSummary;
  let classesSymbol;
  let classesCaret;
  let classesHyphen;
  let classesChildren;
  let $$slots = compute_slots(slots);
  let { group = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { checked = false } = $$props;
  let { children = [] } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { open = getContext("open") } = $$props;
  let { selection = getContext("selection") } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { disabled = getContext("disabled") } = $$props;
  let { indeterminate = false } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { indent = getContext("indent") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { hyphenOpacity = getContext("hyphenOpacity") } = $$props;
  let { regionSummary = getContext("regionSummary") } = $$props;
  let { regionSymbol = getContext("regionSymbol") } = $$props;
  let { regionChildren = getContext("regionChildren") } = $$props;
  let { hideLead = false } = $$props;
  let { hideChildren = false } = $$props;
  let treeItem;
  let childrenDiv;
  function updateCheckbox(group2, indeterminate2) {
    if (!Array.isArray(group2)) return;
    checked = group2.indexOf(value) >= 0;
    dispatch("groupChange", { checked, indeterminate: indeterminate2 });
    dispatch("childChange");
  }
  function updateGroup(checked2, indeterminate2) {
    if (!Array.isArray(group)) return;
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
    if (!indeterminate2) {
      onParentChange();
    }
  }
  function updateRadio(group2) {
    checked = group2 === value;
    dispatch("groupChange", { checked, indeterminate: false });
    if (group2) dispatch("childChange");
  }
  function updateRadioGroup(checked2) {
    if (checked2 && group !== value) group = value;
    else if (!checked2 && group === value) group = "";
  }
  function onChildValueChange() {
    if (multiple) {
      if (!Array.isArray(group)) return;
      const childrenValues = children.map((c) => c.value);
      const childrenGroup = children[0].group;
      const index = group.indexOf(value);
      if (children.some((c) => c.indeterminate)) {
        indeterminate = true;
        if (index >= 0) {
          group.splice(index, 1);
          group = group;
        }
      } else if (childrenValues.every((c) => Array.isArray(childrenGroup) && childrenGroup.includes(c))) {
        indeterminate = false;
        if (index < 0) {
          group.push(value);
          group = group;
        }
      } else if (childrenValues.some((c) => Array.isArray(childrenGroup) && childrenGroup.includes(c))) {
        indeterminate = true;
        if (index >= 0) {
          group.splice(index, 1);
          group = group;
        }
      } else {
        indeterminate = false;
        if (index >= 0) {
          group.splice(index, 1);
          group = group;
        }
      }
    } else {
      if (group !== value && children.some((c) => c.checked)) {
        group = value;
      } else if (group === value && !children.some((c) => c.checked)) {
        group = "";
      }
    }
    dispatch("childChange");
  }
  function onParentChange() {
    if (!multiple || !children || children.length === 0) return;
    if (!Array.isArray(group)) return;
    const index = group.indexOf(value);
    const checkChild = (child) => {
      if (!child || !Array.isArray(child.group)) return;
      child.indeterminate = false;
      if (child.group.indexOf(child.value) < 0) {
        child.group.push(child.value);
        child.group = child.group;
      }
    };
    const uncheckChild = (child) => {
      if (!child || !Array.isArray(child.group)) return;
      child.indeterminate = false;
      const childIndex = child.group.indexOf(child.value);
      if (childIndex >= 0) {
        child.group.splice(childIndex, 1);
        child.group = child.group;
      }
    };
    children.forEach((child) => {
      if (!child) return;
      index >= 0 ? checkChild(child) : uncheckChild(child);
      child.onParentChange();
    });
  }
  const dispatch = createEventDispatcher();
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0) $$bindings.children(children);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.selection === void 0 && $$bindings.selection && selection !== void 0) $$bindings.selection(selection);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0) $$bindings.indeterminate(indeterminate);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.indent === void 0 && $$bindings.indent && indent !== void 0) $$bindings.indent(indent);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0) $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0) $$bindings.caretClosed(caretClosed);
  if ($$props.hyphenOpacity === void 0 && $$bindings.hyphenOpacity && hyphenOpacity !== void 0) $$bindings.hyphenOpacity(hyphenOpacity);
  if ($$props.regionSummary === void 0 && $$bindings.regionSummary && regionSummary !== void 0) $$bindings.regionSummary(regionSummary);
  if ($$props.regionSymbol === void 0 && $$bindings.regionSymbol && regionSymbol !== void 0) $$bindings.regionSymbol(regionSymbol);
  if ($$props.regionChildren === void 0 && $$bindings.regionChildren && regionChildren !== void 0) $$bindings.regionChildren(regionChildren);
  if ($$props.hideLead === void 0 && $$bindings.hideLead && hideLead !== void 0) $$bindings.hideLead(hideLead);
  if ($$props.hideChildren === void 0 && $$bindings.hideChildren && hideChildren !== void 0) $$bindings.hideChildren(hideChildren);
  if ($$props.onParentChange === void 0 && $$bindings.onParentChange && onParentChange !== void 0) $$bindings.onParentChange(onParentChange);
  {
    if (multiple) updateCheckbox(group, indeterminate);
  }
  {
    if (multiple) updateGroup(checked, indeterminate);
  }
  {
    if (!multiple) updateRadio(group);
  }
  {
    if (!multiple) updateRadioGroup(checked);
  }
  {
    if (!multiple && group !== void 0) {
      if (group !== value) {
        children.forEach((child) => {
          if (child) child.group = "";
        });
      }
    }
  }
  {
    dispatch("toggle", { open });
  }
  {
    children.forEach((child) => {
      if (child) child.$on("childChange", onChildValueChange);
    });
  }
  classesCaretState = open && $$slots.children && !hideChildren ? caretOpen : caretClosed;
  classesDisabled = disabled ? cDisabled : "";
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesSummary = `${cSummary} ${classesDisabled} ${spacing} ${rounded} ${padding} ${hover} ${regionSummary}`;
  classesCaret = `${classesCaretState}`;
  classesSymbol = `${cSymbol} ${classesCaret} ${regionSymbol}`;
  classesHyphen = `${hyphenOpacity}`;
  classesChildren = `${cChildren} ${indent} ${regionChildren}`;
  return `   <details class="${"tree-item " + escape(classesBase, true)}" data-testid="tree-item"${add_attribute("aria-disabled", disabled, 0)}${add_attribute("this", treeItem, 0)}${add_attribute("open", open, 1)}><summary class="${"tree-item-summary " + escape(classesSummary, true)}" role="treeitem"${add_attribute("aria-selected", selection ? checked : void 0, 0)}${add_attribute("aria-expanded", $$slots.children ? open : void 0, 0)}> <div class="${"tree-summary-symbol " + escape(classesSymbol, true)}">${$$slots.children && !hideChildren ? ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="${"w-3 " + escape(classesHyphen, true)}"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path></svg>`}</div>  ${selection && name && group !== void 0 ? `${multiple ? `<input class="checkbox tree-item-checkbox" type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}${add_attribute("checked", checked, 1)}${add_attribute("indeterminate", indeterminate, 0)}>` : `<input class="radio tree-item-radio" type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}` : ``}  ${$$slots.lead && !hideLead ? `<div class="tree-item-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="tree-item-content">${slots.default ? slots.default({}) : ``}</div></summary> <div class="${"tree-item-children " + escape(classesChildren, true)}" role="group"${add_attribute("this", childrenDiv, 0)}>${slots.children ? slots.children({}) : ``}</div></details>`;
});
const DocsCatalogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sourceBodySliced;
  const sourceHeaders = [
    "id_enf_cardiovascular",
    "nombre",
    "descripcion",
    "fecha_registro",
    "fecha_inicio",
    "estado",
    "fecha_actualizacion"
  ];
  const sourceBody = [
    [
      5,
      "Hipertensión arterial",
      "Cardiovasculares",
      "2024-07-02",
      "2019-12-01",
      true,
      "2024-07-02"
    ],
    [
      6,
      "Cardiopatía isquémica (infartos)",
      "Cardiovasculares",
      "2024-07-02",
      "2024-07-02",
      true,
      "2024-07-02"
    ],
    [
      7,
      "Hipertensión arterial",
      "Cardiovasculares",
      "2024-07-02",
      "2019-12-01",
      true,
      "2024-07-02"
    ],
    [
      8,
      "Cardiopatía isquémica (infartos)",
      "Cardiovasculares",
      "2024-07-02",
      "2024-07-02",
      true,
      "2024-07-02"
    ]
  ];
  let paginationSettings = {
    page: 0,
    limit: 3,
    size: sourceBody.length,
    amounts: [5, 10, sourceBody.length]
  };
  let files = ["Enfermedades", "...", "..."];
  let items = [
    "tc_enfermedad_cardiovascular",
    "tc_enfermedad_cronica",
    "tc_enfermedad_endocrino",
    "tc_enfermedad_infecciosa",
    "tc_enfermedad_neoplastico",
    "tc_enfermedad_neurologica"
  ];
  let state = { firstLast: false, previousNext: true };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    sourceBodySliced = sourceBody.slice(paginationSettings.page * paginationSettings.limit, paginationSettings.page * paginationSettings.limit + paginationSettings.limit);
    $$rendered = `<div class="flex "><div class="">${validate_component(TreeView, "TreeView").$$render($$result, {}, {}, {
      default: () => {
        return `<ul>${each(files, (file) => {
          return `${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
            children: () => {
              return `${each(items, (item) => {
                return `<li>${validate_component(TreeViewItem, "TreeViewItem").$$render($$result, {}, {}, {
                  lead: () => {
                    return `${validate_component(Icon, "Icon").$$render(
                      $$result,
                      {
                        icon: "carbon:data-view-alt",
                        class: "text-xl "
                      },
                      {},
                      {}
                    )}`;
                  },
                  default: () => {
                    return `${escape(item)} `;
                  }
                })} </li>`;
              })} `;
            },
            lead: () => {
              return `${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  icon: "fa6-solid:layer-group",
                  class: "text-xl "
                },
                {},
                {}
              )}`;
            },
            default: () => {
              return `${escape(file)} `;
            }
          })}`;
        })}</ul>`;
      }
    })}</div> <div class="w-full space-y-4 text-token">${validate_component(Table, "Table").$$render(
      $$result,
      {
        source: {
          head: sourceHeaders,
          body: sourceBodySliced
        }
      },
      {},
      {}
    )} ${validate_component(Paginator, "Paginator").$$render(
      $$result,
      {
        showFirstLastButtons: state.firstLast,
        showPreviousNextButtons: state.previousNext,
        settings: paginationSettings
      },
      {
        settings: ($$value) => {
          paginationSettings = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
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
  )}</a></li> <li class="crumb-separator" aria-hidden="true" data-svelte-h="svelte-i818qf">›</li> <li data-svelte-h="svelte-kdaui5">Catalogo-TSAAK</li></ol></div> ${validate_component(DocsCatalogs, "DocsCatalogs").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
