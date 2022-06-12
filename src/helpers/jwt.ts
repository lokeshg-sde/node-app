/* eslint-disable no-magic-numbers */
import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'

// import { User } from '../models'

// get password vars from .env file
config()

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): Response | undefined {
  const authHeader = JSON.parse(JSON.stringify(req.headers)).authorization
  const token = authHeader && authHeader.split(' ')[0]

  console.log(`Resquest Type : ${JSON.stringify(req.headers)}`)
  console.log(`Autherizaton Token: ${authHeader}`)
  if (token == null) {
    console.log('Unauthorised User or Token')

    res.status(401).send({ message: 'user not authorised' })

    // res.redirect('/users/login')

    return
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jwt.verify(token, process.env.JWT_TOKEN_SECRET as string, async (err: any, user: any) => {
    console.log(`Authentication Error: ${JSON.stringify(user)}`)

    if (err) {
      return res.sendStatus(403)
    }

    const username = JSON.parse(JSON.stringify(user)).data

    if (username) {
      // const loggedIn = await User.findOne({
      //   username
      // })

      // req.body.user = username || {}

      console.log(`Autherized User ${JSON.stringify(username)}`)
    }

    next()
  })
}

export function generateAccessToken(username: string): string {
  return jwt.sign({ data: username }, process.env.JWT_TOKEN_SECRET as string, {
    expiresIn: '1h'
  })
}
