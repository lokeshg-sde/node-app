import type { Reqest, response, NextFunction } from '@types/express'

export type MiddlewareCallBackFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => unknown

export type CallBackFunction = (req: Request, res: Response) => unknown
