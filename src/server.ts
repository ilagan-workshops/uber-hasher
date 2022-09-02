import express from 'express'

// :: ---

type InitializeServerOptions = {
	hostname: string
	host: string
	port: number
}

export const initializeServer = (options: InitializeServerOptions) => {
	const app = express()

	// :: TODO routing

	return app.listen(options.port, options.host)
}
