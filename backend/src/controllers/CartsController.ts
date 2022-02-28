import { Request, Response, NextFunction } from 'express'

import Cart from '@/database/models/Cart'
import { ServerInternalError } from '@utils/error'

export default {
	index: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const carts = await Cart.find()

			return res.send(carts)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	find: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const cart = await Cart.findOne({
				userId: req.params.userId,
			})

			return res.send(cart)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	create: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newCart = new Cart(req.body)

			const cart = await newCart.save()

			return res.status(201).send(cart)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	update: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const updatedCart = await Cart.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			)

			res.status(200).send(updatedCart)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	delete: async (req: Request, res: Response, next: NextFunction) => {
		try {
			await Cart.findByIdAndDelete(req.params.id)

			res.status(204).send()
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
}
