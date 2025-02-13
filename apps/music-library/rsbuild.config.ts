import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "music_library",
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
