import { Router } from 'express'
// eslint-disable-next-line no-duplicate-imports
import type { Request, Response, NextFunction } from 'express'

import { getRequestLogs } from '../services/WebTraffic'

const TrafficController = Router()

TrafficController.get('', (req: Request, res: Response, next: NextFunction) =>
  getRequestLogs(res).catch((err) => next(err))
)

export default TrafficController
