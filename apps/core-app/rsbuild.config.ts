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
			},
			shared: ["react", "react-dom"],
		}),
	],
});
