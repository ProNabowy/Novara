import { ErrorResponse } from "@/types/responses";
import getCookiesFromServer from "@/utils/helpers/getCookiesFromServer";
import _axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const axios = _axios.create({
	baseURL: process.env.NEXT_PUBLIC_FRONTEND_PROXY_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"X-Use-Mockup-Data": process.env.NEXT_PUBLIC_USE_MOCKUP_DATA || false,
		"X-Requested-With": "XMLHttpRequest",
		"device-type": "website",
		"api-version": "latest",
		"x-api-key":
			typeof window === "undefined"
				? process.env.NEXT_PUBLIC_API_KEY
				: undefined,
	},
	withCredentials: true,
	withXSRFToken: true,
});

axios.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		if (typeof window === "undefined") {
			const { _XSRF_TOKEN, _LARAVEL_SESSION } =
				await getCookiesFromServer();

			let cookies = "";

			if (_XSRF_TOKEN) {
				cookies = `XSRF-TOKEN=${_XSRF_TOKEN}; `;
			}

			if (_LARAVEL_SESSION) {
				cookies += `laravel_session=${_LARAVEL_SESSION}`;
			}

			config.headers["Cookie"] = cookies;
		}

		return config;
	},

	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		let _error = error as AxiosError<ErrorResponse>;

		console.log(
			"Error in axios response interceptor",
			_error.response?.data.message,
			"URL:",
			_error.request?.url
		);

		return Promise.reject(error);
	}
);

export { axios };
