<script>
	export let data;
</script>

<main class="container">
	<h1>
		<a href="#top" name="top">.</a>
		{data.name} {data.semester}
	</h1>
	<small>{data.firstName} {data.lastName}</small>

	<hr />

	<h2>
		<a href="#leeswijzer" name="leeswijzer">.</a>
		Leeswijzer
	</h2>

	<p>
		Leeswijzer is ook
		<a href="leeswijzer" class="link">hier</a>
		te vinden om te downloaden.
	</p>

	<hr />

	<h2>
		<a href="#opdracht" name="opdracht">.</a>
		Opdracht
	</h2>

	<p>Lorem ipsum over de opdracht</p>

	<hr />

	<h2>
		<a href="#producten" name="producten">.</a>
		Producten
	</h2>
	producten
	<hr />

	<h2>
		<a href="#reflectie" name="reflectie">.</a>
		Reflectie
	</h2>

	<p>
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

	h1,
	h2 {
		position: relative;
	}

	a[name] {
		position: absolute;
		top: -100px;
		opacity: 0;
		pointer-events: none;
	}

	small {
		margin-top: 10px;
	}

	p {
		color: var(--on-primary);
		transition: all var(--transition-speed) var(--transition-timing);
	}

	@media only screen and (max-width: 450px) {
		main {
			padding-top: 200px;
		}
	}
</style>
