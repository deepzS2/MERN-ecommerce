import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { IUserToken } from '@/@types/express'
import { JWT_SECRET } from '@/config'
import { ForbiddenError, UnauthorizedError } from '@utils/error'

async function verifyTokenAndAuthorization(
	req: Request,
	res: Response,
	next: NextFunction
) {
	verifyToken(req, res, (err) => {
		if (err) return next(err)

		if (req.user.id !== req.params.id && !req.user.isAdmin) {
			return next(new ForbiddenError('You are not allowed to do that!'))
		}

		next()
	})
}

async function verifyToken(req: Request, res: Response, next: NextFunction) {
	const header = req.headers.authorization

	try {
		if (header) {
			const [, token] = header.split(' ')

			const user = jwt.verify(token, JWT_SECRET)

			req.user = user as IUserToken
			next()
		} else {
			return next(new UnauthorizedError('Authorization token not provided!'))
		}
	} catch (error) {
		return next(new UnauthorizedError('Token provided is not valid!'))
	}
}

async function verifyTokenAndAdmin(
	req: Request,
	res: Response,
	next: NextFunction
) {
	verifyToken(req, res, (err) => {
		if (err) return next(err)

		if (!req.user.isAdmin) {
			return next(new ForbiddenError('You are not allowed to do that!'))
		}

		next()
	})
}

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
