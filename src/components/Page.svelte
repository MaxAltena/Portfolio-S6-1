<script>
	export let product;
</script>

{product.content === "" ? "<p>Huh, product niet gevonden? Probeer het later nog eens!</p>" : @html product.content}

<style>

</style>
