import { axios } from "@/network/axios";
import { SuccessResponse } from "@/types/responses";
import { apis } from "@/utils/constants/apis";
import { FetchProductsResponse } from "./types";

export const fetchProducts = async () => {
	return await axios.get<SuccessResponse<FetchProductsResponse>>(
		apis.products.list
	);
};
