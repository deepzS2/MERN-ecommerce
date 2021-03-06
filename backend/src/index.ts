import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import createError from 'http-errors'
import morgan from 'morgan'

import error from '@utils/error'
import morganLogger from '@utils/morganLogger'

import routes from './routes'

// App
const app = express()

// CORS and helmet
app.use(cors())
app.use(helmet())

// JSON and URLENCODED
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Logger and Cookies
app.use(morgan(morganLogger))
app.use(cookieParser())

// Routes
app.use('/api/', routes)

// Catch 404 and forward to error handler
app.use(function (_req, _res, next) {
	next(createError(404))
})

// Error Handler
app.use(error)

export default app
