import { Request, Response } from 'express'

export default {
	index: async (req: Request, res: Response) => {
		res.send({
			hello: 'world',
		})
	},
}
