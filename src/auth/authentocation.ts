import type { Request, Response, NextFunction } from 'express'

import type { MiddlewareCallBackFunction, Paths, UrlPath, Method } from '../types'

function matchCurrentUrl(paths: Paths, urlPath: string, method: string): boolean {
  const matchedUrl: UrlPath | undefined = paths.find((item) => item.url === urlPath)

  if (matchedUrl) {
    return matchedUrl.methods ? matchedUrl.methods.includes(method.toUpperCase() as Method) : true
  }

  return false
}

const authenticateUser =
  (paths: Paths, middleware: MiddlewareCallBackFunction): MiddlewareCallBackFunction =>
  (req: Request, res: Response, next: NextFunction) => {
    const isMatched = matchCurrentUrl(paths, req.path, req.method)

    if (isMatched) {
      return next()
    }

    middleware(req, res, next)
  }

export default authenticateUser
