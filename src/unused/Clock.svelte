<script>
	import { onMount } from "svelte";
	import { spring } from "svelte/motion";
	import { pannable } from "./pannable.js";

	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.2,
			damping: 0.4
		}
	);

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
	}

	let time = new Date();

	// these automatically update when `time`
	// changes, because of the `$:` prefix
	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<style>
	svg {
		--width: 250px;
		--height: 250px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 50%;

		cursor: move;
	}

	.clock-face {
		stroke: #333;
		fill: white;
	}

	.minor {
		stroke: #999;
		stroke-width: 0.5;
	}

	.major {
		stroke: #333;
		stroke-width: 1;
	}

	.hour {
		stroke: #333;
	}

	.minute {
		stroke: #666;
	}

	.second,
	.second-counterweight {
		stroke: rgb(180, 0, 0);
	}

	.second-counterweight {
		stroke-width: 3;
	}
</style>

<svg
	viewBox="-50 -50 100 100"
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
	style="transform: translate({$coords.x}px,{$coords.y}px) rotate({$coords.x * 0.2}deg)">
	<circle class="clock-face" r="48" />

	<!-- markers -->
	{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
		<line class="major" y1="35" y2="45" transform="rotate({30 * minute})" />

		{#each [1, 2, 3, 4] as offset}
			<line class="minor" y1="42" y2="45" transform="rotate({6 * (minute + offset)})" />
		{/each}
	{/each}

	<!-- hour hand -->
	<line class="hour" y1="2" y2="-20" transform="rotate({30 * hours + minutes / 2})" />

	<!-- minute hand -->
	<line class="minute" y1="4" y2="-30" transform="rotate({6 * minutes + seconds / 10})" />

	<!-- second hand -->
	<g transform="rotate({6 * seconds})">
		<line class="second" y1="10" y2="-38" />
		<line class="second-counterweight" y1="10" y2="2" />
	</g>
</svg>
