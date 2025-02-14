import "./App.css";
import { SongsList } from "music_library/songs-list";

const App = () => {
	return (
		<div className="flex flex-col h-dvh justify-center items-center">
			<SongsList />
		</div>
	);
};

export default App;
