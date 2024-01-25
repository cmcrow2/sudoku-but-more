<!-- <h1 class="ml-4 mt-4 hidden md:flex">This is the Editor Page</h1>

<div class="md:hidden flex flex-col justify-center m-10 text-center text-xl">
	<p class="mb-10">Hello! Unfortunately our Editor is not supported on mobile phones.</p>
	<p>How did you even get here?</p>
</div> -->

<script>
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
		console.log('Hey');
	});
</script>

<div class="md:hidden flex flex-col">
	<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg" class="h-[20vh] w-full">
		{#if isLoaded}
			<path
				transition:draw={{ duration: 3250, delay: 200, easing: quintOut }}
				d="M 2.5 4 L 1 1 L 1.5 1 L 2.5 4 L 3.5 1 L 4 1 L 2.5 4"
				fill="none"
				stroke="black"
				stroke-width="0.07500px"
				stroke-linejoin="round"
			/>
		{/if}
	</svg>
	<div class="flex flex-col text-center m-10 mt-0 items-center">
		<hr class="flex m-4 border-watermelon mt-0" />
		<p class="mb-5">Hey, how'd you get here?</p>
		<p class="mb-5">This page is not supported on mobile or small screens.</p>
		<a
			href="/"
			class="inline-block text-lg text-watermelon bg-carbon-200 justify-center p-1 rounded-3xl animate-border duration-500 bg-gradient-to-r from-watermelon via-paper to-watermelon bg-[length:400%_400%] active:bg-watermelon active:text-paper"
		>
			<span class="block rounded-3xl bg-paper p-2 text-carbon-200">Take Me Home!</span>
		</a>
	</div>
</div>

<div class="md:flex hidden">
	<p class="ml-4 mt-4">This is the Editor Page</p>
</div>
