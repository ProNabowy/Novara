import ProductsContainer from "@/components/Products/ProductsContainer";
import Sidebar from "@/components/Products/Sidebar";
import { fetchCategories } from "@/network/apis/categories/categories";
import { fetchProducts } from "@/network/apis/products/products.apis";
export default async function Home() {
	const categories = await fetchCategories();
	const products = await fetchProducts();
	console.log(products.data);
	return (
		<section className="flex flex-col gap-10 py-10">
			<h2 className="text-center text-4xl font-bold">All Products</h2>
			<div className="container grid h-full grid-cols-[25%_1fr] items-start gap-10">
				<Sidebar categories={categories.data} />
				<ProductsContainer
					products={products.data.products}
					total={products.data.total}
					skip={products.data.skip}
					limit={products.data.limit}
				/>
			</div>
		</section>
	);
}
