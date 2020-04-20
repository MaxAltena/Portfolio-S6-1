<script>
	export let product;
</script>

{#if product.link === 'kritische-vragen'}
	<h2>Aanleiding</h2>
	<p>
		Om op zoek te gaan naar problemen, moest er eerst gekeken worden naar mogelijke ingangspunten. Dit is gedaan
		door middel van de kritische vragen op te stellen en deze te vragen.
	</p>
	<h2>Aanpak</h2>
	<p>
		Verschillende vragen opgesteld die kritisch kijken naar de stichting en haar deelnemers. Eerst indivueel en
		daarna met de groep besproken om tot minimaal 10 vragen uit te komen. Hierbij zijn diverse raakvlakken geraakt,
		denk aan uitstraling, duidelijkheid en communicatie.
	</p>
	<h2>Conclusie</h2>
	<p>
		Duidelijkheid gekregen van welke kant er op moest worden gegaan. Eerste aannames verworpen en verder gegaan met
		feiten.
	</p>
	<h2>Verantwoording</h2>
	<p>Enkele eigen kritische vragen gemaakt en de uiteindelijke vragen aangescherpt en beter verwoord.</p>
{:else if product.link === 'probleemanalyse'}

{:else if product.link === 'warzone' || product.link === 'super-secret'}
	<p>
		Tijdens dit project zijn we bekend geraakt met een spelletje genaamd 'Warzone'. Hier heeft de groep veel van
		geleerd.
	</p>
	<img src="https://i.gyazo.com/7e700f4c8f564b05098b8f6d1f879170.png" style="width: 100%; height: auto;" />
{:else}
	<p>Huh, product niet gevonden? Probeer het later nog eens!</p>
{/if}

<style>
	h2 {
		margin: 0;
		color: var(--accent);
		transition: color var(--transition-speed) var(--transition-timing);
		font-size: 1.25em;
	}

	p {
		margin: 0;
		margin-top: 0.5rem;
		color: var(--on-primary);
		transition: all var(--transition-speed) var(--transition-timing);
		word-spacing: 1px;
		text-align: justify;
	}
</style>
