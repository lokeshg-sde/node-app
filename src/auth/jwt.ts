/* eslint-disable no-magic-numbers */
import { sign, verify } from 'jsonwebtoken'
// eslint-disable-next-line no-duplicate-imports
import type { SignOptions, VerifyErrors, VerifyOptions } from 'jsonwebtoken'
import type { NextFunction, Request, Response } from 'express'

import { JWT_TOKEN_SECRET } from '../config'
import HttpError from '../helpers/HttpError'
import type { JwtTokePayload, UserRole, UserRoles } from '../types'

const signOptions: SignOptions = { expiresIn: '1d', algorithm: 'HS512' }

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
  userRole?: UserRoles
): void {
  const authHeader = JSON.parse(JSON.stringify(req.headers)).authorization
  const token = authHeader && authHeader.split(' ')[0]

  console.log(`Resquest Type : ${JSON.stringify(req.headers)}`)
  console.log(`Autherizaton Token: ${authHeader}`)
  if (token == null) {
    console.log('Unauthorised User or Token')
    res.status(401).send({ message: 'user not authorised' })

    return
  }

  verify(
    token,
    JWT_TOKEN_SECRET,
    signOptions as VerifyOptions,
    async (err: VerifyErrors | null, user: unknown) => {
      if (err) {
        console.log(`Authentication Error: ${JSON.stringify(user)}`)

        throw new HttpError(403, 'Authentication Error, Try Login Again', err)
      }

      if (user) {
        const { username, role } = JSON.parse(JSON.stringify(user)).data as JwtTokePayload

        req.body.user = JSON.parse(JSON.stringify(user)).data as JwtTokePayload

        if (userRole && userRole.includes(role)) {
          console.log(`Autherized User ${JSON.stringify(username)} as ${role.toLocaleUpperCase()}`)
          next()
        } else if (!userRole && username) {
          console.log(`Autherized User ${JSON.stringify(username)} as ${role.toLocaleUpperCase()}`)
          next()
        } else {
          throw new HttpError(401, 'Permission Denied, Please login with diffrent credentials', {
            username,
            role
          })
        }
      } else {
        throw new HttpError(404, 'User Credentials Not Found and Not Authorised', {})
      }
    }
  )
}

export function generateAccessToken(userInfo: {
  username: string
  role: UserRole
  id: string | number
}): string {
  return sign({ data: userInfo }, JWT_TOKEN_SECRET, signOptions)
}
