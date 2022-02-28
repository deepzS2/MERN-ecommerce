import { Request, Response, NextFunction } from 'express'

import stripe from '@services/stripe'
import { ServerInternalError } from '@utils/error'

export default {
	payment: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const response = await stripe.charges.create({
				source: req.body.tokenId,
				amount: req.body.amount,
				currency: 'usd',
			})

			res.status(201).send(response)
		} catch (error) {
			next(new ServerInternalError(error.message))
		}
	},
}
