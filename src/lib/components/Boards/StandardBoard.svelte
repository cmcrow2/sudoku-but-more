<script lang="ts">
	import { getPuzzle } from '$lib/database/database'
	import { isBoardValid } from '$lib/gameplay/boardValidation'
	import type { CellKey, Gamestate} from '$lib/database/gamestate'
	import { rowHeaders, colHeaders } from '$lib/database/gamestate'
	import { cross } from '$lib/util/board'

	let activePuzzle: Gamestate | null
	let selectedCell: CellKey

	async function setPuzzle(id: number) {
		const puzzle = await getPuzzle(id)
		activePuzzle = puzzle
		console.log('loaded puzzle!', activePuzzle)
	}

	function selectCell(cell: CellKey) {
		selectedCell = cell
	}

	function handleKeyPress(e: { keyCode: number }) {
		let num: number | null
		if (e.keyCode >= 49 && e.keyCode <= 57) {
			num = e.keyCode - 48
		} else if (e.keyCode >= 97 && e.keyCode <= 105) {
			num = e.keyCode - 96
		} else if (e.keyCode === 8 || e.keyCode === 46 || e.keyCode === 109 || e.keyCode === 189) {
			num = null
		} else {
			return
		}
		if (activePuzzle && selectedCell !== undefined) {
			console.log(`setting value of ${selectedCell} to ${num}`)
			if (activePuzzle.board[selectedCell].initialValue !== null) {
				console.log('You cannot change a given value!')
				return
			}
			activePuzzle.board[selectedCell].value = num
		}
	}

	function hasInitialValue(cell: CellKey): boolean {
		return activePuzzle?.board[cell].initialValue !== null
	}

	function isInSameRegion(cell: CellKey): boolean {
		if (cell === selectedCell) {
			return false
		}

		const rows = colHeaders.map((col) => cross(rowHeaders, col))
    	const cols = rowHeaders.map((row) => cross(row, colHeaders))

		const units = []
		for (const rowGroup of ['ABC', 'DEF', 'GHI']) {
			for (const colGroup of ['123', '456', '789']) {
				units.push(cross(rowGroup, colGroup))
			}
		}
		for (const unit of [...units, ...rows, ...cols]) {
			if (unit.includes(cell) && unit.includes(selectedCell)) {
				return true
			}
		}

		return false
	}

	function isSameValue(cell: CellKey): boolean {
		if (selectedCell === undefined || cell === selectedCell) {
			return false
		}

		const selectedValue = activePuzzle?.board[selectedCell].value
		if (selectedValue !== null && activePuzzle?.board[cell].value === selectedValue) {
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
			{#each rowHeaders as row, rowIndex}
				{#each colHeaders as col, colIndex}
					<div
						class="block
							{isInSameRegion(`${row}${col}`) ? 'selected-region' : ''}
							{isSameValue(`${row}${col}`) ? 'selected-value' : ''}
							{`${row}${col}` === selectedCell ? 'selected' : ''}
							{hasInitialValue(`${row}${col}`) ? 'initialValue' : ''}"
						on:click={() => selectCell(`${row}${col}`)}
						role="button"
						tabindex={rowIndex * 9 + colIndex}
					>
						{activePuzzle.board[`${row}${col}`].value === null ? '' : activePuzzle.board[`${row}${col}`].value}
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
