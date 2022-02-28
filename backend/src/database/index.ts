import mongoose from 'mongoose'

import { MONGO_DATABASE_URI } from '@/config'
import Logger from '@utils/logger'

export default function openConnection() {
	return mongoose
		.connect(MONGO_DATABASE_URI)
		.then(() => Logger.info('Connected to database!'))
		.catch((err) =>
			Logger.error(
				'Something went wrong connecting to database: ' + err.message
			)
		)
}
