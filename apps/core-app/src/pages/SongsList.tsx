import { Suspense, lazy } from "react";
import { useSongs } from "../SongsProvider";
import { useAuth } from "../auth";

const SongsList = lazy(() =>
	import("music_library/songs-list").then((module) => ({
		default: module.SongsList,
	})),
);

export function Songs() {
	const { songs, addSong, deleteSong, editSong } = useSongs();
	const { user } = useAuth();
	const isAdmin = user?.role === "admin";

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SongsList
				songs={songs}
				isAdmin={isAdmin}
				deleteSong={deleteSong}
				editSong={editSong}
			/>
		</Suspense>
	);
}
