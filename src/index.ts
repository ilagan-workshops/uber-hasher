import 'dotenv/config'
import { initializeServer } from './server'

// :: ---

const HOSTNAME = process.env.APP_HOSTNAME || 'my-uber-hasher'
const HOST = process.env.APP_HOST || '0.0.0.0'
const PORT = Number(process.env.APP_PORT) || 8080

// :: ---

const options = {
	hostname: HOSTNAME,
	host: HOST,
	port: PORT,
}
const server = initializeServer(options)

server.on('listening', () => {
	console.log(`Server listening on port ${HOST}:${PORT}.`)
})

server.on('error', (error) => {
	console.error(`Error encountered: ${error}`)
})
