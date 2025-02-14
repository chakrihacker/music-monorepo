import "./App.css";
import { SongsList } from "music_library/songs-list";

const App = () => {
	return (
		<div className="content">
			<h1>Rsbuild with React</h1>
			<p>Start building amazing things with Rsbuild.</p>
			<SongsList />
		</div>
	);
};

export default App;
