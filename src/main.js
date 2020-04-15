import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		data: {
			name: "Portfolio",
			semester: "S6",
			firstName: "Max",
			lastName: "Altena",
			products: [
				{ type: "leeswijzer", includeInShowcase: false, emoji: "", title: "Leeswijzer", link: "leeswijzer" },
				{ type: "page", includeInShowcase: true, emoji: "", title: "Product 1", link: "product1" },
				{ type: "page", includeInShowcase: true, emoji: "", title: "Product 2", link: "product2" },
				{ type: "page", includeInShowcase: true, emoji: "", title: "Product 3", link: "product3" },
				{ type: "page", includeInShowcase: true, emoji: "", title: "Product 4", link: "product4" },
				{ type: "page", includeInShowcase: true, emoji: "", title: "Product 5", link: "product5" },
				{ type: "page", includeInShowcase: true, emoji: "👨🏼‍💻", title: "Development", link: "development" }
			]
		}
	}
});

export default app;
