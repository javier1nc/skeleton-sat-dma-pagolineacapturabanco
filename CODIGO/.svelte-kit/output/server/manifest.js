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
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
