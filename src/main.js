import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		data: {
			name: "Portfolio",
			semester: "S6",
			firstName: "Max",
			lastName: "Altena"
		}
	}
});

export default app;
