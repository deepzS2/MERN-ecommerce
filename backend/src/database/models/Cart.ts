import { Schema, model, Types } from 'mongoose'

interface Cart {
	userId: Types.ObjectId
	products: { productId: Types.ObjectId; quantity: number }[]
	createdAt: Date
	updatedAt: Date
}

const schema = new Schema<Cart>(
	{
		userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
		products: {
			type: [
				{
					productId: { type: Schema.Types.ObjectId, ref: 'Product' },
					quantity: { type: Number, default: 1 },
				},
			],
		},
	},
	{ timestamps: true }
)

export default model('Cart', schema)
