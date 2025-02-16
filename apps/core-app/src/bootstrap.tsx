import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App";

const onError = (error: Error, info: { componentStack: string }) => {
	console.error("Error", error);
	console.error("info", info);
};

const rootEl = document.getElementById("root");
if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<ErrorBoundary
				fallback={<div>Something went wrong</div>}
				onError={onError}
			>
				<App />
			</ErrorBoundary>
		</React.StrictMode>,
	);
}
