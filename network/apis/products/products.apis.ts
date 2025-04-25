import { axios } from "@/network/axios";
import { SuccessResponse } from "@/types/responses";
import { apis } from "@/utils/constants/apis";
import { FetchProductsResponse } from "./types";

export const fetchProducts = async (
	skip: number,
	category?: string,
	sortBy?: string
) => {
	return await axios.get<SuccessResponse<FetchProductsResponse>>(
		apis.products.list(skip, category, sortBy)
	);
};

export const fetchProductsBySearch = async (
	searchTerm: string,
	skip: number
) => {
	return await axios.get<SuccessResponse<FetchProductsResponse>>(
		apis.products.search(searchTerm, skip)
	);
};
