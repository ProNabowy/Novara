import ProductsContainer from "@/components/Products/ProductsContainer";
import Sidebar from "@/components/Products/Sidebar";
import { fetchCategories } from "@/network/apis/categories/categories";
import {
	fetchProducts,
	fetchProductsBySearch,
} from "@/network/apis/products/products.apis";
export default async function Home({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const categories = await fetchCategories();

	const skip = Number(searchParams.skip) || 0;

	const category = searchParams.category as string;

	const sortBy = searchParams.sortBy as string;

	const searchTerm = searchParams.search as string;

	let products;

	switch (true) {
		case Boolean(searchTerm):
			products = await fetchProductsBySearch(searchTerm, skip);
			break;
		default:
			products = await fetchProducts(skip, category, sortBy);
	}

	return (
		<section className="flex flex-col gap-10 py-10">
			<h2 className="text-center text-4xl font-bold">All Products</h2>
			<div className="container grid h-full grid-cols-[25%_1fr] items-start gap-10">
				<Sidebar
					categories={categories.data}
					category={category}
					sortBy={sortBy}
				/>
				<ProductsContainer
					products={products.data.products}
					total={products.data.total}
					limit={products.data.limit}
				/>
			</div>
		</section>
	);
}
