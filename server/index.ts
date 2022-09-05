import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import fs from 'fs'
import morgan from 'morgan'

import { PORT_NUMBER, DATABASE_URL, URL_CONFIG, NODE_ENV } from './config'
import { authenticateToken } from './auth/jwt'
import excludePublicUrlOnAuthenticate from './auth/authentication'
import middlewareWrapper from './auth/cors'
import routes from './routes'

const app = express()

const buildDir = [__dirname, '../client', 'build']
const buildPublicDir = [__dirname, '../client', 'public']
const publicDir = [__dirname, '/public']
const assets = [__dirname, '../assets']

const accessLogStream = fs.createWriteStream(path.join(__dirname, `../logs/${NODE_ENV}.log`), {
  flags: 'a',
})

// middleware for authenticating token submitted with requests
app.use(express.json())
app.use(
  morgan(
    // eslint-disable-next-line max-len
    ':remote-addr :remote-user [:date[clf]] :method :url HTTP/:http-version :status :res[content-length] - :response-time ms',
    {
      stream: accessLogStream,
    }
  )
)

app.use(
  morgan((tokens, req, res) =>
    [
      tokens['remote-addr'](req, res),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' ')
  )
)
app.use(express.static(path.join(...buildDir)))
app.use(express.static(path.join(...buildPublicDir)))
app.use('/public', express.static(path.join(...publicDir)))
app.use('/assets', express.static(path.join(...assets)))
app.use(middlewareWrapper())
app.use(excludePublicUrlOnAuthenticate(URL_CONFIG, authenticateToken))
app.get(['/', '/portfolio', '/users/login', '/users/register'], (req, res) =>
  res.sendFile(path.join(...buildDir, 'index.html'))
)

app.get('/cv', (req, res) => {
  try {
    res.download(path.resolve(path.join(...assets, '/LOKESH-G.pdf')))
  } catch (err) {
    console.log(err)
  }
})
app.use('/', routes)
app.get('/', (req, res) => {
  res.redirect('/users/login')
})

mongoose.connect(DATABASE_URL)

const database = mongoose.connection

database.on('error', (error: unknown) => {
  console.log(error)
})

database.once('connected', () => {
  app.listen(PORT_NUMBER, '0.0.0.0', () => {
    console.log('Database Connected')
    console.log(`Server Started at ${PORT_NUMBER}`)
  })
})
