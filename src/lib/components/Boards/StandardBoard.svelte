<script lang="ts">
	import { getPuzzle } from '$lib/database/database'
	import { isBoardValid } from '$lib/gameplay/boardValidation'
	import type { Gamestate } from '$lib/database/gamestate'

	let activePuzzle: Gamestate | null
	let selectedCol: number
	let selectedRow: number

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
		if (e.keyCode >= 49 && e.keyCode <= 57) {
			num = e.keyCode - 48
		} else if (e.keyCode >= 97 && e.keyCode <= 105) {
			num = e.keyCode - 96
		} else if (e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 109 || e.keyCode === 189) {
			num = '-'
		} else {
			return
		}
		if (activePuzzle && selectedCol !== undefined && selectedRow !== undefined) {
			console.log(`setting value of ${selectedRow}, ${selectedCol} to ${num}`)
			if (activePuzzle.board[selectedRow][selectedCol].initialValue !== '-') {
				console.log('You cannot change a given value!')
				return
			}
			activePuzzle.board[selectedRow][selectedCol].value = num
		}
	}

	function isSelectedDifferentCell(row: number, col: number): boolean {
		// Validate a cell is selected and it's different from the one in question
		if (selectedRow === undefined || selectedCol === undefined) {
			return false
		}
		if (row === selectedRow && col === selectedCol) {
			return false
		}
		return true
	}

	function isInSameRegion(row: number, col: number): boolean {
		if (!isSelectedDifferentCell(row, col)) {
			return false
		}

		// Check if cells are in the same col, row, or region
		if (selectedRow === row || selectedCol === col) {
			return true
		} else if (~~(selectedCol / 3) == ~~(col / 3) && ~~(selectedRow / 3) == ~~(row / 3)) {
			return true
		}
		return false
	}

	function isSameValue(row: number, col: number): boolean {
		if (!isSelectedDifferentCell(row, col)) {
			return false
		}

		const selectedValue = activePuzzle?.board[selectedRow][selectedCol].value
		if (selectedValue !== '-' && activePuzzle?.board[row][col].value === selectedValue) {
			return true
		}
		return false
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
						class="block
							{isInSameRegion(rowIndex, colIndex) ? 'selected-region' : ''}
							{isSameValue(rowIndex, colIndex) ? 'selected-value' : ''}
							{selectedRow === rowIndex && selectedCol === colIndex ? 'selected' : ''}
							{cell.initialValue !== '-' ? 'initialValue' : ''}"
						on:click={() => selectCell(colIndex, rowIndex)}
						role="button"
						tabindex={rowIndex * 9 + colIndex}
					>
						{cell.value === '-' ? '' : cell.value}
					</div>
				{/each}
			{/each}
		</div>
		<div>Is puzzle valid? -- {isBoardValid(activePuzzle)}</div>
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
		font-size: 2.5em;
		font-weight: 400;
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
		background-color: theme('colors.sky.100');
	}

	.selected {
		background-color: theme('colors.sky.400');
	}

	.selected-region {
		background-color: theme('colors.sky.200');
	}

	.selected-value {
		background-color: theme('colors.sky.400')
	}

	.initialValue {
		font-weight: bold;
	}
</style>
