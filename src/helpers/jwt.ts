import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'

// get password vars from .env file
dotenv.config()

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): Response | undefined {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.JWT_TOKEN_SECRET as string, (err, user) => {
    console.log(err)

    if (err) {
      return res.sendStatus(403)
    }
    req.body.user = user

    next()
  })
}

export function generateAccessToken(username: string): string {
  return jwt.sign({ data: username }, process.env.JWT_TOKEN_SECRET as string, {
    expiresIn: '1h'
  })
}
