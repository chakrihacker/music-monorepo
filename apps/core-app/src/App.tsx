"use client";
import "./App.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { SongsProvider } from "./SongsProvider";
import { AuthProvider, useAuth } from "./auth";
import { routeTree } from "./routes";

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true,
	context: {
		auth: undefined,
	},
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function InnerApp() {
	const auth = useAuth();
	return <RouterProvider router={router} context={{ ...auth }} />;
}

const App = () => {
	return (
		<AuthProvider>
			<SongsProvider>
				<InnerApp />
			</SongsProvider>
		</AuthProvider>
	);
};

export default App;
