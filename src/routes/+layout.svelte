<script lang="ts">
	import '../app.css';
	import { showModal } from '../stores/modalStore';
	import Header from '../components/header/Header.svelte';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<!-- could potentially have two slots? is that available in svelte? Mostly so the editor can include the sidebar component. -->

<div class="flex h-full gap-x-2">
	<!-- <Sidebar /> -->
	<div class="w-full h-full">
		<Header />
		<div class={$showModal ? 'hidden' : ''}>
			{#key data.url}
				<div in:fade={{ duration: 300, delay: 300 }} out:fly={{ duration: 300 }}>
					<slot />
				</div>
			{/key}
		</div>
	</div>
</div>
