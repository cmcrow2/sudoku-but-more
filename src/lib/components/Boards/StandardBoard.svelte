<script lang="ts">
	import { getPuzzle } from '$lib/database/database'
	import type { Gamestate } from '$lib/database/gamestate'

	let activePuzzle: Gamestate | null

	$: activePuzzle = null

	async function setPuzzle(id: number) {
		const puzzle = await getPuzzle(id)
		activePuzzle = puzzle
		console.log('loaded puzzle!', activePuzzle)
	}
</script>

<div class="text-center">
	<button on:click={() => setPuzzle(1)}>Load Puzzle</button>
	{#if activePuzzle}
		<div class="board">
			{#each activePuzzle.board as cols}
				{#each cols as cell}
					<div class="block">{cell.value === '-' ? '' : cell.value}</div>
				{/each}
			{/each}
		</div>
	{:else}
		<div>No puzzle loaded!</div>
	{/if}
</div>

<style>
	.board {
		width: min-content;
		height: min-content;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-template-rows: repeat(9, 1fr);
		grid-gap: 2px;
		cursor: pointer;
	}

	.block {
		box-shadow: 0 0 0 2px black;
		width: 50px;
		height: 50px;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-direction: column;
		user-select: none;
		border-collapse: collapse;
		box-sizing: border-box;
	}

	.block:nth-child(3n) {
		border-right: 2px solid black;
	}
	.block:nth-child(9n-8) {
		border-left: 2px solid black;
	}
	.block:nth-child(-n+9) {
		border-top: 2px solid black;
	}
	.block:nth-child(n+19):nth-child(-n+27) {
		border-bottom: 2px solid black;
	}
	.block:nth-child(n+46):nth-child(-n+54) {
		border-bottom: 2px solid black;
	}
	.block:nth-child(n+73) {
		border-bottom: 2px solid black;
	}

	.block:hover {
		background-color: lightgrey;
	}
</style>