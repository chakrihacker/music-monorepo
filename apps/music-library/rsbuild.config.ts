import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "music_library",
			remotes: {
				design_system: "design_system@http://localhost:2000/mf-manifest.json",
			},
			exposes: {
				"./button": "./src/components/Button",
			},
			shared: ["react", "react-dom"],
		}),
	],
	server: {
		port: 4000,
	},
});
