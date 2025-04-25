"use client";

import { Bars, Logo } from "@/icons";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useState } from "react";
import { Route } from "./types";

export default function ResponsiveHeader({ routes }: { routes: Route[] }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button onClick={() => setOpen((perv) => !perv)}>
				<Bars className="size-8 fill-white md:hidden" />
			</button>

			<Modal open={open} anchor="right" onClose={() => setOpen(false)}>
				<div className="flex flex-col gap-10 py-5">
					<Link
						href={"/"}
						className="flex items-center justify-center gap-1"
					>
						<Logo className="stroke-dark-base" />

						<p className="text-dark-base font-[Philosopher] text-[28px] font-normal">
							Novara
						</p>
					</Link>

					<ul className="flex flex-col gap-5 px-5">
						{routes.map((route: Route) => (
							<li key={route.name}>
								<Link href={route.href}>{route.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</Modal>
		</>
	);
}
