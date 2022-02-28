import { Request, Response, NextFunction } from 'express'

import Order from '@database/models/Order'
import { ServerInternalError } from '@utils/error'

export default {
	index: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const orders = await Order.find()

			return res.send(orders)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	find: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const order = await Order.find({
				userId: req.params.userId,
			})

			return res.send(order)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	create: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newOrder = new Order(req.body)

			const order = await newOrder.save()

			return res.status(201).send(order)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	update: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const updatedCart = await Order.findByIdAndUpdate(
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
			await Order.findByIdAndDelete(req.params.id)

			res.status(204).send()
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	income: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const date = new Date()
			const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
			const previousMonth = new Date(
				new Date().setMonth(lastMonth.getMonth() - 1)
			)

			const incomeOrders = await Order.aggregate([
				{
					$match: { createdAt: { $gte: previousMonth } },
				},
				{
					$project: {
						month: { $month: '$createdAt' },
						sales: '$amount',
					},
				},
				{
					$group: {
						_id: '$month',
						total: { $sum: '$sales' },
					},
				},
			])

			res.status(200).send(incomeOrders)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
}
