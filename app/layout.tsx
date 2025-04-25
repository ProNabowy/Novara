import Layout from "@/components/Layout/Layout";
import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-geist-sans",
});

export const metadata: Metadata = {
	title: "Novara Products",
	description: "Products Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${philosopher.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
