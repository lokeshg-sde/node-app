import type { Request, Response, NextFunction } from 'express'

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  if (typeof err === 'string') {
    // custom application error
    return res.status(400).json({ message: err })
  }

  if (err.name === 'ValidationError') {
    // mongoose validation error
    return res.status(400).json({ message: err.message })
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).json({ message: 'Token not valid' })
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message })
}
