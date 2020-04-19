import { writable, readable } from "svelte/store";

export const scrollY = writable(0);
export const name = readable("Portfolio");
export const docCS = writable(window.appPreferences.colorScheme.current);
export const semester = readable("S6");
export const firstName = readable("Max");
export const lastName = readable("Altena");
export const fullName = readable("Max Altena");
export const products = readable([
	{ type: "leeswijzer", includeInShowcase: false, emoji: "", title: "Leeswijzer", link: "leeswijzer" },
	{
		type: "page",
		includeInShowcase: true,
		emoji: "",
		title: "Product 1",
		link: "product1",
		content: "<p>Hier komt vanalles over product 1</p>"
	},
	{
		type: "page",
		includeInShowcase: true,
		emoji: "",
		title: "Product 2",
		link: "product2",
		content: "<p>Hier komt vanalles over product 2</p>"
	},
	{
		type: "page",
		includeInShowcase: true,
		emoji: "",
		title: "Product 3",
		link: "product3",
		content: "<p>Hier komt vanalles over product 3</p>"
	},
	{
		type: "page",
		includeInShowcase: true,
		emoji: "",
		title: "Product 4",
		link: "product4",
		content: "<p>Hier komt vanalles over product 4</p>"
	},
	{
		type: "page",
		includeInShowcase: true,
		emoji: "",
		title: "Product 5",
		link: "product5",
		content: "<p>Hier komt vanalles over <b>product 5</b></p>"
	},
	{
		type: "page",
		includeInShowcase: true,
		emoji: "👨🏼‍💻",
		title: "Development",
		link: "development",
		content: "<p>Hier komt vanalles over development en ook een github linkje</p>"
	}
]);
