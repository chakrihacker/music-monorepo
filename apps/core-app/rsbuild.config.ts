import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "core_app",
			remotes: {
				music_library: "music_library@http://localhost:4000/mf-manifest.json",
				design_system: "design_system@http://localhost:2000/mf-manifest.json",
			},
			shared: {
				react: {
					singleton: true,
				},
				"react-dom": {
					singleton: true,
				},
				tailwindcss: {
					singleton: true,
				},
				"postcss-loader": {
					singleton: true,
				},
			},
		}),
	],
	module: {
		rules: {
			test: /\.css$/,
			use: ["postcss-loader"],
			type: "css",
		},
	},
});
