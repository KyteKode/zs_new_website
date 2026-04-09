<script lang="ts">
	import "../app.css";

	import shield from "$lib/assets/shield.png";
	import logo from "$lib/assets/logo.png";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={shield} />
</svelte:head>

<header class="h-20 sticky top-0 px-8 flex flex-col justify-center bg-[rgba(18,18,40,0.7)] backdrop-blur-sm backdrop-grayscale-50">
	<nav class="h-3/4 flex flex-row items-center justify-between">
		<span class="flex flex-col justify-center h-full">
			<a href="/" class="max-h-full max-w-[40vw] hover:scale-110 transition-transform duration-300 origin-left">
				<img src={logo} alt="ZipShield" class="h-full aspect-909/245 hidden xs:block"/>
				<img src={shield} alt="ZipShield" class="h-full aspect-41/49 block xs:hidden"/>
			</a>
		</span>
		<span class="flex items-center">
			<a href="/buy" class="text-2xl hover:scale-120 transition-transform duration-300">Buy</a>
		</span>
	</nav>
</header>

<article class="flex flex-col items-center p-5">{@render children()}</article>
