export type Ruleset = 'standard' | 'killer'
export type Difficulty = "easy" | "medium" | "hard"


// Add additional attributes here for background highlighting and other markup
export interface Cell {
    value: number | '-'
}

export interface Gamestate {
	id: number
	ruleset: Ruleset
    description?: string
    difficultyRating: Difficulty
    board: Array<Array<Cell>>
}