import * as restify from 'restify'

function webServer() {
	// const api = restify.createServer({
	// 	name: 'server'
	// }).listen(8080, '0.0.0.0', () => {
	// 	console.log('Api is running on port 8080');
	// })
	const api = restify.createServer({
		name: 'server-test'
	})

	api.get('/', (req, res, next) => {
		res.send(200, { test: 'Hello world' })
		next()
	})

	api.listen(8080, '0.0.0.0', () => {
		console.log('Api is running on port 8080.');
	})

}

webServer()