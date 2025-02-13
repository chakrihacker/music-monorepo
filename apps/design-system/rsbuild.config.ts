import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "design_system",
			exposes: {
				"./button": "./src/components/ui/button.tsx",
			},
			shared: ["react", "react-dom"],
		}),
	],
	module: {
		rules: {
			test: /\.css$/,
			use: ["postcss-loader"],
			type: "css",
		},
	},
	server: {
		port: 2000,
	},
});
