import type { NextFunction, Request, Response } from 'express'

import { URL_EXCLUDED } from '../config'
import type { Method, MiddlewareCallBackFunction, Paths, UrlPath, UserRoles } from '../types'

function matchCurrentUrl(
  paths: Paths,
  urlPath: string,
  method: string
): { isMatched: boolean; userRoles?: UserRoles } {
  const matchedUrl: UrlPath | undefined = paths.find((item) => item.url === urlPath)

  if (matchedUrl) {
    const reqMethod = method.toUpperCase() as Method

    const isMatched = matchedUrl.methods ? matchedUrl.methods.includes(reqMethod) : true

    return { isMatched, userRoles: matchedUrl.userRoles }
  }

  return { isMatched: false }
}

const authenticateUser =
  (paths: Paths, middleware: MiddlewareCallBackFunction): MiddlewareCallBackFunction =>
  (req: Request, res: Response, next: NextFunction) => {
    const { path } = req
    const { isMatched, userRoles } = matchCurrentUrl(paths, path, req.method)

    console.log(path)
    if (isMatched) {
      return middleware(req, res, next, userRoles)
    }

    if (URL_EXCLUDED.includes(path)) {
      return next()
    }

    // eslint-disable-next-line no-magic-numbers
    return res.status(500).send({ message: 'Route Mismatch' })
  }

export const cars: ('🚗' | '🚙' | '🚕')[] = ['🚗', '🚙', '🚕']

export default authenticateUser
