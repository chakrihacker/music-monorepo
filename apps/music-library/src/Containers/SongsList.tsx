import { ErrorBoundary } from "react-error-boundary";
import { SongsListHead } from "../components/SongsListHead";
import { SongsBaseList } from "./SongsBaseList";

export const SongsList = () => {
	const logError = (error: Error, info: { componentStack: string }) => {
		console.error("Error", error);
		console.error("ComponentStack", info.componentStack);
	};

	return (
		<ErrorBoundary
			onError={logError}
			fallback={<div>Something went wrong</div>}
		>
			<SongsListHead />
			<SongsBaseList />
		</ErrorBoundary>
	);
};
