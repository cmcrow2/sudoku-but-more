import type { Cell } from '$lib/database/gamestate'
import { writable } from 'svelte/store'

export const activePuzzle = writable<Cell | null>(null)
