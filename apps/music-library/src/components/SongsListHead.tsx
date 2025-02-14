import SearchBar from "design_system/searchbar";
import { Select } from "design_system/select";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

type SortKey = "title" | "artist" | "album";
type GroupKey = "artist" | "album" | null;

export const SongsListHead = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortKey, setSortKey] = useState<SortKey>("title");
	const [groupBy, setGroupBy] = useState<GroupKey>(null);

	const handleSearch = () => {};

	const logError = (error: Error, info: { componentStack: string }) => {
		console.error("Error", error);
		console.error("ComponentStack", info.componentStack);
	};

	return (
		<ErrorBoundary
			fallback={<div>Something went wrong</div>}
			onError={logError}
		>
			<div className="flex flex-row space-x-2">
				<SearchBar onChangeText={setSearchTerm} onSearch={handleSearch} />
				<div className="p-2">
					<Select
						options={[
							{ value: "Title" },
							{ value: "Artist" },
							{ value: "Album" },
						]}
						value={sortKey}
						onChange={(value) => setSortKey(value as SortKey)}
					/>
				</div>
				<div className="p-2">
					<Select
						className="p-2"
						options={[
							{ value: "None" },
							{ value: "Artist" },
							{ value: "Album" },
						]}
						value={groupBy || "None"}
						onChange={(value) => setGroupBy(value as GroupKey)}
					/>
				</div>
			</div>
		</ErrorBoundary>
	);
};
