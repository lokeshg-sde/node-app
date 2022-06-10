import env from 'dotenv'
import unless from 'express-unless'
import express from 'express'
import mongoose from 'mongoose'

import { authenticateToken } from './src/helpers/jwt'
import routes from './src/routes'

env.config()

const mongoString: string = process.env.DATABASE_URL as string
const portNumber: number | string = process.env.PORT || 3000
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

database.on('error', (error: any) => {
  console.log(error)
})

database.once('connected', () => {
  app.listen(portNumber, () => {
    console.log('Database Connected')
    console.log(`Server Started at ${portNumber}`)
  })
})
