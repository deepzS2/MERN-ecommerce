import { Schema, model } from 'mongoose'

import { ICart } from '@/@types/models'

const schema = new Schema<ICart>(
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
