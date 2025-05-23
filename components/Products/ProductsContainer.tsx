"use client";
import { Product } from "@/network/models/Product";
import Pagination from "@/ui/Pagination";
import ProductCard from "@/ui/ProductCard";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsContainer({
	products,
	total,
	limit,
}: {
	products: Product[];
	total: number;
	limit: number;
}) {
	const router = useRouter();

	const searchParams = useSearchParams();

	const currentPage = Number(searchParams.get("page")) || 1;

	const totalPages =
		Math.ceil(total / 9) * 9 > total
			? Math.ceil(total / 9)
			: Math.ceil(total / 9);

	const handlePageChange = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("page", page.toString() || "1");

		params.set("skip", ((page - 1) * limit).toString());

		router.push(`?${params.toString()}`);
	};

	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
			<div className="flex grid-cols-1 items-center justify-center sm:col-span-2 2xl:col-span-3">
				{totalPages ? (
					<Pagination
						currentPage={currentPage || 1}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				) : null}
			</div>
		</div>
	);
}
