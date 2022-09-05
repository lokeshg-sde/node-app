import AWS from 'aws-sdk'

import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_KEY_VALUE,
  AWS_REGION_LOCATION,
} from './environmentVariables'

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_KEY_VALUE,
  region: AWS_REGION_LOCATION,
})

export const DynamoDBClient = new AWS.DynamoDB.DocumentClient()
