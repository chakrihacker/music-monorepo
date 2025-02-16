import { createRootRoute, createRoute, redirect } from "@tanstack/react-router";
import { Layout } from "./layout";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { Songs } from "./pages/SongsList";

const rootRoute = createRootRoute({
	component: Layout,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Home,
});

const songsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/songs",
	component: Songs,
	beforeLoad: ({ context }) => {
		console.log({ context: context.isAuthenticated });
		if (!context.isAuthenticated) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.href,
				},
			});
		}
	},
});

const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/login",
	component: Auth,
	// beforeLoad: ({ context }) => {
	// 	if (context.isAuthenticated) {
	// 		throw redirect({
	// 			to: "/",
	// 			search: {
	// 				redirect: location.href,
	// 			},
	// 		});
	// 	}
	// },
});

const pageNotFoundRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "*",
	component: () => <div>404 - Page Not Found</div>,
});

export const routeTree = rootRoute.addChildren([
	indexRoute,
	songsRoute,
	loginRoute,
	pageNotFoundRoute,
]);
