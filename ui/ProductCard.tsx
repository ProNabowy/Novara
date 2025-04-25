"use client";
import {
	Check,
	Heart,
	OutlineHeart,
	Shield,
	Star,
	Tag,
	Truck,
	Units,
	X,
} from "@/icons";
import type { Product } from "@/network/models/Product";
import Image from "next/image";
import { useState } from "react";

type ProductCardProps = Pick<
	Product,
	| "id"
	| "title"
	| "description"
	| "price"
	| "discountPercentage"
	| "stock"
	| "brand"
	| "sku"
	| "thumbnail"
	| "images"
	| "availabilityStatus"
	| "reviews"
	| "category"
	| "warrantyInformation"
	| "shippingInformation"
	| "minimumOrderQuantity"
>;

export default function ProductCard({
	title,
	description,
	price,
	discountPercentage,
	stock,
	brand,
	sku,
	thumbnail,
	availabilityStatus,
	category,
	warrantyInformation,
	shippingInformation,
	minimumOrderQuantity,
	reviews,
}: ProductCardProps) {
	const [isFavorite, setIsFavorite] = useState(false);
	const isOutOfStock = stock === 0;
	const discountedPrice = price - (price * discountPercentage) / 100;
	const averageRating =
		reviews.reduce((acc, review) => acc + review.rating, 0) /
		reviews.length;

	return (
		<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg">
			{/* Image Container with Badges */}
			<div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
				<Image
					src={thumbnail}
					alt={title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				{/* Badges Overlay */}
				<div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
					<div className="flex items-center gap-2">
						<span className="flex items-center gap-1 rounded-full bg-gray-600/90 p-1 px-3 text-xs text-white backdrop-blur-sm">
							<Star className="size-4 fill-yellow-500" />
							{averageRating.toFixed(1)}
						</span>
						{discountPercentage > 0 && (
							<span className="flex items-center gap-1 rounded-full bg-red-500/90 px-3 py-1 text-xs text-white backdrop-blur-sm">
								<Tag className="size-4 fill-white" />
								<span className="line-clamp-1">
									{discountPercentage}% OFF
								</span>
							</span>
						)}
						<p className="line-clamp-1 gap-1 rounded-full bg-blue-500/90 px-3 py-1 text-xs text-white backdrop-blur-sm">
							{category}
						</p>
					</div>
					<button
						onClick={() => setIsFavorite(!isFavorite)}
						className="rounded-full bg-white/90 p-2 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
					>
						{isFavorite ? (
							<Heart className="size-5 fill-red-500" />
						) : (
							<OutlineHeart className="size-5" />
						)}
					</button>
				</div>
			</div>

			{/* Content */}
			<div className="flex flex-1 flex-col p-3">
				<div className="mb-2 flex items-start justify-between gap-2">
					<div>
						<h3 className="text-lg font-medium text-gray-900">
							{title}
						</h3>
						<p className="text-sm text-gray-600">
							{brand} • {sku}
						</p>
					</div>
					{isOutOfStock ? (
						<span className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-medium whitespace-nowrap text-red-700">
							<X className="size-3 fill-red-700" />
							Out of Stock
						</span>
					) : (
						<span className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium whitespace-nowrap text-emerald-700">
							<Check className="size-3 fill-emerald-700" />
							{availabilityStatus}
						</span>
					)}
				</div>

				<p className="line-clamp-2 text-sm text-gray-500">
					{description}
				</p>

				{/* Additional Info */}
				<div className="mt-3 flex items-center justify-between gap-1 text-xs text-gray-600">
					<div className="flex flex-col gap-1">
						<p className="flex items-center gap-1">
							<Shield className="size-4 fill-gray-600" />
							{warrantyInformation}
						</p>
						<p className="flex items-center gap-1">
							<Truck className="size-4 fill-gray-600" />
							{shippingInformation}
						</p>
					</div>
					<p className="flex items-center gap-1">
						<Units className="size-4" />
						Min. Order: {minimumOrderQuantity} units
					</p>
				</div>

				{/* Price */}
				<div className="mt-3 border-t border-gray-100 pt-3">
					<div className="flex items-center justify-between">
						<button className="bg-dark-base hover:bg-dark-base/80 rounded-lg px-4 py-2 text-sm font-medium text-white">
							Add To Cart
						</button>
						<div>
							<div className="flex items-baseline gap-2">
								<span className="text-xl font-bold text-gray-900">
									${discountedPrice.toFixed(2)}
								</span>
								{discountPercentage > 0 && (
									<span className="text-sm text-gray-500 line-through">
										${price.toFixed(2)}
									</span>
								)}
							</div>
							<p className="text-sm text-gray-600">
								Stock: {stock} units
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
