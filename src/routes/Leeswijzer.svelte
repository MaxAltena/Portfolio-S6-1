<script>
	import { docCS } from "../utils/stores";

	const lightID = "1RviMZMeYHdmDn1PIocat5O-BFMtMsQKr";
	const darkID = "12WbER64Y0T19uG3I5eLBYahQoCiWliw7";

	$: id = $docCS === "dark" ? darkID : lightID;

	const changedocCS = () => ($docCS = $docCS === "dark" ? "light" : "dark");
</script>

<p>
	Liever de {$docCS === 'dark' ? 'lichtere' : 'donkere'} versie van de leeswijzer zien? Dan is er ook nog een
	<span role="presentation" on:click="{changedocCS}">{$docCS === 'dark' ? 'lichtere' : 'donkere'} versie.</span>
</p>

<p>
	Of helemaal geen zin om het hier te zien? Open de leeswijzer in een
	<a href="https://drive.google.com/file/d/{id}/view" target="_blank">nieuwe tab.</a>
</p>

<iframe
	class:light="{$docCS != 'dark'}"
	class:dark="{$docCS == 'dark'}"
	src="https://docs.google.com/viewer?srcid={id}&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
	frameborder="0"
	title="Leeswijzer"
></iframe>

<style>
	iframe {
		width: 100%;
		height: 71vh;
		min-height: 250px;
		border-radius: 4px;
		transition: border var(--transition-speed) var(--transition-timing);
		margin-top: 20px;
	}

	iframe.light {
		border: 4px solid var(--light-accent);
	}

	iframe.dark {
		border: 4px solid var(--dark-accent);
	}

	span,
	a {
		cursor: pointer;
		color: var(--on-primary);
		transition: color calc(var(--transition-speed) / 2) var(--transition-timing);
		text-decoration: none;

		padding: 4px;
		position: relative;
	}

	span::after,
	a::after {
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

	span:hover::after,
	a:hover::after,
	span:hover::after,
	a:active::after {
		height: 100%;
	}

	span:hover,
	a:hover,
	span:active,
	a:active {
		color: var(--primary);
	}
</style>
