export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "tsaak/_app",
	assets: new Set([".DS_Store","favicon-sat.ico","favicon.png","fonts/Montserrat-Italic-VariableFont_wght.ttf","fonts/Montserrat-VariableFont_wght.ttf","fonts/Patria_Family.ttf","fonts/Quicksand.ttf","fonts/Roboto/LICENSE.txt","fonts/Roboto/Roboto-Black.ttf","fonts/Roboto/Roboto-BlackItalic.ttf","fonts/Roboto/Roboto-Bold.ttf","fonts/Roboto/Roboto-BoldItalic.ttf","fonts/Roboto/Roboto-Italic.ttf","fonts/Roboto/Roboto-Light.ttf","fonts/Roboto/Roboto-LightItalic.ttf","fonts/Roboto/Roboto-Medium.ttf","fonts/Roboto/Roboto-MediumItalic.ttf","fonts/Roboto/Roboto-Regular.ttf","fonts/Roboto/Roboto-Thin.ttf","fonts/Roboto/Roboto-ThinItalic.ttf","fonts/SpaceGrotesk.ttf","fonts/icons.woff2"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.BvgQwRA_.js","app":"_app/immutable/entry/app.0SB8TJr0.js","imports":["_app/immutable/entry/start.BvgQwRA_.js","_app/immutable/chunks/entry.BmATd063.js","_app/immutable/chunks/scheduler.CO7uyCRE.js","_app/immutable/chunks/index.DTvGw5g2.js","_app/immutable/chunks/paths.CMBFK2sR.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.0SB8TJr0.js","_app/immutable/chunks/scheduler.CO7uyCRE.js","_app/immutable/chunks/index.Bw_8TCQm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/app/calendario/[slug]",
				pattern: /^\/app\/calendario\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/app/(inner)/catalogo-tsaak",
				pattern: /^\/app\/catalogo-tsaak\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/app/(inner)/consulta",
				pattern: /^\/app\/consulta\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/app/(inner)/datos-alergias",
				pattern: /^\/app\/datos-alergias\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/app/(inner)/datos-direccion",
				pattern: /^\/app\/datos-direccion\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/app/(inner)/datos-generales",
				pattern: /^\/app\/datos-generales\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/app/(inner)/datos-padecimientos",
				pattern: /^\/app\/datos-padecimientos\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/app/(inner)/docs-calendario",
				pattern: /^\/app\/docs-calendario\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/app/(inner)/docs-perfil",
				pattern: /^\/app\/docs-perfil\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/app/(inner)/docs-secciones",
				pattern: /^\/app\/docs-secciones\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/app/(inner)/expedientes",
				pattern: /^\/app\/expedientes\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/app/(inner)/get-started",
				pattern: /^\/app\/get-started\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/app/(inner)/introduccion",
				pattern: /^\/app\/introduccion\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/app/(inner)/registros",
				pattern: /^\/app\/registros\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/app/(inner)/test",
				pattern: /^\/app\/test\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/health",
				pattern: /^\/health\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/health/test/get",
				pattern: /^\/health\/test\/get\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
