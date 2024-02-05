<script>
	import { fade, fly } from 'svelte/transition';
</script>

<div
	in:fade={{ duration: 300, delay: 300 }}
	out:fly={{ duration: 300 }}
	class="flex flex-col items-center justify-center content-center h-[10rem] bg-carbon-200 text-paper mt-auto gap-y-4"
>
	<p class="text-xl text-sky-300">Variance</p>
	<div class="flex flex-row gap-x-4">
		<a class="hover:text-watermelon" href="/">Home</a>
		<a class="hover:text-watermelon" href="/puzzles">Puzzles</a>
		<a class="hover:text-watermelon" href="/rules">Rules</a>
		<a class="hover:text-watermelon" href="/about">About</a>
		<!-- <a class="hover:text-watermelon" href="/">Contact</a> -->
	</div>
</div>
