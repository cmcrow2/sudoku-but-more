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

<div>
	<button on:click={() => setPuzzle(1)}>Load Puzzle</button>
	{#if activePuzzle}
		<div class="board">
			{#each activePuzzle.board as cols}
				<div class="row">
					{#each cols as cell}
						<div class="cell">{cell.value === '-' ? '' : cell.value}</div>
					{/each}
				</div>
			{/each}
		</div>
	{:else}
		<div>No puzzle loaded!</div>
	{/if}
</div>

<style>
	.board {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.cell {
		border: 1px solid black;
		padding: 5px;
		width: 30px;
		height: 30px;
		text-align: center;
		justify-content: center;
	}
</style>