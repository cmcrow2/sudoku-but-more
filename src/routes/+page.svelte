<script lang="ts">
	import StandardBoard from '$lib/components/Boards/StandardBoard.svelte'
	// import Sidebar from '$lib/components/Sidebar.svelte';
	import { showModal } from '$lib/stores/modalStore';
</script>

<div class="flex h-full gap-x-2">
	<!-- <Sidebar /> -->
	<div class="w-full h-full">
		<div class={$showModal ? 'hidden' : ''}>
			<h1 class="ml-4 mt-4">Welcome to Variance, a Variant Sudoku App!</h1>
			<StandardBoard />
		<p class="m-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, nisl a scelerisque
				pellentesque, libero risus faucibus leo, in rutrum augue nisl vitae turpis. Sed a faucibus
				tortor, non tempus lacus. Curabitur dictum velit quis pharetra pellentesque. Donec tempus
				nulla ac lectus porttitor suscipit. Duis consectetur augue maximus, auctor ligula quis,
				mattis arcu. Quisque et auctor tortor. Ut velit ante, faucibus id sem a, elementum eleifend
				neque. Maecenas efficitur lorem et commodo fringilla. Praesent in posuere mauris. Aliquam
				erat volutpat. Quisque tempor neque sed quam sollicitudin euismod. In ac suscipit eros, a
				fringilla enim. Fusce eget viverra est, fermentum blandit urna.
			</p>
			<p class="m-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, nisl a scelerisque
				pellentesque, libero risus faucibus leo, in rutrum augue nisl vitae turpis. Sed a faucibus
				tortor, non tempus lacus. Curabitur dictum velit quis pharetra pellentesque. Donec tempus
				nulla ac lectus porttitor suscipit. Duis consectetur augue maximus, auctor ligula quis,
				mattis arcu. Quisque et auctor tortor. Ut velit ante, faucibus id sem a, elementum eleifend
				neque. Maecenas efficitur lorem et commodo fringilla. Praesent in posuere mauris. Aliquam
				erat volutpat. Quisque tempor neque sed quam sollicitudin euismod. In ac suscipit eros, a
				fringilla enim. Fusce eget viverra est, fermentum blandit urna.
			</p>
			<p class="m-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, nisl a scelerisque
				pellentesque, libero risus faucibus leo, in rutrum augue nisl vitae turpis. Sed a faucibus
				tortor, non tempus lacus. Curabitur dictum velit quis pharetra pellentesque. Donec tempus
				nulla ac lectus porttitor suscipit. Duis consectetur augue maximus, auctor ligula quis,
				mattis arcu. Quisque et auctor tortor. Ut velit ante, faucibus id sem a, elementum eleifend
				neque. Maecenas efficitur lorem et commodo fringilla. Praesent in posuere mauris. Aliquam
				erat volutpat. Quisque tempor neque sed quam sollicitudin euismod. In ac suscipit eros, a
				fringilla enim. Fusce eget viverra est, fermentum blandit urna.
			</p>
			<p class="m-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, nisl a scelerisque
				pellentesque, libero risus faucibus leo, in rutrum augue nisl vitae turpis. Sed a faucibus
				tortor, non tempus lacus. Curabitur dictum velit quis pharetra pellentesque. Donec tempus
				nulla ac lectus porttitor suscipit. Duis consectetur augue maximus, auctor ligula quis,
				mattis arcu. Quisque et auctor tortor. Ut velit ante, faucibus id sem a, elementum eleifend
				neque. Maecenas efficitur lorem et commodo fringilla. Praesent in posuere mauris. Aliquam
				erat volutpat. Quisque tempor neque sed quam sollicitudin euismod. In ac suscipit eros, a
				fringilla enim. Fusce eget viverra est, fermentum blandit urna.
			</p>
			<p class="m-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, nisl a scelerisque
				pellentesque, libero risus faucibus leo, in rutrum augue nisl vitae turpis. Sed a faucibus
				tortor, non tempus lacus. Curabitur dictum velit quis pharetra pellentesque. Donec tempus
				nulla ac lectus porttitor suscipit. Duis consectetur augue maximus, auctor ligula quis,
				mattis arcu. Quisque et auctor tortor. Ut velit ante, faucibus id sem a, elementum eleifend
				neque. Maecenas efficitur lorem et commodo fringilla. Praesent in posuere mauris. Aliquam
				erat volutpat. Quisque tempor neque sed quam sollicitudin euismod. In ac suscipit eros, a
				fringilla enim. Fusce eget viverra est, fermentum blandit urna.
			</p>
			<p class="m-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, nisl a scelerisque
				pellentesque, libero risus faucibus leo, in rutrum augue nisl vitae turpis. Sed a faucibus
				tortor, non tempus lacus. Curabitur dictum velit quis pharetra pellentesque. Donec tempus
				nulla ac lectus porttitor suscipit. Duis consectetur augue maximus, auctor ligula quis,
				mattis arcu. Quisque et auctor tortor. Ut velit ante, faucibus id sem a, elementum eleifend
				neque. Maecenas efficitur lorem et commodo fringilla. Praesent in posuere mauris. Aliquam
				erat volutpat. Quisque tempor neque sed quam sollicitudin euismod. In ac suscipit eros, a
				fringilla enim. Fusce eget viverra est, fermentum blandit urna.
			</p>
		</div>
	</div>
</div>
