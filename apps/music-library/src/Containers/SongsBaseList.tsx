import { Button } from "design_system/button";
import {
	Table,
	type TableColumnsType,
	type TableProps,
} from "design_system/table";
import { useState } from "react";
import type { Song } from "../types/Song";

type OnChange = NonNullable<TableProps<Song>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export const SongsBaseList = ({
	songs,
	isAdmin,
	deleteSong,
	editSong,
}: {
	songs: Song[];
	isAdmin: boolean;

	deleteSong: (id: string) => void;
	editSong: (id: string, updatedSong: Partial<Song>) => void;
}) => {
	const [filteredInfo, setFilteredInfo] = useState<Filters>({});
	const [sortedInfo, setSortedInfo] = useState<Sorts>({});

	const columns: TableColumnsType<Song> = [
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
			sorter: (a, b) => a.title.localeCompare(b.title),
			sortOrder: sortedInfo.columnKey === "title" && sortedInfo.order,
			filters: songs.map((song) => ({
				text: song.title,
				value: song.title,
			})),
			onFilter: (value, record) => record.title.indexOf(value as string) === 0,
		},
		{
			title: "Artist",
			dataIndex: "artist",
			key: "artist",
			sorter: (a, b) => a.title.localeCompare(b.title),
			sortOrder: sortedInfo.columnKey === "title" && sortedInfo.order,
			filters: songs.map((song) => ({
				text: song.artist,
				value: song.artist,
			})),
			onFilter: (value, record) => record.artist.indexOf(value as string) === 0,
		},
		{
			title: "Album",
			dataIndex: "album",
			key: "album",
			sorter: (a, b) => a.title.localeCompare(b.title),
			sortOrder: sortedInfo.columnKey === "title" && sortedInfo.order,
			filters: songs.map((song) => ({
				text: song.album,
				value: song.album,
			})),
			onFilter: (value, record) => record.album.indexOf(value as string) === 0,
		},
		{
			title: "Year",
			dataIndex: "year",
			key: "year",
			sorter: (a, b) => a.year - b.year,
			sortOrder: sortedInfo.columnKey === "year" && sortedInfo.order,
		},
	];

	if (isAdmin) {
		// columns.push({
		// 	title: "Edit",
		// 	dataIndex: "",
		// 	key: "edit",
		// 	render: (_, record) => <Button>Edit</Button>,
		// });
		columns.push({
			title: "Delete",
			dataIndex: "",
			key: "delete",
			render: (_, record) => (
				<Button onClick={() => deleteSong(record.id)}>Delete</Button>
			),
		});
	}

	const onChange: TableProps<Song>["onChange"] = (
		pagination,
		filters,
		sorter,
		extra,
	) => {
		console.log("params", pagination, filters, sorter, extra);
		setFilteredInfo(filters);
		setSortedInfo(sorter as Sorts);
	};

	return (
		<Table
			columns={columns}
			dataSource={songs}
			onChange={onChange}
			showSorterTooltip={{ target: "sorter-icon" }}
		/>
	);
};
