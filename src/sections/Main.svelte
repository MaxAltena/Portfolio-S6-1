<script>
	import { fly, fade } from "svelte/transition";
	import ProductShowcase from "../components/ProductShowcase.svelte";
	import { name, semester, fullName } from "../utils/stores";
</script>

<main class="container" out:fade="{{ duration: 300 }}">
	<div class="small-medium-only" role="presentation">
		<h1>
			<a href="#top" name="top">.</a>
			{$name} {$semester}
		</h1>
		<small>{$fullName}</small>

		<hr />
	</div>

	<h2 in:fly="{{ y: 40, duration: 400, delay: 0 }}">
		<a href="#opdracht" name="opdracht">.</a>
		Opdracht
	</h2>

	<p in:fly="{{ y: 40, duration: 400, delay: 50 }}">Lorem ipsum over de opdracht</p>

	<hr in:fly="{{ y: 40, duration: 400, delay: 75 }}" />

	<h2 in:fly="{{ y: 40, duration: 400, delay: 100 }}">
		<a href="#producten" name="producten">.</a>
		Producten
	</h2>

	<ProductShowcase />

	<hr in:fly="{{ y: 40, duration: 400, delay: 175 }}" />

	<h2 in:fly="{{ y: 40, duration: 400, delay: 200 }}">
		<a href="#reflectie" name="reflectie">.</a>
		Reflectie
	</h2>

	<p in:fly="{{ y: 40, duration: 400, delay: 250 }}">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, obcaecati. Repellendus modi delectus
		nulla ipsa, tempora sit eligendi voluptate cumque rem magnam repellat a minus iste ex, molestiae veritatis.
		Placeat.
	</p>
</main>

<style>
	main {
		padding-top: 100px;
		padding-bottom: 25px;
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}

	.small-medium-only {
		display: none;
		width: 100%;
	}

	h1,
	h2 {
		position: relative;
	}

	h2 {
		margin-bottom: 10px;
	}

	a[name] {
		position: absolute;
		top: -100px;
		opacity: 0;
		pointer-events: none;
	}

	p {
		color: var(--on-primary);
		transition: all var(--transition-speed) var(--transition-timing);
		word-spacing: 1px;
	}

	@media only screen and (max-width: 450px) {
		main {
			padding-top: 200px;
		}
	}

	@media only screen and (max-width: 770px) {
		.small-medium-only {
			display: block;
		}
	}
</style>
