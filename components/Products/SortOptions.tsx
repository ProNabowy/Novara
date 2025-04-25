"use client";

import Accordion from "@/ui/Accordion";
import Radio from "@/ui/Radio";
import RadioGroup from "@/ui/RadioGroup";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type SortOption = "default" | "ascending" | "descending";

const sortQuery = {
	ascending: "asc",
	descending: "desc",
};

const defaultSort = (sortBy: string): SortOption => {
	switch (sortBy) {
		case "asc":
			return "ascending";
		case "desc":
			return "descending";
		default:
			return "default";
	}
};

export default function SortOptions({ sortBy }: { sortBy: string }) {
	const [selectedSort, setSelectedSort] = useState<SortOption>(
		defaultSort(sortBy) as SortOption
	);

	const router = useRouter();

	const searchParams = useSearchParams();

	const handleSortChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());

		setSelectedSort(value as SortOption);

		if (value === "default") {
			params.delete("sortBy");
		} else {
			params.set("sortBy", sortQuery[value as keyof typeof sortQuery]);
		}

		params.set("page", "1");

		params.set("skip", "0");

		router.push(`?${params.toString()}`);
	};

	return (
		<Accordion title="Sort">
			<RadioGroup
				value={selectedSort}
				onChange={handleSortChange}
				name="sort-options"
			>
				<Radio
					value="default"
					label="Default"
					checked={selectedSort === "default"}
				/>
				<Radio
					value="ascending"
					label="Ascending"
					checked={selectedSort === "ascending"}
				/>
				<Radio
					value="descending"
					label="Descending"
					checked={selectedSort === "descending"}
				/>
			</RadioGroup>
		</Accordion>
	);
}
