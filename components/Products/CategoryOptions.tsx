"use client";

import Accordion from "@/ui/Accordion";
import Radio from "@/ui/Radio";
import RadioGroup from "@/ui/RadioGroup";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function CategoryOptions({
	categories,
	category,
}: {
	categories: string[];
	category: string;
}) {
	const router = useRouter();

	const params = new URLSearchParams();

	const [selectedCategory, setSelectedCategory] = useState<string>(category);

	const handleCategoryChange = (value: string) => {
		params.set("category", value);

		router.push(`?${params.toString()}&page=1&skip=0`);
		setSelectedCategory(value as string);
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
