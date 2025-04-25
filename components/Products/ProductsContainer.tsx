"use client";
import { Product } from "@/network/models/Product";
import Pagination from "@/ui/Pagination";
import ProductCard from "@/ui/ProductCard";

export default function ProductsContainer({
	products,
	total,
	skip,
	limit,
}: {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}) {
	return (
		<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
			<div className="col-span-3 flex items-center justify-center">
				<Pagination
					currentPage={skip}
					totalPages={total}
					onPageChange={() => {}}
				/>
			</div>
		</div>
	);
}
