import { config } from 'dotenv'

config()

const defaultPort = 5000

export const PORT_NUMBER = (process.env.PORT || defaultPort) as number
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET as string
export const DATABASE_URL = process.env.DATABASE_URL as string
export const MAIL_TRANSPORTER_EMAIL = process.env.NODE_MAILER_EMAIL as string
// export const MAIL_TRANSPORTER_PASS = process.env.NODE_MAILER_EMAIL_PASS as string
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string
export const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN as string
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID as string
export const AWS_SECRET_KEY_VALUE = process.env.AWS_SECRET_KEY_VALUE as string
export const AWS_REGION_LOCATION = process.env.AWS_REGION_LOCATION as string
export const PORTFOLIO_EMAIL = process.env.PORTFOLIO_EMAIL as string
export const SIB_API_KEY = process.env.SIB_API_KEY as string
