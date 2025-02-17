import { ErrorBoundary } from "react-error-boundary";
import { SongsListHead } from "../components/SongsListHead";
import type { Song } from "../types/Song";
import { SongsBaseList } from "./SongsBaseList";

export const SongsList = ({
	songs = [],
	isAdmin = false,
	deleteSong,
	editSong,
}: {
	songs: Song[];
	isAdmin: boolean;
	deleteSong: (id: string) => void;
	editSong: (id: string, updatedSong: Partial<Song>) => void;
}) => {
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
			<SongsBaseList
				songs={songs}
				editSong={editSong}
				deleteSong={deleteSong}
				isAdmin={isAdmin}
			/>
		</ErrorBoundary>
	);
};
