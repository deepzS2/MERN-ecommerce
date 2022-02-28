import { Request, Response, NextFunction } from 'express'

import { IApiError } from '@/@types'

export class ServerInternalError extends Error implements IApiError {
	public status = 500
	public name = 'Server Internal Error'
	public message: string

	constructor(message: string) {
		super(message)

		this.message = message
	}
}

export class ForbiddenError extends Error implements IApiError {
	public status = 403
	public name = 'Forbidden'
	public message: string

	constructor(message: string) {
		super(message)

		this.message = message
	}
}

export class NotFoundError extends Error implements IApiError {
	public status = 404
	public name = 'Not Found'
	public message: string

	constructor(message: string) {
		super(message)

		this.message = message
	}
}

export class UnauthorizedError extends Error implements IApiError {
	public status = 401
	public name = 'Unauthorized'
	public message: string

	constructor(message: string) {
		super(message)

		this.message = message
	}
}

export default function (
	err: IApiError,
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_: NextFunction
) {
	const response = {
		code: err.status,
	}

	if (err.message) {
		Object.assign(response, { message: err.message })
	}

	if (err.name) {
		Object.assign(response, { name: err.name })
	}

	res.status(err.status).send(response)
}
