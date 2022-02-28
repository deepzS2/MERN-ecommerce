import { Request, Response, NextFunction } from 'express'

import Product from '@/database/models/Product'
import { ServerInternalError } from '@utils/error'

export default {
	index: async (req: Request, res: Response, next: NextFunction) => {
		const { new: queryNew, category } = req.query

		try {
			let products

			if (queryNew) {
				products = await Product.find().sort({ createdAt: -1 }).limit(5)
			} else if (category) {
				products = await Product.find({
					categories: { $in: [(category as string).toLowerCase()] },
				})
			} else {
				products = await Product.find()
			}

			return res.send(products)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	find: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const product = await Product.findById(req.params.id)

			return res.send(product)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	create: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newProduct = new Product(req.body)

			const product = await newProduct.save()

			return res.status(201).send(product)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	update: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const updatedProduct = await Product.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			)

			res.status(200).send(updatedProduct)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
	delete: async (req: Request, res: Response, next: NextFunction) => {
		try {
			await Product.findByIdAndDelete(req.params.id)

			res.status(204).send()
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
}
