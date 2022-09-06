import type { Request, Response } from 'express/index'
import type { SentMessageInfo } from 'nodemailer'
// import EventEmitter from 'events'

import { MailTransporter, STATUS_CODES } from '../config'
import { getMailOptions } from '../templates/emailHelpers/sendEmail'

export const notifyJobProposal = async (request: Request, response: Response): Promise<unknown> => {
  const jobOptions = getMailOptions(request.body.payload)

  console.log('Inside Email Notification Request')

  // MailTransporter.on('token', (token) => {
  //   // token
  //   console.log('A new access token was generated')
  //   console.log('User: %s', token.user)
  //   console.log('Access Token: %s', token.accessToken)
  //   console.log('Expires: %s', new Date(token.expires))
  // })

  // MailTransporter.transporter.mailer?.emit('token')

  // MailTransporter.once('token', (token) => {
  //   console.log(token)
  // })

  return MailTransporter.sendMail(jobOptions)
    .then((info: SentMessageInfo) => {
      response.status(STATUS_CODES.SUCCESS.code)
      response.send({
        message: `Email has been sent Successfully to ${jobOptions.to}`,
        mailInfo: JSON.stringify(info),
      })
    })
    .catch((error) => {
      if (error) {
        console.log(
          `There was some issue with the mail transporter ${JSON.stringify(
            error
          )}, with the Mail Options ${JSON.stringify(jobOptions)}`
        )
        response.status(STATUS_CODES.UNAUTHORIZED.code)
        response.send(`There was some issue with the mail transporter ${JSON.stringify(error)}`)
      }
    })
}
