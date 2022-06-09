import env from 'dotenv'

import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

env.config()

const mongoString: string = process.env.DATABASE_URL as string
const portNumber: number | string = process.env.PORT || 3000
const app = express()

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
