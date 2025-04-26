export const apis = {
	products: {
		list: (category?: string) =>
			`/products${category ? `/category/${category}` : ""}`,

		details: "/products/:id",

		search: `/products/search`,
	},
	categories: "products/category-list",
};
