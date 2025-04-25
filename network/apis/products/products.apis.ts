import { axios } from "@/network/axios";
import { SuccessResponse } from "@/types/responses";
import { apis } from "@/utils/constants/apis";

export const fetchProducts = async () => {
	return await axios.get<SuccessResponse<string[]>>(apis.products.list);
};
