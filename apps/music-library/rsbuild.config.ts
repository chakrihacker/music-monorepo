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
				"./songs-list": "./src/Containers/SongsList",
				"./add-song": "./src/Containers/AddSong",
				"./song": "./src/types/Song",
				"./seeds/songs": "./src/seeds/songs",
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
	server: {
		port: 4000,
	},
});
