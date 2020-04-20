<script>
	import { link } from "svelte-routing";
	import { fade } from "svelte/transition";

	export let animation;
	export let product;
	export let i;
</script>

<a use:link in:fade="{{ duration: animation.duration, delay: 375 + i * 100 }}" href="{product.link}/">
	{product.emoji || '▶'} {product.title}
</a>

<style>
	a {
		display: inline-block;
		color: var(--on-primary);
		transition: color var(--transition-speed) var(--transition-timing);
		text-decoration: none;

		padding: 4px;
		position: relative;
		width: auto;
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
		transition: height calc(var(--transition-speed) / 2) var(--transition-timing),
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
