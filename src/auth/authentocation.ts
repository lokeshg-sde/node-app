import type { Request, Response, NextFunction } from 'express'

import { URL_EXCLUDED } from '../config'
import type { MiddlewareCallBackFunction, Paths, UrlPath, Method, UserRoles } from '../types'

function matchCurrentUrl(
  paths: Paths,
  urlPath: string,
  method: string
): { isMatched: boolean; userRoles?: UserRoles } {
  const matchedUrl: UrlPath | undefined = paths.find((item) => item.url === urlPath)

  if (matchedUrl) {
    const isMatched = matchedUrl.methods
      ? matchedUrl.methods.includes(method.toUpperCase() as Method)
      : true

    return { isMatched, userRoles: matchedUrl.userRoles }
  }

  return { isMatched: false }
}

const authenticateUser =
  (paths: Paths, middleware: MiddlewareCallBackFunction): MiddlewareCallBackFunction =>
  (req: Request, res: Response, next: NextFunction) => {
    const { isMatched, userRoles } = matchCurrentUrl(paths, req.path, req.method)

    if (isMatched) {
      middleware(req, res, next, userRoles)
    }

    if (URL_EXCLUDED.includes(req.path)) {
      return next()
    }

    res.status(500).send({ message: 'Route Mismatch' })
  }

export default authenticateUser
