import type { Gamestate } from '$lib/database/gamestate'

const headers = {
	'content-type': 'application/json'
}

export const getPuzzle = async (id: number, svelteFetch?: typeof fetch): Promise<Gamestate> => {
	const fetchFunc = svelteFetch ?? fetch

	const response = await fetchFunc('/api/puzzles', {
		method: 'GET',
		headers,
	})

    const puzzles: Gamestate[] = await response.json()
	return puzzles.filter((puzzle) => puzzle.id === id)[0]
}
