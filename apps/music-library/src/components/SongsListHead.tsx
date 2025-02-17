import { Button } from "design_system/button";
import { ErrorBoundary } from "react-error-boundary";

export const SongsListHead = () => {
	const logError = (error: Error, info: { componentStack: string }) => {
		console.error("Error", error);
		console.error("ComponentStack", info.componentStack);
	};

	return (
		<ErrorBoundary
			fallback={<div>Something went wrong</div>}
			onError={logError}
		>
			<div className="flex flex-row space-x-2 space-y-2">
				<a href="/songs/add">
					<Button variant="default">Add song</Button>
				</a>
			</div>
		</ErrorBoundary>
	);
};
