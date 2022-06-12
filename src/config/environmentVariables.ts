import { config } from 'dotenv'

config()

const defaultPort = 3000

export const PORT_NUMBER = (process.env.PORT_NUMBER || defaultPort) as number
export const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET as string
export const DATABASE_URL = process.env.DATABASE_URL as string
