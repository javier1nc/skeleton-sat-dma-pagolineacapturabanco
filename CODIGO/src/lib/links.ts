// Navigation Sitemap

import { base } from "$app/paths";

import { PUBLIC_PATH_APP } from "$env/static/public";

// Stores
import { preferences } from "$lib/stores/stores";
import { secureStore } from "$lib/stores/stores";

let securedata = secureStore;

console.log("::securedata::", securedata);

export type List = Array<{
  href: string;
  label: string;
  keywords: string;
  badge?: string;
}>;
export const menuNavLinks: Record<
  string,
  Array<{ title: string; list: List }>
> = {
  "/documentacion": [
    {
      title: "Usuario",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "introduccion",
          label: "Introducción",
          keywords: "introduccion,svelte, sirens, license, release",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "docs-perfil",
          label: "Perfil",
          keywords: "start, install, cli, tailwind, themes, stylesheets",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "docs-calendario",
          label: "Calendario",
          keywords: "start, setup, tutorial, guide",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "docs-secciones",
          label: "Mis Secciones",
          keywords: "start, install, cli, tailwind, themes, stylesheets",
        },
      ],
    },
  ],
  "/perfil": [
    {
      title: "Paciente",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "datos-generales",
          label: "Datos Generales",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "datos-direccion",
          label: "Direccion",
          keywords:
            "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "datos-alergias",
          label: "Alergias",
          keywords:
            "plugin, label, input, select, checkbox, radio, date, color, picker, slider, range, file",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "datos-padecimientos",
          label: "Padecimientos",
          keywords:
            "plugin, label, input, select, checkbox, radio, date, color, picker, slider, range, file",
        },
      ],
    },
  ],
  "/calendario": [
    {
      title: "Vista",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "calendario" + "/" + "mes",
          label: "Mes",
          keywords:
            "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del",
        },
        {
          href:
            base + "/" + PUBLIC_PATH_APP + "/" + "calendario" + "/" + "semana",
          label: "Semana",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider",
        },
      ],
    },
  ],
  "/consulta": [
    {
      title: "Medico",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "consulta",
          label: "Consulta",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Numero de Empleado",
          keywords:
            "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Nombre Completo",
          keywords:
            "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file",
        },
      ],
    },
    {
      title: "Psicologo",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "consulta",
          label: "Consulta",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Numero de Empleado",
          keywords:
            "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Nombre Completo",
          keywords:
            "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file",
        },
      ],
    },
    {
      title: "Dentista",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "consulta",
          label: "Consulta",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Numero de Empleado",
          keywords:
            "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Nombre Completo",
          keywords:
            "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file",
        },
      ],
    },
  ],
  "/expedientes": [
    {
      title: "Busqueda",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "RFC",
          keywords: "body, scroll, scrollbar, hr, horizontal, rule, divider",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Numero de Empleado",
          keywords:
            "headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Nombre Completo",
          keywords:
            "pluginlabel, input, select, checkbox, radio, date, color, picker, slider, range, file",
        },
      ],
    },
    {
      title: "Recientes",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Hoy",
          keywords: "message, notification",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Ayer",
          keywords: "sup, sub, overlay, favorite, icon",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Ultima Semana",
          keywords: "nav, navigation, separator, hierarchy",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Ultimos 30 dias",
          keywords: "click, anchor, icon, preload",
        },
      ],
    },
    {
      title: "Fecha",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Dia",
          keywords: "message, conversation, prompt, ai",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Rango",
          keywords: "header, h1, h2, h3",
        },
      ],
    },
  ],
  "/catalogo-plcb": [
    {
      title: "Sistema",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "catalogo-plcb",
          label: "plcb",
          keywords: "catalogo, sistema, plcb",
        },
      ],
    },
  ],
  "/registros": [
    {
      title: "Busqueda",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Opcion N",
          keywords: "copy, contenteditable, html, input",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Opcion N",
          keywords: "svg, filtering, image, images, effect",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Opcion N",
          keywords: "form, modal, a11y, accessibility, keyboard, interaction",
        },
      ],
    },
    {
      title: "Reciente",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Hoy",
          keywords: "collapse",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Ayer",
          keywords: "header, top, bar, title",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Ultima semana",
          keywords: "nav, navigation, tile, sidebar",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Ulitmos 30 Dias",
          keywords: "input, filter, fuzzy, auto, complete, suggest",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Ultimo año",
          keywords: "image, initial, filter",
        },
      ],
    },
    // Deprecated
    {
      title: "",
      list: [
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Dia",
          keywords: "layout, header, footer, sidebar, page, content",
          badge: "Nuevo",
        },
        {
          href: base + "/" + PUBLIC_PATH_APP + "/" + "test",
          label: "Rango",
          keywords: "data, entry",
          badge: "Nuevo",
        },
      ],
    },
  ],
};
