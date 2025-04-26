import { axios } from "@/network/axios";
import { SuccessResponse } from "@/types/responses";
import { apis } from "@/utils/constants/apis";
import { FetchProductsResponse } from "./types";

export const fetchProducts = async (
	skip: number,
	category?: string,
	order?: string
) => {
	return await axios.get<SuccessResponse<FetchProductsResponse>>(
		apis.products.list(category),
		{
			params: {
				limit: 9,
				skip,
				sortBy: "title",
				order,
			},
		}
	);
};

export const fetchProductsBySearch = async (
	searchTerm: string,
	skip: number
) => {
	return await axios.get<SuccessResponse<FetchProductsResponse>>(
		apis.products.search,
		{
			params: {
				q: searchTerm,
				limit: 9,
				skip,
			},
		}
	);
};
