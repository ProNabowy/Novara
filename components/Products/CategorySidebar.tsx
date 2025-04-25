"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface Category {
	id: string;
	name: string;
}

const categories: Category[] = [
	{ id: "all", name: "All Products" },
	{ id: "beauty", name: "Beauty" },
	{ id: "fragrances", name: "Fragrances" },
	{ id: "furniture", name: "Furniture" },
	{ id: "groceries", name: "Groceries" },
];

interface CategorySidebarProps {
	selectedCategory?: string;
}

export default function CategorySidebar({
	selectedCategory = "all",
}: CategorySidebarProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleCategoryChange = (categoryId: string) => {
		const params = new URLSearchParams(searchParams.toString());
		if (categoryId === "all") {
			params.delete("category");
		} else {
			params.set("category", categoryId);
		}
		params.set("page", "1"); // Reset to first page when changing category
		router.push(`?${params.toString()}`);
	};

	return (
		<div className="w-64 space-y-4">
			<h2 className="text-xl font-semibold">Categories</h2>
			<div className="space-y-2">
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => handleCategoryChange(category.id)}
						className={`w-full rounded-lg px-4 py-2 text-left transition-colors ${
							(selectedCategory === "all" &&
								category.id === "all") ||
							selectedCategory === category.id
								? "bg-blue-500 text-white"
								: "hover:bg-gray-100"
						}`}
					>
						{category.name}
					</button>
				))}
			</div>
		</div>
	);
}
