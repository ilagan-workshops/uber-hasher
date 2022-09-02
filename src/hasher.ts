import { createHash } from 'node:crypto'

// :: ---

/**
 * Hashes a string repeatadly and returns the output.
 */
export const repeatHasher = (input: string, iterations: number) => {
	let current = `${input}`

	for (let index = 0; index < iterations; index += 1) {
		const hasher = createHash('sha256')
		current = hasher.update(current).digest('hex')
	}

	return current
}
