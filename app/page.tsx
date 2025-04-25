import Sidebar from "@/components/Home/Sidebar";

export default function Home() {
	return (
		<section className="flex flex-col gap-10 py-10">
			<h2 className="text-center text-4xl font-bold">All Products</h2>
			<div className="container grid h-full grid-cols-[25%_1fr]">
				<Sidebar />
			</div>
		</section>
	);
}
