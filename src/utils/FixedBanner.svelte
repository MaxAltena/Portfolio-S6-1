<script>
	import { slide } from "svelte/transition";
</script>

<marquee transition:slide>
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
		padding: 2px 10px;
		font-size: 15px;
	}

	a {
		color: var(--on-primary);
		transition: color var(--transition-speed) var(--transition-timing);
	}
</style>
