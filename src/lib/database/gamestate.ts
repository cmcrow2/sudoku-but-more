export type Ruleset = 'standard' | 'killer'
export type Difficulty = "easy" | "medium" | "hard"


// Add additional attributes here for background highlighting and other markup
export interface Cell {
    value: number | null
    initialValue: number | null
}

export type RowHeaders = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
export type ColHeaders = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type CellKey = `${RowHeaders}${ColHeaders}`

export interface Gamestate {
    id: number
	ruleset: Ruleset
    description?: string
    difficultyRating: Difficulty
    board: Record<CellKey, Cell>
}

// CONSTANTS

export const rowHeaders: RowHeaders[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
export const colHeaders: ColHeaders[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9']