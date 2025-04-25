"use client";

import Accordion from "@/ui/Accordion";
import Radio from "@/ui/Radio";
import RadioGroup from "@/ui/RadioGroup";
import { useState } from "react";

type CategoryOption = "default" | "ascending" | "descending";

export default function CategoryOptions({
	categories,
}: {
	categories: string[];
}) {
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
				{categories.map((category) => (
					<Radio
						key={category}
						value={category}
						label={category}
						checked={selectedCategory === category}
					/>
				))}
			</RadioGroup>
		</Accordion>
	);
}
