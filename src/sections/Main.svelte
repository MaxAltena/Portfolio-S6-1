<script>
	export let data;
</script>

<style>
	main {
		padding-top: 100px;
		padding-bottom: 25px;
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		position: relative;
	}

	a[name]{
		position: absolute;
		top: -100px;
		opacity: 0;
		pointer-events: none;
	}

	h3 {
		margin-top: 25px;
	}

	small {
		margin-top: 10px;
	}

	p {
		color: var(--on-primary);
		transition: all var(--transition-speed) var(--transition-timing);
	}

	@media only screen and (max-width: 450px){
		main {
			padding-top: 200px;
		}
	}
</style>

<main class="container">
	<h1><a href="#top" name="top">.</a>{data.name} {data.semester}</h1>
	<small>{data.firstName} {data.lastName}</small>

	<hr />

	<h2><a href="#leeswijzer" name="leeswijzer">.</a>Leeswijzer</h2>

	<p>Leeswijzer is ook <a href="leeswijzer" class="link">hier</a> te vinden om te downloaden.</p>

	<hr />

	<h2><a href="#opdracht" name="opdracht">.</a>Opdracht</h2>

	<p>Lorem ipsum over de opdracht</p>

	<hr />

	<h2><a href="#proces" name="proces">.</a>Proces</h2>

	<h3><a href="#aanpak" name="aanpak">.</a>Aanpak</h3>

	<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eaque ullam, ipsam blanditiis cum officia nihil itaque corrupti ipsa doloremque error hic aperiam iure temporibus repellat consequatur minima voluptate. Dolores!</p>


	<h3><a href="#uitvoering" name="uitvoering">.</a>Uitvoering</h3>

	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet cupiditate laborum explicabo, sunt consectetur nihil reprehenderit pariatur libero aliquid provident ea ducimus tenetur neque architecto odio excepturi reiciendis eligendi?</p>

	<h3><a href="#resultaten" name="resultaten">.</a>Resultaten</h3>

	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate soluta quibusdam voluptatem mollitia! Error illo, commodi cupiditate in, libero vitae praesentium nam voluptatem deserunt tempora culpa, voluptatibus obcaecati itaque.</p>

	<hr />

	<h2><a href="#reflectie" name="reflectie">.</a>Reflectie</h2>

	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, obcaecati. Repellendus modi delectus nulla ipsa, tempora sit eligendi voluptate cumque rem magnam repellat a minus iste ex, molestiae veritatis. Placeat.</p>
</main>
