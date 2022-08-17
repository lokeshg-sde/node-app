import type { Response } from 'express'
import type { SendMailOptions, SentMessageInfo } from 'nodemailer'

import { MailTransporter, MAIL_TRANSPORTER_EMAIL, STATUS_CODES } from '../../config'

import { getMessageBody } from '../email/registerToJob'

export const getMailOptions = (
  from: string,
  to: string,
  name: string,
  message: string
): SendMailOptions => {
  const html = getMessageBody(name, message)
  const subject = 'Job Proposal for your technical skills'

  return {
    from: `Express App ${MAIL_TRANSPORTER_EMAIL}`,
    to: `Lokesh G ${to}`,
    cc: [`${name} ${from}`, `Express App ${MAIL_TRANSPORTER_EMAIL}`],
    html,
    subject,
  }
}

export const sendEmail = (options: SendMailOptions, response: Response): void => {
  const sendMessageHandler = (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.log(
        `There was some issue with the mail transporter ${JSON.stringify(
          error
        )}, with the Mail Options ${JSON.stringify(options)}`
      )
      response.status(STATUS_CODES.UNAUTHORIZED.code)
      response.send(`There was some issue with the mail transporter ${JSON.stringify(error)}`)
    } else {
      response.status(STATUS_CODES.SUCCESS.code)
      response.send({
        message: `Email has been sent Successfully to ${options.to}`,
        mailInfo: JSON.stringify(info),
      })
    }
  }

  MailTransporter.sendMail(options, sendMessageHandler)
}
