import { Link, Outlet } from "@tanstack/react-router";

export const Layout = () => {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			<nav className="bg-white shadow-sm">
				<div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
					<ul className="flex space-x-6">
						<li>
							<Link
								to="/"
								className="transition-colors hover:text-blue-600 font-semibold"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/songs"
								className="transition-colors hover:text-blue-600 font-semibold"
							>
								Songs
							</Link>
						</li>
					</ul>
					<ul className="flex space-x-6">
						<li>
							<Link
								to="/login"
								className="transition-colors hover:text-blue-600 font-semibold"
							>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<main className="mx-auto mt-6 max-w-screen-xl px-4">
				<Outlet />
			</main>
		</div>
	);
};
