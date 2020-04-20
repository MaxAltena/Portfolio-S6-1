<script>
	import { link } from "svelte-routing";
	import { fly, fade } from "svelte/transition";
	import ProductShowcase from "../components/ProductShowcase.svelte";
	import { name, semester, fullName } from "../utils/stores";

	let delay = 0;
	let animation = { y: 40, duration: 250 };
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

	<h1 in:fly="{{ ...animation, delay: (delay = 0) }}">
		<a href="#opdracht" name="opdracht">.</a>
		Opdracht
	</h1>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		<a href="http://stichtingikwil.nl/" target="_blank">Stichting Ik Wil</a>
		wist aan het begin van het project niet zo goed wat voor opdracht er zou kunnen worden gegeven aan verschillende
		Fontys studenten. Vandaar gingen wij,
		<a href="http://desigaar.com/" target="_blank">De Sigaar,</a>
		als ICT & Media Design’ers op zoek naar knelpunten en mogelijke problemen die zich bij de stichting voordeden.
	</p>

	<h2 in:fly="{{ ...animation, delay: (delay += 50) }}">Probleemstelling</h2>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		In de eerste paar weken is er onderzoek gedaan naar welke knelpunten en mogelijke problemen er zich bij de
		stichting voordeden. Hier kwamen aandachtspunten uit die allemaal terug naar 1 algemeen onderwerp konden worden
		herleid: duidelijkheid. Zo was er bijvoorbeeld geen duidelijkheid bij voorbijgangers dat de stichting zich op
		deze nieuwe locatie bevond, geen duidelijkheid bij mensen van wie wat deed bij de stichting en geen
		duidelijkheid bij deelnemers van welke activiteiten er allemaal werden georganiseerd. Uit dit algemene probleem
		is ook een hoofdvraag bedacht.
	</p>

	<h2 in:fly="{{ ...animation, delay: (delay += 50) }}">Hoofdvraag</h2>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		Hoe kunnen we een middel maken dat Stichting Ik Wil en/of hun bezoekers helpt om duidelijkheid te creëren over
		diverse informatie binnen de stichting?
	</p>

	<h2 in:fly="{{ ...animation, delay: (delay += 50) }}">Doelstelling</h2>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		Aan het einde van de 9 weken voor het project is er een middel bedacht, getest, ontworpen en gerealiseerd dat de
		stichting en haar bezoekers duidelijkheid geeft over diverse informatie dat zich binnen de stichting bevindt.
	</p>

	<hr in:fly="{{ ...animation, delay: (delay += 50) }}" />

	<h1 in:fly="{{ ...animation, delay: (delay += 50) }}">
		<a href="#producten" name="producten">.</a>
		Producten
	</h1>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		Weten hoe de producten tot stand zijn gekomen? Bekijk dan even de aanpak in
		<a href="leeswijzer/" use:link>de leeswijzer.</a>
	</p>

	<ProductShowcase {animation} {delay} />

	<hr in:fly="{{ ...animation, delay: (delay += 50) }}" />

	<h1 in:fly="{{ ...animation, delay: (delay += 50) }}">
		<a href="#reflectie" name="reflectie">.</a>
		Reflectie
	</h1>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		Terugkijkend op het project zijn er aantal verbeterpunten te vinden voor mijzelf. Startend bijvoorbeeld met de
		communicatie tussen mij en groepsgenoten tijdens mijn afwezigheid. Soms communiceerde ik niet goed wanneer ik
		weer aanwezig zou zijn. Ook de communicatie tijdens het ontwikkelen van het product ging het een en ander niet
		helemaal goed. Hierbij ging ik in eigen tijd de code van andere mensen verbeteren om zo een beter product op te
		kunnen leveren. Dit gebeurde soms wel met de persoon erbij, maar ik was hierbij niet altijd even duidelijk. Zo
		wordt er de volgende keer ook betere afspraken gemaakt over de definition of done en hoe de workflow eruit ziet
		op GitHub.
	</p>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		Het in mijn vrije tijd nog iets doen aan het project moet ik de komende projecten verminderen. Zo heb ik te
		weinig tijd overgehouden aan het maken van een portfolio voor het halen van het semester. Hiernaast ook het tijd
		nemen door de week in om sommige projectdagen meer voor mezelf iets aan het portfolio te doen.
	</p>

	<p in:fly="{{ ...animation, delay: (delay += 25) }}">
		Het samenwerken met de stichting vond ik erg fijn. Niet alleen met Stephan maar ook met de deelnemers bij de
		stichting. Het wat een unieke kans om op locatie te zitten met de doel- en publieksgroep en samen met hen een
		product te ontwikkelen. Helaas was het aan het einde van het project niet mogelijk om het product te testen om
		het te valideren door het COVID-19 virus.
	</p>
</main>

<style>
	main {
		padding-top: 100px;
		padding-bottom: 50px;
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
		text-align: justify;
	}

	@media only screen and (max-width: 425px) {
		main {
			padding-top: 200px;
		}
	}

	@media only screen and (max-width: 770px) {
		.small-medium-only {
			display: block;
		}
	}

	a {
		cursor: pointer;
		color: var(--on-primary);
		transition: color calc(var(--transition-speed) / 2) var(--transition-timing);
		text-decoration: none;

		padding: 4px;
		position: relative;
	}

	a::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 4px;
		border-radius: 4px;
		background: var(--accent);
		z-index: -1;
		transition: height calc(var(--transition-speed) / 2) var(--transition-timing),
			background var(--transition-speed) var(--transition-timing);
	}

	a:hover::after,
	a:active::after {
		height: 100%;
	}

	a:hover,
	a:active {
		color: var(--primary);
	}
</style>
