import ProductsContainer from "@/components/Products/ProductsContainer";
import Sidebar from "@/components/Products/Sidebar";
import { fetchCategories } from "@/network/apis/categories/categories";
export default async function Home() {
	const categories = await fetchCategories();

	return (
		<section className="flex flex-col gap-10 py-10">
			<h2 className="text-center text-4xl font-bold">All Products</h2>
			<div className="container grid h-full grid-cols-[25%_1fr] gap-10 items-start">
				<Sidebar categories={categories.data} />
				<ProductsContainer />
			</div>
		</section>
	);
}
