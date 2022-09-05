import fs from 'fs'
import path from 'path'
import morgan from 'morgan'

import { NODE_ENV } from '../config'
import { LOGGER_URL_REGEX } from '../constants'
import { AddRequestLog } from '../services/WebTraffic'

export const logger = morgan((tokens, req, res) => {
  const info = {
    remote: tokens['remote-addr'](req, res) as string,
    method: tokens.method(req, res) as string,
    url: tokens.url(req, res) as string,
    status: tokens.status(req, res) as string,
    contentLength: tokens.res(req, res, 'content-length') as string,
    responseTime: tokens['response-time'](req, res) as string,
    time: tokens.date(req, res) as string,
  }

  if (!LOGGER_URL_REGEX.test(info.url)) {
    AddRequestLog(info)
    console.log('AWS LOGGER HAS BEEN REGISTERED')
  }

  return [
    tokens['remote-addr'](req, res),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
  ].join(' ')
})

const loggerPath = path.join(__dirname, `../../logs/${NODE_ENV}.log`)
const logFile = fs.createWriteStream(loggerPath, {
  flags: 'a',
})

export const defaultLogger = morgan(
  ':remote-addr :remote-user [:date[clf]] :method :url :status :res[content-length] - :response-time ms',
  {
    stream: logFile,
  }
)
