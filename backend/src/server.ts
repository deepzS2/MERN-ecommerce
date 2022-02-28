import openConnection from '@database/index'
import Logger from '@utils/logger'

import { PORT } from './config'
import app from './index'

app.listen(PORT, async () => {
	try {
		await openConnection()
		Logger.info(`Database models synchronized!`)

		Logger.info(`Server iniciado na URL http://localhost:${PORT}`)
	} catch (error) {
		Logger.error(
			`Something went wrong while trying to synchronize database models...`
		)
	}
})
