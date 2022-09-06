import { createTransport } from 'nodemailer'

import {
  MAIL_TRANSPORTER_EMAIL,
  MAIL_TRANSPORTER_PASS,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
} from './environmentVariables'

export const MailTransporter = createTransport({
  auth: {
    type: 'OAUTH2',
    user: MAIL_TRANSPORTER_EMAIL,
    pass: MAIL_TRANSPORTER_PASS,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    refreshToken: GOOGLE_REFRESH_TOKEN,
    accessToken: process.env.GOOGLE_CLIENT_ACCESS,
  },
  service: 'gmail',
})
