<script>
	export let name;
</script>

<style>
	main {
		text-align: center;
	}

	h1 {
		text-transform: uppercase;
	}
</style>

<main>
	<h1>BYE {name}!</h1>
	<p>
		Visit the
		<a href="https://svelte.dev/tutorial">Svelte tutorial</a>
		to learn how to build Svelte apps.
	</p>
	<button on:click={() => window.appPreferences.colorScheme.set('dark')}>cs to dark</button>
	<button on:click={() => window.appPreferences.colorScheme.set('light')}>cs to light</button>
	<button on:click={() => window.appPreferences.colorScheme.reset()}>cs to none</button>
	<button on:click={() => window.appPreferences.reducedMotion.set('reduce')}>rm to reduce</button>
	<button on:click={() => window.appPreferences.reducedMotion.reset()}>rm to none</button>
	<button on:click={() => window.appPreferences.colorScheme.toggle()}>toggle cs</button>
	<button on:click={() => window.appPreferences.reducedMotion.toggle()}>toggle rm</button>
</main>
