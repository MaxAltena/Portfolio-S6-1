<script>
	import { fly } from "svelte/transition";
	import { products } from "../utils/stores";
	import Product from "./Product.svelte";

	export let delay;
	export let animation;
</script>

<div class="showcase" in:fly="{{ ...animation, delay: (delay += 25) }}" role="presentation">
	{#each $products as product, i}
		{#if product.includeInShowcase}
			<div>
				<Product {animation} {product} {i} />
			</div>
		{/if}
	{/each}
</div>

<style>
	.showcase {
		margin: 1rem 0;
		width: 100%;
		padding: 0 5%;
		height: auto;
		display: grid;
		grid-gap: 10px 5%;
		grid-template-columns: repeat(2, 50%);
	}

	@media only screen and (max-width: 720px) {
		.showcase {
			grid-template-columns: 100%;
		}

		.showcase > div {
			margin: 0 2rem;
		}
	}

	@media only screen and (max-width: 420px) {
		.showcase > div {
			margin: 0;
		}
	}
</style>
