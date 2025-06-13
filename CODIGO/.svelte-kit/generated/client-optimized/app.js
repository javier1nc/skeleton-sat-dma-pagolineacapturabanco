export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23')
];

export const server_loads = [0];

export const dictionary = {
		"/": [~5],
		"/app": [6,[2]],
		"/app/calendario/[slug]": [21,[2]],
		"/app/(inner)/catalogo-tsaak": [7,[2,3]],
		"/app/(inner)/consulta": [8,[2,3]],
		"/app/(inner)/datos-alergias": [9,[2,3]],
		"/app/(inner)/datos-direccion": [10,[2,3]],
		"/app/(inner)/datos-generales": [11,[2,3]],
		"/app/(inner)/datos-padecimientos": [12,[2,3]],
		"/app/(inner)/docs-calendario": [13,[2,3]],
		"/app/(inner)/docs-perfil": [14,[2,3]],
		"/app/(inner)/docs-secciones": [15,[2,3]],
		"/app/(inner)/expedientes": [16,[2,3]],
		"/app/(inner)/get-started": [17,[2,3]],
		"/app/(inner)/introduccion": [18,[2,3]],
		"/app/(inner)/registros": [19,[2,3]],
		"/app/(inner)/test": [20,[2,3]],
		"/health": [22,[4]],
		"/health/test/get": [23,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.svelte';