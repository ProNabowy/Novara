import React from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			{children}
		</div>
	);
}
