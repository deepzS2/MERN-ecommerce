import { Schema, model } from 'mongoose'

import { IOrder } from '@/@types/models'

const schema = new Schema<IOrder>(
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
