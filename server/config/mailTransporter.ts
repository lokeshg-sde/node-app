import SIB_API_SDK from 'sib-api-v3-sdk'

import { SIB_API_KEY } from '.'

const client = SIB_API_SDK.ApiClient.instance
const apiKey = client.authentications['api-key']

apiKey.apiKey = SIB_API_KEY

export const MailTransporter = new SIB_API_SDK.TransactionalEmailsApi()
