<script>
	import { Router, Route } from "svelte-routing";
	import { scrollY, name, semester, firstName, lastName, fullName, products } from "./utils/stores";

	import PageWrapper from "./components/PageWrapper.svelte";
	import Page from "./components/Page.svelte";
	import Leeswijzer from "./routes/Leeswijzer.svelte";

	import Header from "./sections/Header.svelte";
	import Main from "./sections/Main.svelte";
	import TooltipForDarkmode from "./utils/TooltipForDarkmode.svelte";
	import FixedBanner from "./utils/FixedBanner.svelte";

	export let url = "";
	export let basepath = process.env.isProd ? "S6" : "";

	fetch("https://portfolio.maxaltena.com/S6/data.json").then(res =>
		res.json().then(data => {
			$name = data.name;
			$semester = data.semester;
			$firstName = data.firstName;
			$lastName = data.lastName;
			$fullName = `${data.firstName} ${data.lastName}`;
			$products = data.products;
		})
	);
	$: console.log(url !== "" ? $products.find(_product => _product.link === url).name : "")

	$: document.title = `${$name} ${$semester} – ${$fullName}`;
</script>

<svelte:window bind:scrollY="{$scrollY}" />

<div class="accent" role="presentation"></div>

<Router {url} {basepath}>
	{#each $products as product}
		<Route path="/{product.link}/">
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
		z-index: 10000;
		height: 4px;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		background: var(--accent);
		transition: background var(--transition-speed) var(--transition-timing);
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
