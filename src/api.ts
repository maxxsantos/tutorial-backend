import { settings } from './configs/settings';
import * as restify from 'restify'

export function apiServer() {
	const api = restify.createServer({
		name: settings.server.name
	})

	api.get('/', (req, res, next) => {
		res.send(200, { test: 'Hello world' })
		next()
	})

	api.listen(settings.server.port, settings.server.host, () => {
		console.log('Api is running on port 8080.');
	})
}