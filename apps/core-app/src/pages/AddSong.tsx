import { Suspense, lazy } from "react";
import { useSongs } from "../SongsProvider";

const AddSongComponent = lazy(() => import("music_library/add-song"));

export function AddSong() {
	const { addSong } = useSongs();
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<AddSongComponent onSubmit={addSong} />
		</Suspense>
	);
}
