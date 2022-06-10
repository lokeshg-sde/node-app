import env from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import unless from 'express-unless'

import { authenticateToken } from './src/helpers/jwt'

import routes from './src/routes'

env.config()

const DEFAULT_PORT = 3000
const mongoString: string = process.env.DATABASE_URL as string
const portNumber: number | string = process.env.PORT || DEFAULT_PORT
const app = express()

// middleware for authenticating token submitted with requests
authenticateToken.unless = unless
app.use(
  authenticateToken.unless({
    path: [
      { url: '/users/login', methods: ['POST'] },
      { url: '/users/register', methods: ['POST'] }
    ]
  })
)
app.use(express.json())
app.use('/', routes)

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error: unknown) => {
  console.log(error)
})

database.once('connected', () => {
  app.listen(portNumber, () => {
    console.log('Database Connected')
    console.log(`Server Started at ${portNumber}`)
  })
})
