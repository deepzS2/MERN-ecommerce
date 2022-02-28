import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT
export const MONGO_DATABASE_URI = process.env.MONGO_DATABASE_URI
export const CRYPTO_SECRET = process.env.CRYPTO_SECRET
export const JWT_SECRET = process.env.JWT_SECRET
export const STRIPE_KEY = process.env.STRIPE_KEY
