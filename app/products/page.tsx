"use client";
import CategorySidebar from "@/components/Products/CategorySidebar";
import ProductsContainer from "@/components/Products/ProductsContainer";
import SortOptions from "@/components/Products/SortOptions";
import { fetchProducts } from "@/network/apis/products/products.apis";
import { Product } from "@/network/models/Product";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsPage() {
	const searchParams = useSearchParams();
	const page = Number(searchParams.get("page")) || 1;
	const category = searchParams.get("category") || "all";
	const sortBy = searchParams.get("sortBy") || "title";
	const sortOrder = (searchParams.get("sortOrder") || "asc") as
		| "asc"
		| "desc";
	const limit = 9;

	const [products, setProducts] = useState<Product[]>([]);
	const [total, setTotal] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const loadProducts = async () => {
			setIsLoading(true);
			try {
				const response = await fetchProducts({
					page,
					limit,
					...(category !== "all" && { category }),
					sortBy,
					sortOrder,
				});
				setProducts(response.data.data.products);
				setTotal(response.data.data.total);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setIsLoading(false);
			}
		};

		loadProducts();
	}, [page, category, sortBy, sortOrder, limit]);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="mb-8 text-3xl font-bold">Products</h1>
			<div className="flex gap-8">
				<CategorySidebar selectedCategory={category} />
				<div className="flex-1">
					<div className="mb-6 flex justify-end">
						<SortOptions currentSort={`${sortBy}-${sortOrder}`} />
					</div>
					{isLoading ? (
						<div className="flex items-center justify-center">
							<div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
						</div>
					) : (
						<ProductsContainer
							products={products}
							total={total}
							limit={limit}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
