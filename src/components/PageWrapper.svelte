<script>
	import { link } from "svelte-routing";
	import { fly } from "svelte/transition";

	export let title;
</script>

<main class="container" in:fly="{{ y: 100, duration: 300, delay: 150 }}" out:fly="{{ delay: 0, duration: 200, y: 50 }}">
	<div class="top" role="presentation">
		<div class="header" role="presentation">
			<a href="../" use:link>🔙</a>
			<h1>{title}</h1>
			<a href="#top">🔝</a>
		</div>

		<hr />
	</div>

	<slot />
</main>

<style>
	main {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 5vh 0;
	}

	.top {
		position: sticky;
		top: 5vh;
		background: var(--primary);
		transition: background var(--transition-speed) var(--transition-timing);
		z-index: 50;
	}

	.top::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: calc(-5vh + 3px);
		background: var(--primary);
		transition: background var(--transition-speed) var(--transition-timing);
		width: 100%;
		height: 5vh;
		z-index: -1;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		color: var(--accent);
		transition: color var(--transition-speed) var(--transition-timing);
	}

	a {
		display: inline-block;
		color: var(--on-primary);
		transition: color var(--transition-speed) var(--transition-timing);
		text-decoration: none;

		padding: 4px;
		position: relative;
		width: auto;
		font-size: 1.5em;
	}

	a::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 4px;
		border-radius: 4px;
		background: var(--accent);
		z-index: -1;
		transition: height var(--transition-speed) var(--transition-timing),
			background var(--transition-speed) var(--transition-timing);
	}

	a:hover::after,
	a:active::after {
		height: 100%;
	}

	a:hover,
	a:active {
		color: var(--primary);
	}
</style>
