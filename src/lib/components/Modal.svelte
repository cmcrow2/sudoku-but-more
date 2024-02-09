<script>
	import { links } from '$lib/stores/links';
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { showModal } from '$lib/stores/modalStore';
</script>

<div
	class="flex flex-col w-full h-full justify-center items-center bg-watermelon overflow-hidden text-paper"
	transition:slide={{ delay: 0, duration: 400, easing: quintOut, axis: 'y' }}
>
	{#each links as link}
		{#if link[0] !== 'Editor'}
			<a
				href={link[1]}
				on:click={() => showModal.set(!$showModal)}
				class="text-2xl p-4 underline underline-offset-4 hover:text-carbon-200 hover:decoration-carbon-200 decoration-paper"
				>{link[0]}</a
			>
		{/if}
	{/each}
	<a
		href={''}
		class="text-2xl p-4 underline underline-offset-4 hover:text-carbon-200 hover:decoration-carbon-200 decoration-paper"
		>Sign In</a
	>
	<a
		href={''}
		class="text-2xl p-4 underline underline-offset-4 hover:text-carbon-200 hover:decoration-carbon-200 decoration-paper"
		>Sign Out</a
	>
</div>
