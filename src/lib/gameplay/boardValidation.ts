import type { Cell, Gamestate } from "$lib/database/gamestate";

export function isBoardValid(gamestate: Gamestate): boolean {
    switch (gamestate.ruleset) {
        case 'standard':
            return isStandardBoardValid(gamestate.board)
        case 'killer':
            return isKillerBoardValid(gamestate.board)
    }
}
/*
    Maybe move each into it's own file?
*/

// STANDARD

function isStandardBoardValid(board: Array<Array<Cell>>): boolean {

    // ROWS
    // for (let row of board) {
    //     if (!isRegionComplete(row)) {
    //         return false
    //     }
    // }

    // COLS
    for (let i = 0; i < 9; i++) {
        let col = []
        for (let j = 0; j < 9; j++) {
            col.push(board[j][i])
        }
        if (!isRegionComplete(col)) {
            return false
        }
    }
    return true
}

function isRegionComplete(region: Array<Cell>): boolean {
    const values = region.map((cell) => cell.value)

    for (let i = 1; i <= 9; i++) {
        if (!values.includes(i)) {
            return false
        }
    }
    return true
}

// KILLER

function isKillerBoardValid(board: Array<Array<Cell>>): boolean {
    return false
}