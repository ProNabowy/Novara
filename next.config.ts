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
			// {
			// 	protocol: "https",
			// 	hostname: "**.amazonaws.com",
			// 	port: "",
			// },
		],
	},
};

export default nextConfig;
