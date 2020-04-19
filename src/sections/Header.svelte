<script>
	import { fade } from "svelte/transition";
	import { link } from "svelte-routing";
	import { scrollY, name, semester, fullName } from "../utils/stores";

	$: title = `${$name} ${$semester}`;

	const changeColorScheme = () => window.appPreferences.colorScheme.toggle();
</script>

<header class:scrolled="{$scrollY !== 0}" out:fade="{{ duration: 300 }}">
	<div class="before" role="presentation"></div>
	<div class="container" role="presentation">
		<div class="logo" role="presentation">
			<a href="#top" on:click="{() => window.scrollTo(0, 0)}" class="title">{title}</a>
			<small class="scrolledHide">{$fullName}</small>
		</div>

		<nav>
			<a href="leeswijzer/" use:link>Leeswijzer</a>
			<a href="#opdracht">Opdracht</a>
			<a href="#producten">Producten</a>
			<a href="#reflectie">Reflectie</a>

			<div on:click="{changeColorScheme}" class="iconContainer" role="presentation">
				<i class="gg-dark-mode"></i>
			</div>
		</nav>
	</div>
	<div class="after" role="presentation">
		<div class="container" role="presentation">
			<small class="scrolledShow">– {$fullName}</small>
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		height: 65px;
		color: var(--on-primary);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: color var(--transition-speed) var(--transition-timing);
		z-index: 10;
		box-shadow: none;
	}

	.before {
		content: "";
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 4px;
		top: 0;
		left: 0;
		right: 0;
		background: var(--accent);
		transition: background var(--transition-speed) var(--transition-timing);
	}

	.after {
		position: absolute;
		z-index: -2;
		width: 100%;
		height: 4px;
		top: -4px;
		left: 0;
		right: 0;
		background: var(--primary);
		transition: background var(--transition-speed) var(--transition-timing),
			height var(--transition-speed) var(--transition-timing),
			box-shadow var(--transition-speed) var(--transition-timing);
		overflow: hidden;
		box-shadow: none;
	}

	.scrolled .after {
		height: 70px;
		box-shadow: var(--header-box-shadow);
	}

	div.container {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	div {
		position: relative;
		height: 100%;
	}

	a.title {
		position: absolute;
		display: block;
		left: 0;
		top: 19px;
		margin: auto;
		font-size: 22px;
		width: 140px;
		font-weight: 800;
		color: var(--on-primary);
		transition: color var(--transition-speed) var(--transition-timing);
		text-decoration: none;
	}

	small {
		display: block;
		position: absolute;
		left: 0;
		top: 46px;
		margin: auto;
		font-size: 12px;
		width: 68px;
	}

	small.scrolledHide {
		z-index: -3;
	}

	small.scrolledShow {
		z-index: 1;
		width: 80px;
		top: 31px;
		left: 134px;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav a {
		margin-right: 15px;
		color: var(--on-primary);
		transition: color calc(var(--transition-speed) / 2) var(--transition-timing);
		text-decoration: none;

		padding: 4px;
		position: relative;
	}

	nav a::after {
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

	nav a:hover::after,
	nav a:active::after {
		height: 100%;
	}

	nav a:hover,
	nav a:active {
		color: var(--primary);
	}

	.iconContainer {
		height: auto;
		width: auto;
		padding: 4px;
		cursor: pointer;
	}

	.gg-dark-mode {
		box-sizing: border-box;
		position: relative;
		display: block;
		transform: scale(var(--ggs, 1));
		border: 2px solid;
		border-radius: 100px;
		width: 20px;
		height: 20px;
	}
	.gg-dark-mode::after,
	.gg-dark-mode::before {
		content: "";
		box-sizing: border-box;
		position: absolute;
		display: block;
	}
	.gg-dark-mode::before {
		border: 5px solid;
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
		border-right: 0;
		width: 9px;
		height: 18px;
		top: -1px;
		left: -1px;
	}
	.gg-dark-mode::after {
		border: 4px solid;
		border-top-right-radius: 100px;
		border-bottom-right-radius: 100px;
		border-left: 0;
		width: 4px;
		height: 8px;
		right: 4px;
		top: 4px;
	}

	@media only screen and (max-width: 770px) {
		.logo {
			display: none;
		}

		small {
			display: none;
		}

		div.container {
			justify-content: center;
		}
	}

	@media only screen and (max-width: 450px) {
		header {
			height: 200px;
		}

		.scrolled .after {
			height: 200px;
		}

		nav {
			flex-direction: column;
			justify-content: space-evenly;
		}

		nav a {
			margin-right: 0;
		}
	}
</style>
