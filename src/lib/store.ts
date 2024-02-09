import type { Gamestate } from '$lib/database/gamestate'
import { writable } from 'svelte/store'

export const activePuzzle = writable<Gamestate | null>(null)
