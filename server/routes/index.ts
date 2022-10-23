import express from 'express'

import UserControllers from '../controllers/UserController'
import MailController from '../controllers/MailController'
import TrafficController from '../controllers/TrafficController'

const router = express.Router()

router.use('/users', UserControllers)
router.use('/email', MailController)
router.use('/web-traffic', TrafficController)

export default router
