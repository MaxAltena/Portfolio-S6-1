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
		margin: 0.5rem 0;
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

	<p>Dit is pas een mooi portfolio van {data.firstName} {data.lastName}</p>

	<hr />

	<p>Lorem ipsum dolor sit amet, eu quo intellegat constituam. Ne integre habemus nam, duo conceptam constituto id. Ea sed doctus admodum lucilius. Ad solum accommodare duo.</p>

	<p>Eum idque graece ei, eros vidit erroribus cum an. Duo id mucius vocent suscipiantur, ad pertinacia dissentiunt mel. Id sit facilis sadipscing complectitur, ei vis minim eirmod neglegentur. Ad fugit sonet eam, ne cibo idque vix, erant aliquam et qui. Nobis tibique id sea.</p>

	<div style="height:200vh;"></div>
</main>
