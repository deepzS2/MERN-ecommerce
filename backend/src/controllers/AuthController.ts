import CryptoJS from 'crypto-js'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { CRYPTO_SECRET, JWT_SECRET } from '@/config'
import User from '@database/models/User'
import { ServerInternalError, UnauthorizedError } from '@utils/error'

export default {
	register: async (req: Request, res: Response, next: NextFunction) => {
		const { username, email, password } = req.body

		const user = new User({
			username,
			email,
			password: CryptoJS.AES.encrypt(password, CRYPTO_SECRET).toString(),
		})

		try {
			const newUser = await user.save()

			res.status(201).send(newUser)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	login: async (req: Request, res: Response, next: NextFunction) => {
		const { username, password } = req.body

		try {
			const user = await User.findOne({ username })

			if (!user) return next(new UnauthorizedError('User not found!'))

			const hashedPassword = CryptoJS.AES.decrypt(user.password, CRYPTO_SECRET)

			if (password !== hashedPassword.toString(CryptoJS.enc.Utf8))
				return next(new UnauthorizedError('Wrong credentials!'))

			const token = jwt.sign(
				{
					id: user._id,
					isAdmin: user.isAdmin,
				},
				JWT_SECRET,
				{
					expiresIn: '3d',
				}
			)

			return res.status(200).send({
				user: {
					_id: user._id,
					username: user.username,
					email: user.email,
					isAdmin: user.isAdmin,
					createdAt: user.createdAt,
					updatedAt: user.updatedAt,
					__v: user.__v,
				},
				token,
			})
		} catch (error) {
			return next(new ServerInternalError(error.message))
		}
	},
}
