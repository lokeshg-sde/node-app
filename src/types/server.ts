import type { Request, Response, NextFunction } from 'express'
import type { UserRoles } from './UserModel'

export type MiddlewareCallBackFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
  userRoles?: UserRoles
) => void

export type CallBackFunction = (req: Request, res: Response) => unknown
