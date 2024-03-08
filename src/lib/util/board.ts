import type { ColHeaders, RowHeaders } from "$lib/database/gamestate"

export function cross(a: string | RowHeaders[], b: string | ColHeaders[]) {
	return [...a]
		.map((aa) => {
			return [...b].map((bb) => {
				return aa + bb
			})
		})
		.flat()
}
