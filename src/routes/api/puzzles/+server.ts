import type { RequestHandler } from '@sveltejs/kit'
import { json } from '@sveltejs/kit'
import puzzlesJson from '$lib/server/db.json'
import type { Cell, Difficulty, Gamestate, Ruleset } from '$lib/database/gamestate'

interface GamestateJson {
    id: number
    ruleset: string
    description?: string
    difficulty: string
    board: string
}

// Likely a temporary method until we have a database. We can store the full detailed
// object as JSON in the database. This makes it easier to manually add puzzles
const jsonGamestateConverter = (jsonState: GamestateJson): Gamestate => {
    const board: Array<Array<Cell>> = new Array()
    const chars = [...jsonState.board]

    let row: Array<Cell> = new Array()
    chars.forEach((c, i) => {
        const value = c === '-' ? c : parseInt(c)
        row.push({ value, initialValue: value })
        if ((i + 1) % 9 === 0) {
            board.push(row)
            row = new Array()
        }
    })
    return {
        id: jsonState.id,
        difficultyRating: jsonState.difficulty as Difficulty,
        description: jsonState.description,
        ruleset: jsonState.ruleset as Ruleset,
        board
    }
}

export const GET = (() => {
    const puzzles = puzzlesJson as GamestateJson[]
    return json(puzzles.map((puzzle) => jsonGamestateConverter(puzzle)))
}) satisfies RequestHandler