import { NextConfig } from "next";

const nextConfig: NextConfig = {
	rewrites: async () => {
		return [
			{
				source: "/backend/API/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.dummyjson.com",
			},
		],
	},
};

export default nextConfig;
