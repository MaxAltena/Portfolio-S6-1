<script>
	import { fly } from "svelte/transition";
	import { products } from "../utils/stores";
	import Product from "./Product.svelte";
</script>

<div class="showcase" in:fly="{{ y: 40, duration: 400, delay: 150 }}" role="presentation">
	{#each $products as product, i}
		{#if product.includeInShowcase}
			<div>
				<Product {product} {i} />
			</div>
		{/if}
	{/each}
</div>

<style>
	.showcase {
		width: 100%;
		padding: 0 5%;
		height: auto;
		display: grid;
		grid-gap: 10px 5%;
		grid-template-columns: repeat(3, 30%);
	}

	@media only screen and (max-width: 720px) {
		.showcase {
			grid-template-columns: repeat(2, 50%);
		}
	}

	@media only screen and (max-width: 420px) {
		.showcase {
			grid-template-columns: 100%;
		}

		.showcase > div {
			margin: 0 auto;
		}
	}
</style>
