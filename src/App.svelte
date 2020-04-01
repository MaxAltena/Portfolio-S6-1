<script>
	import Header from "./sections/Header.svelte";
	import Main from "./sections/Main.svelte";
	import TooltipForDarkmode from "./utils/TooltipForDarkmode.svelte";

	let y = 0;

	export let data;

	$: document.title = `${data.name} ${data.semester} – ${data.firstName} ${data.lastName}`;
</script>

<style>
	:global(hr) {
		width: 95%;
		margin: 16px auto;
		border-width: 1px;
		border-style: solid;
		border-color: var(--on-primary);
		border-radius: 999px;
		opacity: 0.25;
		transition: border-color var(--transition-speed) var(--transition-timing);
	}
</style>

<svelte:window bind:scrollY={y} />

<TooltipForDarkmode {y} />

<Header {data} {y} />
<Main {data} />
