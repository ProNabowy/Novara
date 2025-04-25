import { Cart, Logo } from "@/icons";
import Link from "next/link";
import ResponsiveHeader from "./ResponsiveHeader";

const routes = [
	{ name: "Products", href: "/products" },
	{ name: "Sells", href: "/products" },
	{ name: "Buy", href: "/products" },
	{ name: "Contact", href: "/products" },
];

export default function Header() {
	return (
		<header className="bg-primary-base h-[90px] py-6">
			<div className="container flex items-center justify-between gap-16">
				<Link href={"/"} className="flex items-center gap-1">
					<Logo />

					<p className="font-[Philosopher] text-[28px] font-normal text-white">
						Novara
					</p>
				</Link>

				<div className="hidden flex-1 items-center justify-between md:flex">
					<ul className="flex items-center gap-10 [&>li]:font-normal [&>li]:text-white">
						{routes.map((route) => (
							<li key={route.name}>
								<Link href={route.href}>{route.name}</Link>
							</li>
						))}
					</ul>

					<div className="flex items-center gap-6">
						<Cart className="h-7 w-7 fill-white" />

						<Link href={"/products"}>
							<button className="text-dark-base rounded-full bg-white px-6 py-2.5 font-normal">
								Login
							</button>
						</Link>
					</div>
				</div>

				<ResponsiveHeader routes={routes} />
			</div>
		</header>
	);
}
