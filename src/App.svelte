<script>
	import { Router, Route } from "svelte-routing";
	import { spring } from "svelte/motion";
	import { scrollY, name, semester, fullName, products } from "./utils/stores";

	import PageWrapper from "./components/PageWrapper.svelte";
	import Page from "./components/Page.svelte";
	import Leeswijzer from "./routes/Leeswijzer.svelte";

	import Header from "./sections/Header.svelte";
	import Main from "./sections/Main.svelte";
	import TooltipForDarkmode from "./utils/TooltipForDarkmode.svelte";
	import FixedBanner from "./utils/FixedBanner.svelte";

	export let url = "";
	export let basepath = process.env.isProd ? "/S6" : "/";

	$: document.title = `${$name} ${$semester} – ${$fullName}`;

	let coords = spring(
		{ x: -50, y: -50 },
		{
			stiffness: 0.2,
			damping: 0.4
		}
	);

	let size = spring(30);
</script>

<svelte:window
	bind:scrollY="{$scrollY}"
	on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
	on:mousedown="{() => size.set(40)}"
	on:mouseup="{() => size.set(30)}"
/>

<div
	class="cursor"
	role="presentation"
	style="top: {$coords.y - $size / 2}px; left: {$coords.x - $size / 2}px; width: {$size}px; height: {$size}px;
	border-width: {$size * 0.15}px;"
></div>

<div class="accent" role="presentation"></div>

<Router {url} {basepath}>
	{#each $products as product}
		<Route path="/{product.link}">
			{#if product.type === 'page'}
				<PageWrapper title="{product.title}">
					<Page {product} />
				</PageWrapper>
			{:else if product.type === 'leeswijzer'}
				<PageWrapper title="{product.title}">
					<Leeswijzer />
				</PageWrapper>
			{/if}

		</Route>
	{/each}
	<Route path="/">
		<TooltipForDarkmode />
		<Header />
		<Main />
	</Route>
</Router>

<FixedBanner />

<style>
	.accent {
		position: fixed;
		height: 4px;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		background: var(--accent);
		transition: background var(--transition-speed) var(--transition-timing);
	}

	.cursor {
		border-color: var(--on-primary);
		border-style: solid;
		border-radius: 50%;
		position: fixed;
		pointer-events: none;
		z-index: 1000;
	}

	@media only screen and (max-width: 770px) {
		.cursor {
			display: none;
		}
	}

	:global(hr) {
		width: 95%;
		margin: 20px auto;
		border-width: 1px;
		border-style: solid;
		border-color: var(--on-primary);
		border-radius: 999px;
		opacity: 0.25;
		transition: border-color var(--transition-speed) var(--transition-timing);
	}

	:global(a.link) {
		color: var(--on-primary);
		transition: color calc(var(--transition-speed) / 2) var(--transition-timing);
		text-decoration: none;
		position: relative;
	}

	:global(a.link::after) {
		content: "";
		position: absolute;
		bottom: -1px;
		left: -1px;
		right: -1px;
		width: calc(100% + 2px);
		height: 2px;
		border-radius: 4px;
		background: var(--accent);
		z-index: -1;
		transition: height calc(var(--transition-speed) / 2) var(--transition-timing);
	}

	:global(a.link:hover::after, a.link:active::after) {
		height: calc(100% + 2px);
	}

	:global(a.link:hover, a.link:active) {
		color: var(--primary);
	}
</style>
