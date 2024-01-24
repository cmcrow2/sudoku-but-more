<script lang="ts">
	import '../app.css';
	import { showModal } from '../stores/modalStore';
	import Header from '../components/header/Header.svelte';
</script>

<!-- could potentially have two slots? is that available in svelte? Mostly so the editor can include the sidebar component. -->

<div class="flex h-full gap-x-2">
	<!-- <Sidebar /> -->
	<div class="w-full h-full">
		<Header />
		<div class={$showModal ? 'hidden' : ''}>
			<slot />
		</div>
	</div>
</div>
