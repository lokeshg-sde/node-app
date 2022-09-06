import { Router } from 'express'

import { notifyJobProposal } from '../services/EmailServices'

const emailRouter = Router()

emailRouter.post('/notify-job-proposal', notifyJobProposal)

export default emailRouter
