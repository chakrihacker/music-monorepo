import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../../App.css";

export default function SearchBar({
	onSearch,
	onChangeText,
}: { onSearch?: () => void; onChangeText?: (text: string) => void }) {
	const handleSearch = () => {
		if (onSearch) {
			onSearch();
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChangeText) {
			onChangeText(e.target.value);
		}
	};

	return (
		<div className="flex items-center">
			<Input
				type="text"
				className="px-3 py-2 w-80"
				placeholder="Search..."
				onChange={handleChange}
			/>
			<Button className="px-3 py-2" onClick={handleSearch}>
				Search
			</Button>
		</div>
	);
}
