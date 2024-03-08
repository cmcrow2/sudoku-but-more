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

function isStandardBoardValid(board: Record<string, Cell>): boolean {
    const rowHeaders = 'ABCDEFGHI'
    const colHeaders = '123456789'

    function cross(a: string, b: string) {
      return [...a].map((aa) => {
        return [...b].map((bb) => {
          return aa + bb
        })
      }).flat()
    }

    const rows = [...colHeaders].map((col) => cross(rowHeaders, col))
    const cols = [...rowHeaders].map((row) => cross(row, colHeaders))
    const blocks = []
    for (const rowGroup of ['ABC', 'DEF', 'GHI']) {
      for (const colGroup of ['123', '456', '789']) {
        blocks.push(cross(rowGroup, colGroup))
      }
    }

    for (const unit of [...rows, ...cols, ...blocks]) {
        if (!isUnitValid(board, unit)) {
            return false
        }
    }

    return true
}

function isUnitValid(board: Record<string, Cell>, unit: string[]): boolean {
    const values = unit.map((cellKey) => board[cellKey].value)

    for (let i = 1; i <= 9; i++) {
        if (!values.includes(i)) {
            return false
        }
    }
    return true
}

// KILLER

function isKillerBoardValid(board: Record<string, Cell>): boolean {
    return false
}