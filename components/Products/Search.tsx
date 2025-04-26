"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { Magnifying } from "@/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search({ searchTerm }: { searchTerm: string }) {
	const [search, setSearch] = useState(searchTerm);

	const debouncedSearch = useDebounce(search, 500);

	const searchParams = useSearchParams();

	const router = useRouter();

	const handleSearchQuery = () => {
		if (debouncedSearch) {
			router.push(`?search=${debouncedSearch}&page=1&skip=0`);
		} else {
			if (searchParams.get("search")) {
				const params = new URLSearchParams(searchParams.toString());
				params.delete("search");
				router.push(`?${params.toString()}`);
			}
		}
	};

	useEffect(() => {
		handleSearchQuery();
		return () => {};
	}, [debouncedSearch]);

	return (
		<div
			role="search"
			aria-label="Product search"
			className="border-primary-light flex items-center gap-2 rounded-full border bg-white px-4 py-2"
		>
			<label htmlFor="search" className="sr-only">
				Search products
			</label>
			<input
				type="search"
				name="search"
				id="search"
				className="w-px flex-1"
				placeholder="What are you looking for?"
				value={search}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(event.target.value)
				}
				aria-label="Search products"
				aria-describedby="searchDescription"
			/>
			<span id="searchDescription" className="sr-only">
				Type to search for products. Results will update as you type.
			</span>
			<Magnifying className="size-4 fill-gray-600" aria-hidden="true" />
		</div>
	);
}
