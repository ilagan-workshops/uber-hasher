import express from 'express'
import { repeatHasher } from './hasher'

// :: ---

type InitializeServerOptions = {
	hostname: string
	host: string
	port: number
}

export const initializeServer = (options: InitializeServerOptions) => {
	const app = express()

	app.use((request, _, next) => {
		const timestamp = new Date().toISOString()
		const message = `[${timestamp}] Request received for ${request.path}.`
		console.log(message)

		next()
	})

	app.get('/hash/:input', (request, response) => {
		const hashed = repeatHasher(request.params.input, 1e6)
		response.send(hashed)
	})

	return app.listen(options.port, options.host)
}
