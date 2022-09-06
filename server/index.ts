import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import { PORT_NUMBER, DATABASE_URL, URL_CONFIG } from './config'
import { authenticateToken } from './auth/jwt'
import excludePublicUrlOnAuthenticate from './auth/authentication'
import middlewareWrapper from './auth/cors'
import { logger, defaultLogger } from './middleware/loggers'
import routes from './routes'

const app = express()

const buildDir = [__dirname, '../client', 'build']
const assets = [__dirname, '../assets']

app.use(express.json())
app.use(logger)
app.use(defaultLogger)
app.use(express.static(path.join(...buildDir)))
app.use('/assets', express.static(path.join(...assets)))

// middleware for authenticating token submitted with requests
app.use(excludePublicUrlOnAuthenticate(URL_CONFIG, authenticateToken))
app.use(middlewareWrapper())

// application routes
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
