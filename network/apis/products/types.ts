import { Product } from "@/network/models/Product";
import { SuccessResponse } from "@/types/responses";

export type FetchProductsResponse = SuccessResponse<{
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}>;
