// import "./App.css";
import { Button } from "design_system/button";
import { SongsList } from "./Containers/SongsList";
import "design_system/styles/core.css";

const App = () => {
	return (
		<div className="content">
			<h1>Music Library</h1>
			<p>Start building amazing things with Rsbuild.</p>
			<Button>Click me</Button>
			<SongsList />
		</div>
	);
};

export default App;
