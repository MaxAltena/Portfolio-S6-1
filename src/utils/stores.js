import { writable } from "svelte/store";

export const scrollY = writable(0);
export const docCS = writable(window.appPreferences.colorScheme.current);
export const name = writable("Portfolio");
export const semester = writable("S6");
export const firstName = writable("Max");
export const lastName = writable("Altena");
export const fullName = writable("Max Altena");
export const products = writable([]);
