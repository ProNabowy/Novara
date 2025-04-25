import Layout from "@/components/Layout/Layout";
import type { Metadata } from "next";
import { Philosopher } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-geist-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Novara Products - Premium Quality Products",
	description:
		"Discover our premium collection of products at Novara. Find high-quality items that match your style and needs.",
	keywords: "Novara, products, premium, quality, shopping",
	authors: [{ name: "Novara" }],
	openGraph: {
		title: "Novara Products - Premium Quality Products",
		description:
			"Discover our premium collection of products at Novara. Find high-quality items that match your style and needs.",
		type: "website",
		locale: "en_US",
		siteName: "Novara Products",
	},
	twitter: {
		card: "summary_large_image",
		title: "Novara Products",
		description: "Discover our premium collection of products at Novara",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full scroll-smooth">
			<body className={`${philosopher.variable} h-full antialiased`}>
				<Layout>
					<a
						href="#main-content"
						className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4"
					>
						Skip to main content
					</a>
					<main id="main-content" className="h-[calc(100vh-90px)]">
						{children}
					</main>
				</Layout>
			</body>
		</html>
	);
}
