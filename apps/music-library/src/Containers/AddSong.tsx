import { Button } from "design_system/button";
import { Input } from "design_system/input";
import type React from "react";
import { useState } from "react";
import "../App.css";
import { useNavigate } from "@tanstack/react-router";
import type { Song } from "../types/Song";

interface AddSongProps {
	onSubmit: (song: Omit<Song, "id">) => void;
}

const AddSong: React.FC<AddSongProps> = ({ onSubmit }) => {
	const [title, setTitle] = useState("");
	const [artist, setArtist] = useState("");
	const [album, setAlbum] = useState("");
	const [year, setYear] = useState("");

	const navigate = useNavigate({ from: "songs/add" });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ title, artist, album, year: Number.parseInt(year) });
		setTitle("");
		setArtist("");
		setAlbum("");
		setYear("");

		navigate({ to: "/songs" });

		console.log({ title, artist, album, year });
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Add a New Song</h2>
			<form onSubmit={handleSubmit}>
				<Input
					label="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Enter the song title"
					className="mb-4"
				/>
				<Input
					label="Artist"
					value={artist}
					onChange={(e) => setArtist(e.target.value)}
					placeholder="Enter the artist name"
					className="mb-4"
				/>
				<Input
					label="Album"
					value={album}
					onChange={(e) => setAlbum(e.target.value)}
					placeholder="Enter the album name"
					className="mb-4"
				/>
				<Input
					label="Year"
					value={year}
					onChange={(e) => setYear(e.target.value)}
					placeholder="Enter the year of release"
					className="mb-4"
				/>
				<Button
					type="submit"
					variant="primary"
					className="mt-4 bg-blue-500 text-white"
				>
					Add Song
				</Button>
			</form>
		</div>
	);
};

export default AddSong;
