import { Schema, model } from 'mongoose'

import { IProduct } from '@/@types/models'

const schema = new Schema<IProduct>(
	{
		title: { type: String, required: true, unique: true },
		desc: { type: String, required: true },
		img: { type: String, required: true },
		categories: { type: [{ type: String }] },
		size: { type: String },
		color: { type: String },
		price: { type: Number, required: true },
	},
	{ timestamps: true }
)

export default model('Product', schema)
