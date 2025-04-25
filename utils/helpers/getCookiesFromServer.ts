"use server";

import { cookies } from "next/headers";

export default async function getCookiesFromServer() {
	const _headers = await cookies();

	const _XSRF_TOKEN = _headers.get("XSRF-TOKEN");
	const _LARAVEL_SESSION = _headers.get("laravel_session");

	return {
		_XSRF_TOKEN: _XSRF_TOKEN?.value || null,
		_LARAVEL_SESSION: _LARAVEL_SESSION?.value || null,
	};
}
