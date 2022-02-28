import { Schema, model } from 'mongoose'

import { IUser } from '@/@types/models'

const schema = new Schema<IUser>(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

export default model('User', schema)
