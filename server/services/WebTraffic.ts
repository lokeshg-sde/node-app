import type { Response } from 'express'

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

export const getRequestLogs = async (res: Response): Promise<void> => {
  try {
    await DynamoDBClient.scan(PARAMS, (err, data) => {
      if (err) {
        console.log(err)
        res.send({ message: 'Error Occurred', status: 401, err })
      } else {
        const { Items } = data

        if (Items) {
          console.log('Record Count: %d', Items.length)

          res.send(Items)
        }
      }
    })
  } catch (error) {
    console.log('Error Found On Request')
    res.send({ message: 'Error Occurred', status: 401, error })
  }
}
