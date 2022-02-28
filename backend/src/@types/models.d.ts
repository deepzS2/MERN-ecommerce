import { Types } from 'mongoose'

interface IUser {
	username: string
	email: string
	password: string
	isAdmin: boolean
	createdAt: Date
	updatedAt: Date
}

interface ICart {
	userId: Types.ObjectId
	products: { productId: Types.ObjectId; quantity: number }[]
	createdAt: Date
	updatedAt: Date
}

interface IOrder {
	userId: Types.ObjectId
	products: { productId: Types.ObjectId; quantity: number }[]
	amount: number
	address: Record<string, string>
	status: string
	createdAt: Date
	updatedAt: Date
}

interface IProduct {
	title: string
	desc: string
	img: string
	categories: string[]
	size: string
	color: string
	price: number
	createdAt: Date
	updatedAt: Date
}
