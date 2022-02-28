import { NextFunction, Request, Response } from 'express'

import User from '@database/models/User'
import { ServerInternalError } from '@utils/error'

export default {
	register: async (req: Request, res: Response, next: NextFunction) => {
		const { username, email, password } = req.body

		const user = new User({
			username,
			email,
			password,
		})

		try {
			const newUser = await user.save()

			res.status(201).send(newUser)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	login: async (req: Request, res: Response) => {
		res.send({
			hello: 'world',
		})
	},
}
