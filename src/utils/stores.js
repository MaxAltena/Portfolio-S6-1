import { writable } from "svelte/store";

export const scrollY = writable(0);
export const docCS = writable(window.appPreferences.colorScheme.current);
export const name = writable("");
export const semester = writable("");
export const firstName = writable("");
export const lastName = writable("");
export const fullName = writable("");
export const products = writable([]);
