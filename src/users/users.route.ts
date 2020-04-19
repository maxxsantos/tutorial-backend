import { Server } from 'restify'

export function usersRoute(api: Server) {
	let users = []

	//List all Users
	api.get('/users', (req, res, next) => {
		res.send(200, users || [])
	})
	
	//Get expecific user
	api.get('/users/:id', (req, res, next) => {
		let getUser = users.find(user => user.id == req.params.id)
		if(getUser) {
			res.send(200, getUser)
		} else
			res.send(404, 'user not found.')
	})

	//Create user
	api.post('/users', (req, res, next) => {
		if(req.body) {
			if(req.body.name) {
				if(req.body.id) {
					const user = req.body
					users.push(user)
					res.send(201, user)
				} else
					res.send(400, 'id is require.')
			} else
				res.send(400, 'name is require.')
		} else {
			res.send(400, 'body is require.')
		}
	})

	//Update user
	api.patch('/users/:id', (req, res, next) => {
		let getUser = users.find( user => user.id == req.params.id )
		if (getUser) {
			if(req.body) {
				let indexUser = users.indexOf(getUser)			
				users[indexUser].name = req.body.name
				res.send(200, 'Update successful.')			
			} else
				res.send(400, 'Body is require.')
		} else
			res.send(404, 'User not found.')
	})

	//Delete user
	api.del('/users/:id', (req, res, next) => {
		let getUser = users.find( user => user.id == req.params.id )
		if (getUser){
			users.splice(users.indexOf(getUser), 1)
			res.send(200, 'User deleted successful.')
		} else
			res.send(404, 'User not found.')
	})
}