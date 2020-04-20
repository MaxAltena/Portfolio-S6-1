<script>
	import { slide } from "svelte/transition";

	const navigateToMax = () => window.open("https://maxaltena.com/", "_blank");
</script>

<marquee transition:slide on:click="{navigateToMax}">
	Made with 💖 by
	<a href="https://maxaltena.com/" target="_blank">Max</a>
</marquee>

<style>
	marquee {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 30px;
		box-sizing: border-box;
		background: var(--primary);
		border: 3px solid var(--on-primary);
		color: var(--on-primary);
		transition: color var(--transition-speed) var(--transition-timing),
			background var(--transition-speed) var(--transition-timing);
		padding: 2px 0;
		font-size: 15px;
		width: 180px;
		cursor: pointer;
	}

	a {
		color: var(--on-primary);
		transition: color var(--transition-speed) var(--transition-timing);
	}
</style>
