import express from 'express'
import mongoose from 'mongoose'

import { PORT_NUMBER, DATABASE_URL, URL_CONFIG } from './src/config'
import { authenticateToken } from './src/auth/jwt'
import excludePublicUrlOnAuthenticate from './src/auth/authentocation'

import routes from './src/routes'

const app = express()

// middleware for authenticating token submitted with requests
app.use(
  excludePublicUrlOnAuthenticate(
    URL_CONFIG,
    authenticateToken
  )
)
app.use(express.json())
app.use('/', routes)

mongoose.connect(DATABASE_URL)
// .then(() => {
//   app.listen(portNumber, () => {
//     console.log('Database Connected')
//     console.log(`Server Started at ${portNumber}`)
//   })
// })
// .catch((error) => {
//   console.log(error.message)
//   console.log('URI: ' + mongoString)
// })
const database = mongoose.connection

database.on('error', (error: unknown) => {
  console.log(error)
})

database.once('connected', () => {
  app.listen(PORT_NUMBER, () => {
    console.log('Database Connected')
    console.log(`Server Started at ${PORT_NUMBER}`)
  })
})
