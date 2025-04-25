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
		<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
			<div className="col-span-3 flex items-center justify-center">
				<Pagination
					currentPage={currentPage || 1}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
		</div>
	);
}
