<script lang="ts">
	import NavLink from './NavLink.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { links } from '$lib/stores/links';
	import { showModal } from '$lib/stores/modalStore';
	import 'iconify-icon';
</script>

<div class={$showModal ? 'flex flex-col h-screen sticky top-0 z-50 ' : 'sticky top-0 z-50 '}>
	<div
		class="flex items-center justify-between flex-wrap bg-paper p-4 text-xl font-bold border-carbon-200 border-b-2"
	>
		<div class="flex flex-row">
			<a
				on:click={() => {
					showModal.set(false);
				}}
				href="/"
				class="font-hepta font-medium pt-2 pb-2 pl-2 pr-2 scale-125 mr-8 ml-4 hover:text-paper hover:cursor-pointer transition-all {$showModal
					? 'hover:text-watermelon hover:underline decoration-watermelon'
					: 'hover:bg-watermelon hover:text-paper bg-sky-300'}">Variance</a
			>
			{#each links as link}
				{#if link[0] !== 'Home'}
					<NavLink href={link[1]} text={link[0]} />
				{/if}
			{/each}
		</div>
		<button
			on:click={() => {
				showModal.set(!$showModal);
			}}
		>
			{#if $showModal}
				<iconify-icon
					icon="ph:x-bold"
					class="mr-3 pt-1 scale-150 md:hidden hover:text-watermelon hover:cursor-pointer"
				/>
			{:else}
				<iconify-icon
					icon="mingcute:menu-fill"
					class="mr-3 pt-1 scale-150 md:hidden hover:text-watermelon hover:cursor-pointer"
				/>
			{/if}
		</button>
		<div class="flex-col hidden md:flex">
			<div
				class="flex justify-center font-normal text-sm hover:text-watermelon hover:underline decoration-watermelon hover:bg-carbon-200 pt-2 pb-2 pl-4 pr-4 rounded-3xl hover:bg-opacity-5 transition"
			>
				Log In
			</div>
			<div
				class="flex justify-center font-normal text-sm hover:text-watermelon hover:underline decoration-watermelon hover:bg-carbon-200 pt-2 pb-2 pl-4 pr-4 rounded-3xl hover:bg-opacity-5 transition"
			>
				Sign Up
			</div>
		</div>
	</div>
	{#if $showModal}
		<Modal />
	{/if}
</div>
