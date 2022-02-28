import CryptoJS from 'crypto-js'
import { Request, Response, NextFunction } from 'express'

import { CRYPTO_SECRET } from '@/config'
import User from '@database/models/User'
import { ServerInternalError } from '@utils/error'

export default {
	index: async (req: Request, res: Response, next: NextFunction) => {
		const query = req.query.new

		try {
			const users = query
				? await User.find().sort({ _id: -1 }).limit(5)
				: await User.find()

			return res.send(users)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	find: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const user = await User.findById(req.params.id)

			return res.send({
				_id: user._id,
				username: user.username,
				email: user.email,
				isAdmin: user.isAdmin,
				createdAt: user.createdAt,
				updatedAt: user.updatedAt,
				__v: user.__v,
			})
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	stats: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const date = new Date()
			const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

			const data = await User.aggregate([
				{
					$match: { createdAt: { $gte: lastYear } },
				},
				{
					$project: {
						month: { $month: '$createdAt' },
					},
				},
				{
					$group: {
						_id: '$month',
						total: { $sum: 1 },
					},
				},
			])

			res.send(data)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	update: async (req: Request, res: Response, next: NextFunction) => {
		const { password } = req.body

		try {
			const newData = req.body

			if (password) {
				newData.password = CryptoJS.AES.encrypt(
					password,
					CRYPTO_SECRET
				).toString()
			}

			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: newData,
				},
				{ new: true }
			)

			res.status(200).send(updatedUser)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	delete: async (req: Request, res: Response, next: NextFunction) => {
		try {
			await User.findByIdAndDelete(req.params.id)

			res.status(204).send()
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
}
