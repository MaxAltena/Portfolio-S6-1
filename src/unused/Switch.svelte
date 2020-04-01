<script>
	let csCurrent = window.appPreferences.colorScheme.current;
	let rmCurrent = window.appPreferences.reducedMotion.current;

	function handleCSClick() {
		window.appPreferences.colorScheme.toggle();
		csCurrent = window.appPreferences.colorScheme.current;
	}

	function handleRMClick() {
		window.appPreferences.reducedMotion.toggle();
		rmCurrent = window.appPreferences.reducedMotion.current;
	}
</script>

<div>
	<button on:click={handleCSClick}>Toggle theme</button>
	<p>{csCurrent}</p>
</div>

<div>
	<button on:click={handleRMClick}>Toggle animations</button>
	<p>{rmCurrent}</p>
</div>
