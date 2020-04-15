<script>
	import { link } from "svelte-routing";
	import { fly } from "svelte/transition";

	export let title;
</script>

<main in:fly="{{ y: 100, duration: 300, delay: 150 }}" out:fly="{{ delay: 0, duration: 200, y: 50 }}">
	<div class="container" role="presentation">
		<div class="top" role="presentation">
			<a href="/" use:link>🔙</a>
			<h1>{title}</h1>
			<a href="/" use:link>☑️</a>
		</div>

		<hr />

		<slot />
	</div>
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
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		display: inline-block;
		color: var(--on-primary);
		transition: color calc(var(--transition-speed) / 2) var(--transition-timing);
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
		transition: height calc(var(--transition-speed) / 2) var(--transition-timing);
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
