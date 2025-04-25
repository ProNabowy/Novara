"use client";

import Accordion from "@/ui/Accordion";
import Radio from "@/ui/Radio";
import RadioGroup from "@/ui/RadioGroup";
import { useState } from "react";

type SortOption = "default" | "ascending" | "descending";

export default function SortOptions() {
	const [selectedSort, setSelectedSort] = useState<SortOption>("default");

	const handleSortChange = (value: string) => {
		setSelectedSort(value as SortOption);
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
