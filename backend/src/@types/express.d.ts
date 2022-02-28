import { IUser } from './models'
import 'express'

export interface IUserToken {
	id: string
	isAdmin: boolean
}

declare global {
	declare namespace Express {
		export interface Request {
			user?: IUserToken
		}
	}
}
