import { Schema, model, Types } from 'mongoose'

interface Order {
	userId: Types.ObjectId
	products: { productId: Types.ObjectId; quantity: number }[]
	amount: number
	address: Record<string, string>
	status: string
	createdAt: Date
	updatedAt: Date
}

const schema = new Schema<Order>(
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
		address: { type: Object, required: true },
		amount: { type: Number, required: true },
		status: { type: String, default: 'pending' },
	},
	{ timestamps: true }
)

export default model('Order', schema)
