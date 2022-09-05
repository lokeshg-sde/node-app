import type { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { DynamoDBClient } from '../config'
import { generateUniqueId } from '../helpers'

const PARAMS = {
  TableName: 'Traffic',
}

type LOGGER_INFO = {
  remote: string
  method: string
  url: string
  status: string
  contentLength: string
  responseTime: string
  time: string
}

export const AddRequestLog = (info: LOGGER_INFO): void => {
  DynamoDBClient.put(
    {
      ...PARAMS,
      Item: {
        uuid: generateUniqueId(),
        ...info,
      },
    },
    (err) => {
      if (err) {
        console.log('Error Found while writing logger to AWS', err)
      }
    }
  )
}

export const getRequestLogs = async (): Promise<LOGGER_INFO & { uuid: string }[]> => {
  let dataRows: Promise<unknown> | DocumentClient.AttributeMap[] | undefined

  try {
    DynamoDBClient.scan(PARAMS, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const { Items } = data

        if (Items) {
          dataRows = [...Items]
        }
      }
    })
  } catch (error) {
    console.log('Error Found On Request')
  }

  return dataRows as Promise<LOGGER_INFO & { uuid: string }[]>
}
