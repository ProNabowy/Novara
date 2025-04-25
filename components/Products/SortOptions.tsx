"use client";

import Accordion from "@/ui/Accordion";
import Radio from "@/ui/Radio";
import RadioGroup from "@/ui/RadioGroup";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SortOption = "default" | "ascending" | "descending";

export default function SortOptions() {
	const [selectedSort, setSelectedSort] = useState<SortOption>("default");

	const router = useRouter();

	const handleSortChange = (value: string) => {
		const sortQuery = {
			ascending: "asc",
			descending: "desc",
		};

		setSelectedSort(value as SortOption);

		if (value === "default") {
			return router.push("/");
		}

		router.push(`?sort=${sortQuery[value as keyof typeof sortQuery]}`);
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
