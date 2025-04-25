export const apis = {
	products: {
		list: (skip: number, category?: string, sortBy?: string) =>
			`/products${category ? `/category/${category}` : ""}?limit=9&skip=${skip}${sortBy ? `&sortBy=title&order=${sortBy}` : ""}`,
		details: "/products/:id",
		search: (search: string, skip: number) =>
			`/products/search?q=${search}&limit=9&skip=${skip}`,
	},
	categories: "products/category-list",
};
