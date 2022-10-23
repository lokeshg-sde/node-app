import type { Request, Response } from 'express/index'
import type { SentMessageInfo } from 'nodemailer'

import { MailTransporter, STATUS_CODES } from '../config'
import { getMailOptions } from '../templates/emailHelpers/sendEmail'

export const notifyJobProposal = async (request: Request, response: Response): Promise<unknown> => {
  const jobOptions = getMailOptions(request.body.payload)

  return MailTransporter.sendTransacEmail(jobOptions)
    .then((info: SentMessageInfo) => {
      response.status(STATUS_CODES.SUCCESS.code)
      response.send({
        message: `Email has been sent Successfully to ${jobOptions.to}`,
        mailInfo: JSON.stringify(info),
      })
    })
    .catch((error: unknown) => {
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
