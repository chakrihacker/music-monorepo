import { Button } from "design_system/button";
import { useState } from "react";
import { useAuth } from "../auth";

export function Auth() {
	const { login } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form
			onSubmit={async (event) => {
				event.preventDefault();
				await login({
					user: email,
					password: password,
					role: Math.random() > 0.5 ? "admin" : "user",
				});
				window.location.href = "/";
			}}
		>
			<div className="flex flex-col items-center justify-center min-h-screen p-4">
				<h1 className="mb-4 text-2xl font-bold">Login</h1>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="mb-2 w-64 p-2 rounded border border-gray-300"
					placeholder="Email"
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="mb-4 w-64 p-2 rounded border border-gray-300"
					placeholder="Password"
				/>
				<Button variant="default" type="submit">
					Log in
				</Button>
			</div>
		</form>
	);
}
