import "./App.css";
import { SongsList } from "music_library/songs-list";

const App = () => {
	return (
		<div className="flex flex-col h-dvh">
			<div className="flex-1 flex-col justify-center items-center">
				<SongsList />
			</div>
		</div>
	);
};

export default App;
