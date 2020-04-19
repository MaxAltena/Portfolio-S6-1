import { writable, readable } from "svelte/store";

export const scrollY = writable(0);
export const name = readable("Portfolio");
export const docCS = writable(window.appPreferences.colorScheme.current);
export const semester = readable("S6");
export const firstName = readable("Max");
export const lastName = readable("Altena");
export const fullName = readable("Max Altena");
export const products = readable([], set =>
	fetch("https://portfolio.maxaltena.com/S6/products.json").then(res => res.json().then(data => set(data.products)))
);
