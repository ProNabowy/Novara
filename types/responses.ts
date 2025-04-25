export type AvailableCodes = 200 | 400 | 404 | 403 | 422 | 500 | 401 | 402;

export type SuccessResponse<T> = {
	data: T;
	code: AvailableCodes;
	message: string;
	errors: object;
};

export type ErrorResponse<TFormFields = {}> = {
	code: AvailableCodes;
	message: string;
	errors: {
		[key in keyof TFormFields]: string[];
	};
	data: object;
};

export type PaginationResponse<T> = {
	links: {
		first: string;
		last: string;
		prev: string | null;
		next: string | null;
	};
	meta: {
		current_page: number;
		from: number;
		last_page: number;
		links: {
			url: string | null;
			label: string;
			active: boolean;
		}[];
		path: string;
		per_page: number;
		to: number;
		total: number;
	};
} & SuccessResponse<T>;
