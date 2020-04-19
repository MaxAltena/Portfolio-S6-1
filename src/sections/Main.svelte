<script>
	import { fly, fade } from "svelte/transition";
	import ProductShowcase from "../components/ProductShowcase.svelte";
	import { name, semester, fullName } from "../utils/stores";

	let delay = 0;
	let animation = { y: 40, duration: 500 };
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

	<h1 in:fly="{{ ...animation, delay: delay }}">
		<a href="#opdracht" name="opdracht">.</a>
		Opdracht
	</h1>

	<h2 in:fly="{{ ...animation, delay: (delay += 100) }}">Opdrachtgever</h2>

	<p in:fly="{{ ...animation, delay: (delay += 50) }}">Lorem ipsum</p>

	<h2 in:fly="{{ ...animation, delay: (delay += 100) }}">Opdrachtomschrijving</h2>

	<p in:fly="{{ ...animation, delay: (delay += 50) }}">Lorem ipsum</p>

	<hr in:fly="{{ ...animation, delay: (delay += 100) }}" />

	<h1 in:fly="{{ ...animation, delay: (delay += 100) }}">
		<a href="#producten" name="producten">.</a>
		Producten
	</h1>

	<ProductShowcase {animation} {delay} />

	<hr in:fly="{{ ...animation, delay: (delay += 100) }}" />

	<h1 in:fly="{{ ...animation, delay: (delay += 100) }}">
		<a href="#reflectie" name="reflectie">.</a>
		Reflectie
	</h1>

	<p in:fly="{{ ...animation, delay: (delay += 50) }}">Lorem ipsum</p>
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

	h1 {
		margin: 0;
		color: var(--accent);
		transition: color var(--transition-speed) var(--transition-timing);
		font-size: 1.5em;
	}

	h2 {
		margin: 0;
		margin-top: 1rem;
		color: var(--accent);
		transition: color var(--transition-speed) var(--transition-timing);
		font-size: 1.25em;
	}

	h2::before {
		content: "⤴️";
		display: inline-block;
		transform: rotate(90deg);
		margin-right: 0.25rem;
	}

	a[name] {
		position: absolute;
		top: -100px;
		opacity: 0;
		pointer-events: none;
	}

	p {
		margin: 0;
		margin-top: 0.5rem;
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
