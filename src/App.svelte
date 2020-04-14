<style>
	:global(hr) {
		width: 95%;
		margin: 20px auto;
		border-width: 1px;
		border-style: solid;
		border-color: var(--on-primary);
		border-radius: 999px;
		opacity: 0.25;
		transition: border-color var(--transition-speed) var(--transition-timing);
	}

	:global(a.link) {
		color: var(--on-primary);
		transition: color calc(var(--transition-speed) / 2) var(--transition-timing);
		text-decoration: none;
		position: relative;
	}

	:global(a.link::after) {
		content: "";
		position: absolute;
		bottom: -1px;
		left: -1px;
		right: -1px;
		width: calc(100% + 2px);
		height: 2px;
		border-radius: 4px;
		background: var(--accent);
		z-index: -1;
		transition: height calc(var(--transition-speed) / 2) var(--transition-timing);
	}

	:global(a.link:hover::after, a.link:active::after) {
		height: calc(100% + 2px);
	}

	:global(a.link:hover, a.link:active) {
		color: var(--primary);
	}
</style>

<script>
	import Header from "./sections/Header.svelte";
	import Main from "./sections/Main.svelte";
	import TooltipForDarkmode from "./utils/TooltipForDarkmode.svelte";

	let y = 0;

	export let data;

	$: document.title = `${data.name} ${data.semester} – ${data.firstName} ${data.lastName}`;
</script>

<svelte:window bind:scrollY={y} />

<TooltipForDarkmode {y} />
<Header {data} {y} />
<Main {data} />
