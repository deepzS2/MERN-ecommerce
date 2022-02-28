import { Schema, model } from 'mongoose'

interface Product {
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

const schema = new Schema<Product>(
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
