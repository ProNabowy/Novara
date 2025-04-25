export const apis = {
	products: {
		list: (skip: number) => `/products?limit=9&skip=${skip}`,
		details: "/products/:id",
		byCategory: (category: string) => `/products/category/${category}`,
		search: (query: string) => `/products/search?q=${query}`,
	},
	categories: "products/category-list",
};
