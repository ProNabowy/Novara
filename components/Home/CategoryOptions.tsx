"use client";

import Accordion from "@/ui/Accordion";
import Radio from "@/ui/Radio";
import RadioGroup from "@/ui/RadioGroup";
import { useState } from "react";

type CategoryOption = "default" | "ascending" | "descending";

export default function CategoryOptions() {
	const [selectedCategory, setSelectedCategory] =
		useState<CategoryOption>("default");

	const handleCategoryChange = (value: string) => {
		setSelectedCategory(value as CategoryOption);
	};

	return (
		<Accordion title="Categories">
			<RadioGroup
				value={selectedCategory}
				onChange={handleCategoryChange}
				name="category-options"
			>
				<Radio
					value="default"
					label="Default"
					checked={selectedCategory === "default"}
				/>
				<Radio
					value="ascending"
					label="Ascending"
					checked={selectedCategory === "ascending"}
				/>
				<Radio
					value="descending"
					label="Descending"
					checked={selectedCategory === "descending"}
				/>
			</RadioGroup>
		</Accordion>
	);
}
