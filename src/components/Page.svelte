<script>
	export let product;
</script>

{#if product.content === ''}
	<p>Huh, product niet gevonden? Probeer het later nog eens!</p>
{:else}
	{@html product.content}
{/if}

<style>

</style>
