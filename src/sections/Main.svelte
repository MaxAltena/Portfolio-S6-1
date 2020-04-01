<script>
	export let data;
</script>

<style>
	main {
		padding-top: 100px;
	}

	p {
		color: var(--accent);
		transition: all var(--transition-speed) var(--transition-timing);
	}

	@media only screen and (max-width: 450px){
		main {
			padding-top: 200px;
		}
	}
</style>

<main class="container">
	<h1>{data.firstName} {data.lastName}</h1>

	<hr />

	<p>Lorem ipsum van {data.name}</p>

	<hr />

	<div style="height:200vh;"></div>
</main>
