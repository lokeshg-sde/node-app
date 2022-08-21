import { config } from 'dotenv'

config()

const defaultPort = 5000

export const PORT_NUMBER = (process.env.PORT_NUMBER || process.env.PORT || defaultPort) as number
export const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET as string
export const DATABASE_URL = process.env.DATABASE_URL as string
export const MAIL_TRANSPORTER_EMAIL = process.env.NODE_MAILER_EMAIL as string
export const MAIL_TRANSPORTER_PASS = process.env.NODE_MAILER_EMAIL_PASS as string
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string
export const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN as string
