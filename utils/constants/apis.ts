export const apis = {
	products: {
		list: "/products",
		details: "/products/:id",
		byCategory: (category: string) => `/products/category/${category}`,
		search: (query: string) => `/products/search?q=${query}`,
	},
	categories: "products/category-list",
};
