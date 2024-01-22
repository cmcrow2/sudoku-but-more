<script>
	import NavLink from './NavLink.svelte';
	import 'iconify-icon';

	const links = [
		['Puzzles', '/puzzles'],
		['Editor', '/editor'],
		['About', '/about']
	];
</script>

<div
	class="flex items-center justify-between flex-wrap bg-paper p-6 mb-4 text-xl font-bold sticky top-0 z-50 border-b border-carbon-200"
>
	<div class="flex flex-row gap-x-2">
		<iconify-icon icon="mingcute:menu-fill" class="ml-2 mr-2 pt-3 scale-150 md:hidden" />
		<a href="/" class="pt-2 pb-2 pl-2 pr-2 scale-125 mr-4 ml-4 bg-sky-300">Variance</a>
		{#each links as link}
			<NavLink href={link[1]} text={link[0]} />
		{/each}
	</div>
	<div class="flex-row hidden sm:flex">
		<div
			class="hover:text-watermelon hover:underline decoration-watermelon hover:bg-carbon-200 pt-2 pb-2 pl-4 pr-4 rounded-3xl hover:bg-opacity-5 transition"
		>
			Log In
		</div>
		<div
			class="hover:text-watermelon hover:underline decoration-watermelon hover:bg-carbon-200 pt-2 pb-2 pl-4 pr-4 rounded-3xl hover:bg-opacity-5 transition"
		>
			Sign Up
		</div>
	</div>
</div>
