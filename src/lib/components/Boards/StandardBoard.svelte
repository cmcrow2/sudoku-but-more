<script lang="ts">
	import { getPuzzle } from '$lib/database/database'
	import type { Gamestate } from '$lib/database/gamestate'

	let activePuzzle: Gamestate | null
	let selectedCol: number
	let selectedRow: number

	// $: activePuzzle = null

	async function setPuzzle(id: number) {
		const puzzle = await getPuzzle(id)
		activePuzzle = puzzle
		console.log('loaded puzzle!', activePuzzle)
	}

	function selectCell(col: number, row: number) {
		selectedCol = col
		selectedRow = row
	}

	function handleKeyPress(e: { keyCode: number }) {
		let num: number | '-'
		if (e.keyCode >= 49 && e.keyCode <=57) {
			num = e.keyCode - 48
		} else if (e.keyCode >= 97 && e.keyCode <= 105) {
			num = e.keyCode - 96
		} else if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 109 || e.keyCode == 189) {
			num = '-'
		} else {
			return
		}
		if (activePuzzle && selectedCol !== undefined && selectedRow !== undefined) {
			console.log(`setting value of ${selectedRow}, ${selectedCol} to ${num}`)
			activePuzzle.board[selectedRow][selectedCol].value = num
		}
	}

</script>

<svelte:window on:keydown|preventDefault={handleKeyPress} />

<div class="text-center">
	<button on:click={() => setPuzzle(1)}>Load Puzzle</button>
	{#if activePuzzle}
		<div class="board">
			{#each activePuzzle.board as rows, rowIndex}
				{#each rows as cell, colIndex}
					<div
						class="block {selectedRow == rowIndex && selectedCol == colIndex ? "selected" : ""}"
						on:click={() => selectCell(colIndex, rowIndex)}
						role="button"
						tabindex={rowIndex * 9 + colIndex}
					>
						{cell.value === '-' ? '' : cell.value}
					</div>
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
		position: relative;
		outline: none;
	}

	.block:nth-child(3n) {
		border-right: 2px solid black;
	}
	.block:nth-child(9n-8) {
		border-left: 2px solid black;
	}
	.block:nth-child(-n + 9) {
		border-top: 2px solid black;
	}
	.block:nth-child(n + 19):nth-child(-n + 27) {
		border-bottom: 2px solid black;
	}
	.block:nth-child(n + 46):nth-child(-n + 54) {
		border-bottom: 2px solid black;
	}
	.block:nth-child(n + 73) {
		border-bottom: 2px solid black;
	}

	.block:hover {
		background-color: lightgrey;
	}

	.selected:after {
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		box-shadow: inset 0 0 0 4px skyblue;
	}
</style>
