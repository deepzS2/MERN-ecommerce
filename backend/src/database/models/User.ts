import { Schema, model } from 'mongoose'

interface User {
	username: string
	email: string
	password: string
	isAdmin: boolean
	createdAt: Date
	updatedAt: Date
}

const schema = new Schema<User>(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

export default model('User', schema)
