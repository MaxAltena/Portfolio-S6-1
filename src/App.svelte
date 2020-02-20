<script>
	import Clock from "./Clock.svelte";

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

	export let title;
	export let name;
</script>

<style>
	main {
		text-align: center;
		font-family: sans-serif;
	}

	h1 {
		font-size: 2rem;
	}

	button {
		font-size: 1rem;
	}
</style>

<main>
	<h1>{title} – {name}</h1>

	<div>
		<button on:click={handleCSClick}>Toggle theme</button>
		<p>{csCurrent}</p>
	</div>

	<div>
		<button on:click={handleRMClick}>Toggle animations</button>
		<p>{rmCurrent}</p>
	</div>

	<Clock />
</main>
