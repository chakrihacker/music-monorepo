import { songs as SONGS_LIST } from "music_library/seeds/songs";
import type { Song } from "music_library/song";
import { type ReactNode, createContext, useContext, useState } from "react";

interface SongsContextType {
	songs: Song[];
	addSong: (song: Omit<Song, "id">) => void;
	editSong: (id: string, updatedSong: Partial<Song>) => void;
	deleteSong: (id: string) => void;
}

const SongsContext = createContext<SongsContextType | undefined>(undefined);

export function useSongs() {
	const context = useContext(SongsContext);
	if (!context) {
		throw new Error("useSongs must be used within a SongsProvider");
	}
	return context;
}

interface SongsProviderProps {
	children: ReactNode;
}

export function SongsProvider({ children }: SongsProviderProps) {
	const [songs, setSongs] = useState<Song[]>([...SONGS_LIST]);

	const addSong = (song: Omit<Song, "id">) => {
		const newSong = {
			...song,
			id: crypto.randomUUID(),
		};
		setSongs((prevSongs) => [...prevSongs, newSong]);
	};

	const editSong = (id: string, updatedSong: Partial<Song>) => {
		setSongs((prevSongs) =>
			prevSongs.map((song) =>
				song.id === id ? { ...song, ...updatedSong } : song,
			),
		);
	};

	const deleteSong = (id: string) => {
		setSongs((prevSongs) => prevSongs.filter((song) => song.id !== id));
	};

	const value = {
		songs,
		addSong,
		editSong,
		deleteSong,
	};

	return (
		<SongsContext.Provider value={value}>{children}</SongsContext.Provider>
	);
}
