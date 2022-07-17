import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import { PORT_NUMBER, DATABASE_URL, URL_CONFIG } from './server/config'
import { authenticateToken } from './server/auth/jwt'
import excludePublicUrlOnAuthenticate from './server/auth/authentocation'
import middlewareWrapper from './server/auth/cors'

import routes from './server/routes'

const app = express()

const buildDir = [__dirname, 'client', 'build']
const buildPublicDir = [__dirname, 'client', 'public']
const publicDir = [__dirname, 'public']

// middleware for authenticating token submitted with requests
app.use(express.json())
app.use(express.static(path.join(...buildDir)))
app.use(express.static(path.join(...buildPublicDir)))
app.use(express.static(path.join(...publicDir)))

app.use(middlewareWrapper())
app.use(excludePublicUrlOnAuthenticate(URL_CONFIG, authenticateToken))
app.get('/home', (req, res) => {
  res.sendFile(path.join(...buildDir, 'index.html'))
})
app.use('/', routes)
app.get('/', (req, res) => {
  res.redirect('/home')
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
